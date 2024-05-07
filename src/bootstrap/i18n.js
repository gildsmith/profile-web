import {createI18n} from 'vue-i18n'
import pl from '../lang/pl.json'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'pl',
    fallbackLocale: 'en',
    fallbackFormat: true,
    fallbackWarn: false,
    missingWarn: false,
    messages: {
        pl,
    },
})

export default i18n