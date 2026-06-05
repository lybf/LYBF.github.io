import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

let savedLocale = localStorage.getItem('locale') || 'zh';

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'zh',
  messages: {
    zh, en
  }
})

export default i18n