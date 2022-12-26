import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Install the store instance as a plugin
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
