import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router폴더 내의 index.js파일을 가져오겠다는 의미
import store from './store'

createApp(App).use(store).use(router).mount('#app')
