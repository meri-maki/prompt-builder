import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      title: 'Prompt Builder',
      presets: 'Presets',
      imagePresets: 'Image Presets',
      actions: 'Actions',
      copy: 'Copy',
      reset: 'Reset',
      paste: 'Paste',
      expand: 'Expand',
      collapse: 'Collapse',
      presetApplied: 'Preset applied',
      nothingToCopy: 'Nothing to copy — please fill at least one block',
      renderedCopied: 'Rendered text copied to clipboard',
      pasteSuccess: 'Prompt parsed and filled',
      pasteError: 'Could not parse clipboard content',
      inputBlocks: 'Input Blocks',
      renderedOutput: 'Rendered Output',
    },
  },
  ru: {
    translation: {
      title: 'Prompt Builder',
      presets: 'Пресеты',
      imagePresets: 'Галерея пресетов',
      actions: 'Действия',
      copy: 'Копировать',
      reset: 'Сбросить',
      paste: 'Вставить',
      expand: 'Развернуть',
      collapse: 'Свернуть',
      presetApplied: 'Пресет применён',
      nothingToCopy: 'Нечего копировать — заполните хотя бы один блок',
      renderedCopied: 'Скомпилированный текст скопирован',
      pasteSuccess: 'Промпт распознан и поля заполнены',
      pasteError: 'Не удалось распознать содержимое буфера обмена',
      inputBlocks: 'Блоки ввода',
      renderedOutput: 'Скомпилированный текст',
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
