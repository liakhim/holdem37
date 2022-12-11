import Vuex from 'vuex'
const storeObjects = new Vuex.Store({
    state: {
        suits: [
            {
                id: 0,
                name: 'carreau',
                icon: 'suits/carreau.svg'
            },
            {
                id: 1,
                name: 'coeur',
                icon: 'suits/coeur.svg'
            },
            {
                id: 2,
                name: 'pique',
                icon: 'suits/pique.svg'
            },
            {
                id: 3,
                name: 'trefle',
                icon: 'suits/trefle.svg'
            }
        ],
        values: [
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
            { value: 11, label: 'В' },
            { value: 12, label: 'Д' },
            { value: 13, label: 'К' },
            { value: 14, label: 'Т' }
        ],
        allCards: [
            { suit: 0, value: 2 }, { suit: 1, value: 2 }, { suit: 2, value: 2 }, { suit: 3, value: 2 },
            { suit: 0, value: 3 }, { suit: 1, value: 3 }, { suit: 2, value: 3 }, { suit: 3, value: 3 },
            { suit: 0, value: 4 }, { suit: 1, value: 4 }, { suit: 2, value: 4 }, { suit: 3, value: 4 },
            { suit: 0, value: 5 }, { suit: 1, value: 5 }, { suit: 2, value: 5 }, { suit: 3, value: 5 },
            { suit: 0, value: 6 }, { suit: 1, value: 6 }, { suit: 2, value: 6 }, { suit: 3, value: 6 },
            { suit: 0, value: 7 }, { suit: 1, value: 7 }, { suit: 2, value: 7 }, { suit: 3, value: 7 },
            { suit: 0, value: 8 }, { suit: 1, value: 8 }, { suit: 2, value: 8 }, { suit: 3, value: 8 },
            { suit: 0, value: 9 }, { suit: 1, value: 9 }, { suit: 2, value: 9 }, { suit: 3, value: 9 },
            { suit: 0, value: 10 }, { suit: 1, value: 10 }, { suit: 2, value: 10 }, { suit: 3, value: 10 },
            { suit: 0, value: 11 }, { suit: 1, value: 11 }, { suit: 2, value: 11 }, { suit: 3, value: 11 },
            { suit: 0, value: 12 }, { suit: 1, value: 12 }, { suit: 2, value: 12 }, { suit: 3, value: 12 },
            { suit: 0, value: 13 }, { suit: 1, value: 13 }, { suit: 2, value: 13 }, { suit: 3, value: 13 },
            { suit: 0, value: 14 }, { suit: 1, value: 14 }, { suit: 2, value: 14 }, { suit: 3, value: 14 },
        ]
    },
    mutations: {},
    actions: {}
});
export default storeObjects;