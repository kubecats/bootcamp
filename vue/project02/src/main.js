import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router폴더 내의 index.js파일을 가져오겠다는 의미
import store from './store'
import mixin from './mixins'
import i18nPlugin from './plugins/i18n.js'
import en from './i18n/en'
import ko from './i18n/ko'
import PageTitle from './components/fragments/PageTitle.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

const i18nStrings = { en, ko }

const app = createApp(App)

app.use(store)
app.use(router)
app.mixin(mixin)
app.use(i18nPlugin, i18nStrings)

app.component('page-title', PageTitle)
app.mount('#app')
