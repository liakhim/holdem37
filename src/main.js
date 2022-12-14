import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from "vuex";
import table from "./store/modules/table";
const store = createStore({
    modules: {
        a: table
    }
})

// Install the store instance as a plugin
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
