import { createStore } from "vuex";
import table from './modules/table'
import sidebar from './modules/sidebar'
import rounds from './modules/rounds'
const store = createStore({
    modules: {
        a: table,
        s: sidebar,
        r: rounds
    }
})
export default store