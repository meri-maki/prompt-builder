import PosesNAnglesImage from '../../assets/posesnangles.png'
import MidjourneyProfilesImage from '../../assets/midjourney-profiles/midjourney-beauty-profiles-cover.png'
import GridPromptCover from '../../assets/grid/gridprompt-cover.png'

export const guides: Record<string, { id: string; title: string; description: string; image: string; fileLink: string }> = {
  posesnangles: {
    id: 'posesnangles',
    title: "POSES'N'ANGLES",
    description: 'posesnanglesDescription',
    image: PosesNAnglesImage,
    fileLink: 'https://disk.yandex.ru/i/J2PXz8NA1_8OEQ',
  },
  midjourneyprofiles: {
    id: 'midjourneyprofiles',
    title: 'MIDJOURNEY PROFILES',
    description: 'midjourneyProfilesDescription',
    image: MidjourneyProfilesImage,
    fileLink: '',
  },
  gridprompt: {
    id: 'gridprompt',
    title: 'GRID PROMPT BUILDER',
    description: 'gridPromptDescription',
    image: GridPromptCover,
    fileLink: '',
  },
}

