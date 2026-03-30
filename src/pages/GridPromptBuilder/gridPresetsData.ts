/**
 * Grid prompt presets and metadata for the Grid Prompt Builder guide.
 * This file stores composition-focused shot definitions and preview images for each preset.
 */
import abstractMacroSurfaceImage from '../../assets/grid/abstract-macro-surface.png'
import architecturalFrameImage from '../../assets/grid/architectural-frame.png'
import asymmetricBalanceImage from '../../assets/grid/asymmetric-balance.png'
import atmosphericDistanceImage from '../../assets/grid/atmospheric-distance.png'
import basicCloseUpImage from '../../assets/grid/basic-close-up.png'
import basicMediumShotImage from '../../assets/grid/basic-medium-shot.png'
import basicWideShotImage from '../../assets/grid/basic-wide-shot.png'
import btsFilmSnapshotImage from '../../assets/grid/bts-film-snapshot.png'
import directFlashSnapshotImage from '../../assets/grid/direct-flash-snapshot.png'
import dualFocusDepthImage from '../../assets/grid/dual-focus-depth.png'
import editorialCropImage from '../../assets/grid/editorial-crop.png'
import editorialMakeupFocusImage from '../../assets/grid/editorial-makeup-focus.png'
import highlightFocusImage from '../../assets/grid/highlight-focus.png'
import macroFaceFeaturesImage from '../../assets/grid/macro-face-features.png'
import minimalistVoidImage from '../../assets/grid/minimalist-void.png'
import organicIntersectionImage from '../../assets/grid/organic-intersection.png'
import foregroundObscuredImage from '../../assets/grid/foreground-obscured.png'
import geometricFragmentImage from '../../assets/grid/geometric-fragment.png'
import loFiPrintedImage from '../../assets/grid/lo-fi-printed.png'
import lowAngleHeroicImage from '../../assets/grid/low-angle-heroic.png'
import lowKeySilhouetteImage from '../../assets/grid/low-key-silhouette.png'
import motionBlurGhostImage from '../../assets/grid/motion-blur-ghost.png'
import reflectiveDistortionImage from '../../assets/grid/reflective-distortion.png'
import repetitivePatternImage from '../../assets/grid/repetitive-pattern.png'
import theDiscardedLookImage from '../../assets/grid/the-discarded-look.png'
import topDownArrangementImage from '../../assets/grid/top-down-arrangement.png'

export type GridPresetCategory =
  | 'classic'
  | 'closeup'
  | 'portraits'
  | 'environment'
  | 'creative'

export interface GridPreset {
  id: string
  name: string
  nameRu: string
  category: GridPresetCategory
  description: string
  image: string
}

/**
 * Tab order in the preset picker modal (no empty tabs).
 */
export const gridPresetCategoryOrder: GridPresetCategory[] = [
  'closeup',
  'environment',
  'creative',
  'classic',
]

export const gridPresets: GridPreset[] = [
  // --- CLOSE-UPS & FORM ---
  {
    id: 'abstract-macro-surface',
    name: 'Macro Surface',
    nameRu: 'Макро поверхность',
    category: 'closeup',
    description:
      'a macro shot capturing high-contrast textures and intricate surface details with soft bokeh',
    image: abstractMacroSurfaceImage,
  },
  {
    id: 'organic-intersection',
    name: 'Intersection',
    nameRu: 'Пересечение форм',
    category: 'closeup',
    description:
      'a tight crop capturing the intersection of two contrasting materials and their tactile relationship',
    image: organicIntersectionImage,
  },
  {
    id: 'highlight-focus',
    name: 'Light Play',
    nameRu: 'Игра бликов',
    category: 'closeup',
    description: 'a close-up shot capturing sharp highlights and deep shadows on a curved silhouette',
    image: highlightFocusImage,
  },
  {
    id: 'geometric-fragment',
    name: 'Fragment: Geometry',
    nameRu: 'Фрагмент: геометрия',
    category: 'closeup',
    description:
      'an abstract crop capturing a repetitive geometric fragment of the subject against a neutral background',
    image: geometricFragmentImage,
  },

  // --- ENVIRONMENT & DISTANCE ---
  {
    id: 'minimalist-void',
    name: 'Negative Space',
    nameRu: 'Пустое пространство',
    category: 'environment',
    description: 'a wide shot capturing the subject in random editorial pose centered in a vast expanse of uniform negative space',
    image: minimalistVoidImage,
  },
  {
    id: 'architectural-frame',
    name: 'Architectural Frame',
    nameRu: 'Архитектурный фрейм',
    category: 'environment',
    description:
      'a distant shot capturing the subject framed by sharp architectural shadows or structural elements as in original image',
    image: architecturalFrameImage,
  },
  {
    id: 'top-down-arrangement',
    name: 'Top-Down View',
    nameRu: 'Вид сверху',
    category: 'environment',
    description:
      'a direct overhead shot capturing a clean, symmetrical arrangement on a high-end textured surface',
    image: topDownArrangementImage,
  },
  {
    id: 'atmospheric-distance',
    name: 'Atmospheric Distance',
    nameRu: 'Атмосферная даль',
    category: 'environment',
    description:
      'a wide cinematic shot capturing the subject integrated into an atmospheric, hazy environment',
    image: atmosphericDistanceImage,
  },

  // --- CANDID & ACCIDENTAL ---
  {
    id: 'motion-blur-ghost',
    name: 'Motion Blur',
    nameRu: 'Смаз в движении',
    category: 'creative',
    description: 'an intentional long-exposure shot capturing a blurred, ethereal motion of the subject',
    image: motionBlurGhostImage,
  },
  {
    id: 'reflective-distortion',
    name: 'Reflection',
    nameRu: 'Отражение',
    category: 'creative',
    description:
      'a shot capturing the subject through a distorted reflective surface or textured glass',
    image: reflectiveDistortionImage,
  },
  {
    id: 'foreground-obscured',
    name: 'Obscured View',
    nameRu: 'Скрытый взгляд',
    category: 'creative',
    description:
      'a shot capturing the subject partially obscured by a soft-focus element in the immediate foreground',
    image: foregroundObscuredImage,
  },
  {
    id: 'lo-fi-printed',
    name: 'On-Screen Display',
    nameRu: 'Монитор',
    category: 'creative',
    description:
      'a shot capturing a printed image or a grainy monitor display of the subject for a lo-fi aesthetic',
    image: loFiPrintedImage,
  },

  // --- EDITORIAL & COMPOSITION ---
  {
    id: 'asymmetric-balance',
    name: 'Asymmetry',
    nameRu: 'Асимметрия',
    category: 'classic',
    description:
      'an off-center composition capturing the subject interacting with dramatic directional light',
    image: asymmetricBalanceImage,
  },
  {
    id: 'the-discarded-look',
    name: 'Placed Effortlessly',
    nameRu: 'Небрежное расположение',
    category: 'classic',
    description:
      'a high-angle shot capturing the subject as if placed effortlessly on a raw, natural floor',
    image: theDiscardedLookImage,
  },
  {
    id: 'dual-focus-depth',
    name: 'Shallow Depth',
    nameRu: 'Малая глубина',
    category: 'classic',
    description:
      'a shot capturing a razor-sharp detail in the foreground with the rest of the form fading into soft bokeh',
    image: dualFocusDepthImage,
  },
  {
    id: 'repetitive-pattern',
    name: 'Repetition',
    nameRu: 'Повторение',
    category: 'classic',
    description:
      'a composition capturing multiple identical silhouettes of the subject creating a rhythmic pattern',
    image: repetitivePatternImage,
  },
  {
    id: 'low-key-silhouette',
    name: 'Silhouette',
    nameRu: 'Силуэт',
    category: 'creative',
    description:
      'a low-key shot capturing only the essential rim-lit edges and the silhouette of the subject',
    image: lowKeySilhouetteImage,
  },
  {
    id: 'bts-film-snapshot',
    name: 'BTS Film Frame',
    nameRu: 'Бэкстейдж: Пленка',
    category: 'creative',
    description:
      'a raw 35mm colored or black and white film snapshot with a cinematic behind-the-scenes energy, featuring heavy grain and subtle light leaks, capturing an off-guard candid moment of the subject with natural set lighting',
    image: btsFilmSnapshotImage,
  },

  // --- BASIC COMPOSITIONS ---
  {
    id: 'basic-close-up',
    name: 'Close-up',
    nameRu: 'Крупный план',
    category: 'closeup',
    description:
      'a tight close-up shot capturing the primary form and intricate features of the subject with soft, shallow focus',
    image: basicCloseUpImage,
  },
  {
    id: 'basic-medium-shot',
    name: 'Medium Shot',
    nameRu: 'Средний план',
    category: 'classic',
    description:
      "an editorial medium shot capturing the subject and its relation to the immediate environment",
    image: basicMediumShotImage,
  },
  {
    id: 'basic-wide-shot',
    name: 'Wide Shot',
    nameRu: 'Общий план',
    category: 'classic',
    description:
      'an editorial wide-angle shot capturing the subject as a central focal point within a vast, cinematic expanse',
    image: basicWideShotImage,
  },
  {
    id: 'macro-face-features',
    name: 'Macro Features',
    nameRu: 'Макро: Черты',
    category: 'closeup',
    description:
      "a macro shot focusing on the organic textures, curves, and subtle contours of the subject's surface and form",
    image: macroFaceFeaturesImage,
  },
  {
    id: 'editorial-makeup-focus',
    name: 'Editorial Focus',
    nameRu: 'Эдиториал фокус',
    category: 'creative',
    description: 'a sophisticated macro crop of a facial fragment, highlighting unique skin textures and the specific artistic adornments that define the subject’s identity',
    image: editorialMakeupFocusImage,
  },

  // --- EDITORIAL STYLE ---
  {
    id: 'editorial-crop',
    name: 'Random Editorial',
    nameRu: 'Случайный эдиториал',
    category: 'creative',
    description:
      'a sophisticated editorial shot featuring an unconventional crop, dramatic directional shadows, and a raw, unposed aesthetic',
    image: editorialCropImage,
  },
  {
    id: 'direct-flash-snapshot',
    name: 'Direct Flash',
    nameRu: 'Direct Flash',
    category: 'creative',
    description:
      'a raw high-fashion snapshot using harsh direct flash photography, creating high contrast and deep shadows against a plain wall',
    image: directFlashSnapshotImage,
  },
  {
    id: 'low-angle-heroic',
    name: 'Low Angle Power',
    nameRu: 'Нижний ракурс',
    category: 'classic',
    description:
      'a low-angle shot looking up at the subject to create a sense of dominance, scale, and monumental presence',
    image: lowAngleHeroicImage,
  }
]
