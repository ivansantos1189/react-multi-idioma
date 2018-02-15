import i18next from 'i18next'
import locizeBackend from 'i18next-locize-backend'
import locizeEditor from 'locize-editor'
import languageDetector from 'i18next-browser-languagedetector'
import {reactI18nextModule} from 'react-i18next'

i18next
    .use(locizeBackend)
    .use(locizeEditor)
    .use(languageDetector)
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        debug: true,
        backend: {
            projectId: 'bb6991f1-8fc0-4153-bdd8-7172e552b7c3',
            apiKey: '7d9b2db4-3401-4fd5-8e5d-bebc14c5b7a2',
            referenceLang: 'en-US'
        },
        react: {
            wait: true
        }
    })

    export default i18next