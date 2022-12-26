import { createStore } from "vuex";
import table from './modules/table'
import sidebar from './modules/sidebar'
const store = createStore({
    modules: {
        a: table,
        s: sidebar
    }
})
export default store