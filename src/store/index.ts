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
            { suit: 0, value: 2, location: 'inDeck', highlighted: false },
            { suit: 1, value: 2, location: 'inDeck', highlighted: false },
            { suit: 2, value: 2, location: 'inDeck', highlighted: false },
            { suit: 3, value: 2, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 3, location: 'inDeck', highlighted: false },
            { suit: 1, value: 3, location: 'inDeck', highlighted: false },
            { suit: 2, value: 3, location: 'inDeck', highlighted: false },
            { suit: 3, value: 3, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 4, location: 'inDeck', highlighted: false },
            { suit: 1, value: 4, location: 'inDeck', highlighted: false },
            { suit: 2, value: 4, location: 'inDeck', highlighted: false },
            { suit: 3, value: 4, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 5, location: 'inDeck', highlighted: false },
            { suit: 1, value: 5, location: 'inDeck', highlighted: false },
            { suit: 2, value: 5, location: 'inDeck', highlighted: false },
            { suit: 3, value: 5, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 6, location: 'inDeck', highlighted: false },
            { suit: 1, value: 6, location: 'inDeck', highlighted: false },
            { suit: 2, value: 6, location: 'inDeck', highlighted: false },
            { suit: 3, value: 6, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 7, location: 'inDeck', highlighted: false },
            { suit: 1, value: 7, location: 'inDeck', highlighted: false },
            { suit: 2, value: 7, location: 'inDeck', highlighted: false },
            { suit: 3, value: 7, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 8, location: 'inDeck', highlighted: false },
            { suit: 1, value: 8, location: 'inDeck', highlighted: false },
            { suit: 2, value: 8, location: 'inDeck', highlighted: false },
            { suit: 3, value: 8, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 9, location: 'inDeck', highlighted: false },
            { suit: 1, value: 9, location: 'inDeck', highlighted: false },
            { suit: 2, value: 9, location: 'inDeck', highlighted: false },
            { suit: 3, value: 9, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 10, location: 'inDeck', highlighted: false },
            { suit: 1, value: 10, location: 'inDeck', highlighted: false },
            { suit: 2, value: 10, location: 'inDeck', highlighted: false },
            { suit: 3, value: 10, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 11, location: 'inDeck', highlighted: false },
            { suit: 1, value: 11, location: 'inDeck', highlighted: false },
            { suit: 2, value: 11, location: 'inDeck', highlighted: false },
            { suit: 3, value: 11, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 12, location: 'inDeck', highlighted: false },
            { suit: 1, value: 12, location: 'inDeck', highlighted: false },
            { suit: 2, value: 12, location: 'inDeck', highlighted: false },
            { suit: 3, value: 12, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 13, location: 'inDeck', highlighted: false },
            { suit: 1, value: 13, location: 'inDeck', highlighted: false },
            { suit: 2, value: 13, location: 'inDeck', highlighted: false },
            { suit: 3, value: 13, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { suit: 0, value: 14, location: 'inDeck', highlighted: false },
            { suit: 1, value: 14, location: 'inDeck', highlighted: false },
            { suit: 2, value: 14, location: 'inDeck', highlighted: false },
            { suit: 3, value: 14, location: 'inDeck', highlighted: false }
        ]
    },
    mutations: {},
    actions: {}
});
export default storeObjects;