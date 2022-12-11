import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import storeObjects from './store/index.ts'

// Create a new store instance.
const store = createStore(storeObjects)

// Install the store instance as a plugin
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
