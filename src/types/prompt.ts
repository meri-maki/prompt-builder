export type ShotFields = { composition?: string; cameraSettings?: string; filmGrain?: string }
export type LensEffectsFields = { optics?: string; artifacts?: string; depthOfField?: string }
export type SubjectFields = { description?: string; wardrobe?: string; grooming?: string }
export type SceneFields = { location?: string; timeOfDay?: string; environment?: string }
export type VisualDetailsFields = { action?: string; props?: string; physics?: string }
export type CinematographyFields = { lighting?: string; tone?: string; colorPalette?: string }
export type TextElementsFields = { visibleText?: string; typography?: string; placement?: string }
export type StyleFields = { visualAesthetic?: string }

export type FormValues = {
  shot?: ShotFields
  lensEffects?: LensEffectsFields
  subject?: SubjectFields
  scene?: SceneFields
  visualDetails?: VisualDetailsFields
  cinematography?: CinematographyFields
  textElements?: TextElementsFields
  style?: StyleFields
}

export type SectionDef = { key: keyof FormValues; label: string; fields: { key: string; label: string }[] }
export type Preset = { id: string; title: string; img: string; values: FormValues }
