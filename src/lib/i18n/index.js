import { en } from './locale/locale_en'
import { ru } from './locale/locale_ru'
import { createI18n } from 'vue3-i18n'

export const i18n = createI18n({
    locale: 'ru',
    messages: {
        en: en,
        ru: ru
    }
})
