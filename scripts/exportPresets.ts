import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

type ValuesMap = Record<string, Record<string, string>>;
type PresetExtracted = { id?: string; title?: string; values?: ValuesMap };

const PROJECT_ROOT = process.cwd();
const DEFAULT_INPUT = path.join(PROJECT_ROOT, 'src', 'presets', 'presets.ts');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'telegram-presets.md');

const SECTION_ORDER = [
    'shot',
    'lensEffects',
    'subject',
    'scene',
    'visualDetails',
    'cinematography',
    'textElements',
    'style'
] as const;

const SECTION_LABELS: Record<(typeof SECTION_ORDER)[number], string> = {
    shot: 'SHOT',
    lensEffects: 'LENS EFFECTS',
    subject: 'SUBJECT',
    scene: 'SCENE',
    visualDetails: 'VISUAL DETAILS',
    cinematography: 'CINEMATOGRAPHY',
    textElements: 'TEXT ELEMENTS',
    style: 'STYLE'
};

const FIELD_LABELS: Record<string, Record<string, string>> = {
    shot: { composition: 'Composition', cameraSettings: 'Camera Settings', filmGrain: 'Film Grain' },
    lensEffects: { optics: 'Optics', artifacts: 'Artifacts', depthOfField: 'Depth of Field' },
    subject: { description: 'Description', wardrobe: 'Wardrobe', grooming: 'Grooming' },
    scene: { location: 'Location', timeOfDay: 'Time of Day', environment: 'Environment' },
    visualDetails: { action: 'Action', props: 'Props', physics: 'Physics' },
    cinematography: { lighting: 'Lighting', tone: 'Tone', colorPalette: 'Color Palette' },
    textElements: { visibleText: 'Visible Text', typography: 'Typography', placement: 'Placement' },
    style: { visualAesthetic: 'Visual Aesthetic' }
};

const safeText = (v: unknown): string => {
    const s = String(v ?? '').trim();
    if (!s) return '';
    return s.replace(/```/g, '``\u200b`');
};

const stripComments = (src: string): string => {
    const noBlock = src.replace(/\/\*[\s\S]*?\*\//g, '');
    return noBlock.replace(/(^|\s)\/\/.*$/gm, '$1');
};

const findMatchingBracket = (src: string, startIndex: number, openCh: string, closeCh: string): number => {
    let i = startIndex;
    let depth = 0;
    let inSingle = false;
    let inDouble = false;
    let inTemplate = false;

    while (i < src.length) {
        const ch = src[i];
        const prev = i > 0 ? src[i - 1] : '';

        if (!inDouble && !inTemplate && ch === "'" && prev !== '\\') inSingle = !inSingle;
        else if (!inSingle && !inTemplate && ch === '"' && prev !== '\\') inDouble = !inDouble;
        else if (!inSingle && !inDouble && ch === '`' && prev !== '\\') inTemplate = !inTemplate;

        if (!inSingle && !inDouble && !inTemplate) {
            if (ch === openCh) depth++;
            if (ch === closeCh) {
                depth--;
                if (depth === 0) return i;
            }
        }

        i++;
    }

    return -1;
};

const extractPresetsArrayBody = (src: string): string | null => {
    const m = src.match(/(?:export\s+)?(?:const|let|var)\s+presets\b[\s\S]*?=\s*\[/m);
    if (!m || m.index === undefined) return null;

    const startFrom = m.index + m[0].length - 1;
    const arrStart = src.indexOf('[', startFrom);
    if (arrStart === -1) return null;

    const arrEnd = findMatchingBracket(src, arrStart, '[', ']');
    if (arrEnd === -1) return null;

    return src.slice(arrStart + 1, arrEnd);
};

const extractTopLevelObjectBlocks = (arrayBody: string): string[] => {
    const blocks: string[] = [];
    let j = 0;

    while (j < arrayBody.length) {
        const open = arrayBody.indexOf('{', j);
        if (open === -1) break;

        const close = findMatchingBracket(arrayBody, open, '{', '}');
        if (close === -1) break;

        blocks.push(arrayBody.slice(open, close + 1));
        j = close + 1;
    }

    return blocks;
};

const extractIdTitle = (block: string): { id?: string; title?: string } => {
    const idMatch = block.match(/id\s*:\s*'([^']*)'|id\s*:\s*"([^"]*)"/);
    const titleMatch = block.match(/title\s*:\s*'([^']*)'|title\s*:\s*"([^"]*)"/);

    const id = idMatch ? (idMatch[1] ?? idMatch[2] ?? '') : '';
    const title = titleMatch ? (titleMatch[1] ?? titleMatch[2] ?? '') : '';

    return { id: id || undefined, title: title || undefined };
};

const extractValuesObjectLiteral = (block: string): string | null => {
    const idx = block.indexOf('values');
    if (idx === -1) return null;

    const colon = block.indexOf(':', idx);
    if (colon === -1) return null;

    const open = block.indexOf('{', colon);
    if (open === -1) return null;

    const close = findMatchingBracket(block, open, '{', '}');
    if (close === -1) return null;

    return block.slice(open, close + 1);
};

const toJsonLike = (valuesLiteral: string): string => {
    const noTrailingCommas = valuesLiteral.replace(/,\s*([}\]])/g, '$1');

    const keysQuoted = noTrailingCommas.replace(
        /([,{]\s*)([a-zA-Z_$][\w$]*)\s*:/g,
        '$1"$2":'
    );

    const singleToDouble = keysQuoted.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (_m, g1) => {
        const unescaped = String(g1).replace(/\\'/g, "'");
        const escaped = unescaped.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        return `"${escaped}"`;
    });

    const templateToDouble = singleToDouble.replace(/`([^`\\]*(?:\\.[^`\\]*)*)`/g, (_m, g1) => {
        const raw = String(g1);
        if (raw.includes('${')) return `"${safeText('')}"`;
        const escaped = raw.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        return `"${escaped}"`;
    });

    return templateToDouble;
};

const parseValues = (valuesLiteral: string): ValuesMap => {
    const jsonLike = toJsonLike(valuesLiteral);
    return JSON.parse(jsonLike) as ValuesMap;
};

const formatSection = (sectionKey: string, sectionValue?: Record<string, string>): string => {
    if (!sectionValue) return '';

    const fields = FIELD_LABELS[sectionKey] ?? {};
    const parts: string[] = [];

    for (const k of Object.keys(fields)) {
        const v = safeText(sectionValue[k]);
        if (!v) continue;
        parts.push(` • ${fields[k]}: ${v}`);
    }

    for (const k of Object.keys(sectionValue)) {
        if (fields[k]) continue;
        const v = safeText(sectionValue[k]);
        if (!v) continue;
        const label = k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
        parts.push(` • ${label}: ${v}`);
    }

    if (parts.length === 0) return '';
    const sectionLabel = SECTION_LABELS[sectionKey as keyof typeof SECTION_LABELS] ?? sectionKey.toUpperCase();
    return `${sectionLabel}: ${parts.join('')}`;
};

const formatPresetBody = (p: PresetExtracted): string => {
    const title = safeText(p.title);
    const id = safeText(p.id);

    const header = `PRESET: ${title || '(untitled)'}${id ? ` (${id})` : ''}`;
    const lines: string[] = [header, ''];

    for (const section of SECTION_ORDER) {
        const sectionText = formatSection(section, p.values?.[section]);
        if (sectionText) lines.push(sectionText, '');
    }

    while (lines.length > 0 && lines[lines.length - 1] === '') lines.pop();
    return lines.join('\n');
};

const quoteMonospace = (text: string): string => {
    const lines = text.split('\n').map((l) => `> ${l}`);
    return ['> ```', ...lines, '> ```'].join('\n');
};

const main = async () => {
    const inputArg = process.argv[2];
    const inputPath = inputArg
        ? path.isAbsolute(inputArg)
            ? inputArg
            : path.join(PROJECT_ROOT, inputArg)
        : DEFAULT_INPUT;

    const raw = await readFile(inputPath, 'utf8');
    const src = stripComments(raw);

    const arrayBody = extractPresetsArrayBody(src);
    if (!arrayBody) {
        process.stdout.write(`Presets array not found in: ${inputPath}\n`);
        process.stdout.write(`Expected something like: export const presets = [ ... ]\n`);
        process.exit(1);
    }

    const blocks = extractTopLevelObjectBlocks(arrayBody);

    let parsed = 0;
    let skippedNoValues = 0;
    let skippedParseFail = 0;

    const extracted: PresetExtracted[] = [];

    for (const b of blocks) {
        const { id, title } = extractIdTitle(b);
        const valuesLiteral = extractValuesObjectLiteral(b);
        if (!valuesLiteral) {
            skippedNoValues++;
            continue;
        }

        try {
            const values = parseValues(valuesLiteral);
            extracted.push({ id, title, values });
            parsed++;
        } catch {
            skippedParseFail++;
        }
    }

    const out = extracted.map((p) => quoteMonospace(formatPresetBody(p))).join('\n\n');

    await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
    await writeFile(OUTPUT_FILE, out, 'utf8');

    process.stdout.write(`OK: ${OUTPUT_FILE}\n`);
    process.stdout.write(`Preset objects found: ${blocks.length}\n`);
    process.stdout.write(`Presets exported: ${parsed}\n`);
    process.stdout.write(`Skipped (no values): ${skippedNoValues}\n`);
    process.stdout.write(`Skipped (parse fail): ${skippedParseFail}\n`);
};

main();
