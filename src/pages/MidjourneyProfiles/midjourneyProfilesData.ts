/**
 * Data for the Midjourney Profiles (Personalization / --p) guide: card images and copy targets.
 * Each entry matches one moodboard from the Telegram post (one image → one --p code).
 */
import mjHhyoaq9 from '../../assets/midjourney-profiles/mj-hhyoaq9.png'
import mj1gjlbsu from '../../assets/midjourney-profiles/mj-1gjlbsu.png'
import mjRisxthi from '../../assets/midjourney-profiles/mj-risxthi.png'
import mjI2lcxpc from '../../assets/midjourney-profiles/mj-i2lcxpc.png'
import mjZ6dfadn from '../../assets/midjourney-profiles/mj-z6dfadn.png'
import mjT9fjmrz from '../../assets/midjourney-profiles/mj-t9fjmrz.png'
import mjRma7exj from '../../assets/midjourney-profiles/mj-rma7exj.png'

/** Shared prompt used for all reference generations in the source post (no upscales / extra post). */
export const midjourneyProfilesBasePrompt =
  'hyper-realistic close-up portrait of a young woman, eyes half open with a sad expression, bleached bushy eyebrows, wet and glossy crimson red and silver splotchy paint on eyelids, slicked back hair with retro curls, reddish glossy skin, big glossy lips, soft dramatic lighting, surreal aesthetic, hyper-detailed textures, 8k --raw'

export type MidjourneyProfileItem = {
  id: string
  code: string
  image: string
}

/** Order matches the codes list in the Telegram post; images are named by code for stable imports. */
export const midjourneyProfileItems: MidjourneyProfileItem[] = [
  { id: 'hhyoaq9', code: 'hhyoaq9', image: mjHhyoaq9 },
  { id: '1gjlbsu', code: '1gjlbsu', image: mj1gjlbsu },
  { id: 'risxthi', code: 'risxthi', image: mjRisxthi },
  { id: 'i2lcxpc', code: 'i2lcxpc', image: mjI2lcxpc },
  { id: 'z6dfadn', code: 'z6dfadn', image: mjZ6dfadn },
  { id: 't9fjmrz', code: 't9fjmrz', image: mjT9fjmrz },
  { id: 'rma7exj', code: 'rma7exj', image: mjRma7exj },
]

/** Returns the exact Midjourney CLI-style personalization flag for clipboard. */
export const formatProfileFlag = (code: string) => `--p ${code}`
