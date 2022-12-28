const sidebar = {
    namespaced: true,
    state: () => ({
        // opened || closed
        mode: 'open'
    }),
    getters: {
        getMode (state) {
            return state.mode
        }
    },
    mutations: {
        changeSidebarMode (state, value) {
            state.mode = value
        }
    },
    actions: {
        changeSidebarModeAction ({ commit }, value) {
            commit('changeSidebarMode', value)
        }
    }
}
export default sidebar