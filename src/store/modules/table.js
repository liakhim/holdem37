const table = {
    namespaced: true,
    state: () => ( {
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
            { id: 0, suit: 0, value: 2, location: 'inDeck', highlighted: false },
            { id: 1, suit: 1, value: 2, location: 'inDeck', highlighted: false },
            { id: 2, suit: 2, value: 2, location: 'inDeck', highlighted: false },
            { id: 3, suit: 3, value: 2, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 4, suit: 0, value: 3, location: 'inDeck', highlighted: false },
            { id: 5, suit: 1, value: 3, location: 'inDeck', highlighted: false },
            { id: 6, suit: 2, value: 3, location: 'inDeck', highlighted: false },
            { id: 7, suit: 3, value: 3, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 8, suit: 0, value: 4, location: 'inDeck', highlighted: false },
            { id: 9, suit: 1, value: 4, location: 'inDeck', highlighted: false },
            { id: 10, suit: 2, value: 4, location: 'inDeck', highlighted: false },
            { id: 11, suit: 3, value: 4, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 12, suit: 0, value: 5, location: 'inDeck', highlighted: false },
            { id: 13, suit: 1, value: 5, location: 'inDeck', highlighted: false },
            { id: 14, suit: 2, value: 5, location: 'inDeck', highlighted: false },
            { id: 15, suit: 3, value: 5, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 16, suit: 0, value: 6, location: 'inDeck', highlighted: false },
            { id: 17, suit: 1, value: 6, location: 'inDeck', highlighted: false },
            { id: 18, suit: 2, value: 6, location: 'inDeck', highlighted: false },
            { id: 19, suit: 3, value: 6, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 20, suit: 0, value: 7, location: 'inDeck', highlighted: false },
            { id: 21, suit: 1, value: 7, location: 'inDeck', highlighted: false },
            { id: 22, suit: 2, value: 7, location: 'inDeck', highlighted: false },
            { id: 23, suit: 3, value: 7, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 24, suit: 0, value: 8, location: 'inDeck', highlighted: false },
            { id: 25, suit: 1, value: 8, location: 'inDeck', highlighted: false },
            { id: 26, suit: 2, value: 8, location: 'inDeck', highlighted: false },
            { id: 27, suit: 3, value: 8, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 28, suit: 0, value: 9, location: 'inDeck', highlighted: false },
            { id: 29, suit: 1, value: 9, location: 'inDeck', highlighted: false },
            { id: 30, suit: 2, value: 9, location: 'inDeck', highlighted: false },
            { id: 31, suit: 3, value: 9, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 32, suit: 0, value: 10, location: 'inDeck', highlighted: false },
            { id: 33, suit: 1, value: 10, location: 'inDeck', highlighted: false },
            { id: 34, suit: 2, value: 10, location: 'inDeck', highlighted: false },
            { id: 35, suit: 3, value: 10, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 36, suit: 0, value: 11, location: 'inDeck', highlighted: false },
            { id: 37, suit: 1, value: 11, location: 'inDeck', highlighted: false },
            { id: 38, suit: 2, value: 11, location: 'inDeck', highlighted: false },
            { id: 39, suit: 3, value: 11, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 40, suit: 0, value: 12, location: 'inDeck', highlighted: false },
            { id: 41, suit: 1, value: 12, location: 'inDeck', highlighted: false },
            { id: 42, suit: 2, value: 12, location: 'inDeck', highlighted: false },
            { id: 43, suit: 3, value: 12, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 44, suit: 0, value: 13, location: 'inDeck', highlighted: false },
            { id: 45, suit: 1, value: 13, location: 'inDeck', highlighted: false },
            { id: 46, suit: 2, value: 13, location: 'inDeck', highlighted: false },
            { id: 47, suit: 3, value: 13, location: 'inDeck', highlighted: false },
            // ----------------------------------------------------------
            { id: 48, suit: 0, value: 14, location: 'inDeck', highlighted: false },
            { id: 49, suit: 1, value: 14, location: 'inDeck', highlighted: false },
            { id: 51, suit: 2, value: 14, location: 'inDeck', highlighted: false },
            { id: 52, suit: 3, value: 14, location: 'inDeck', highlighted: false }
        ],
        chosenCard: {},
        deck: [],
        hand: [
            { id: 12, suit: 0, value: 5, location: 'inHand', highlighted: false },
            { id: 13, suit: 1, value: 5, location: 'inHand', highlighted: false }
        ]
    }),
    getters: {
        getHand (state) {
            return state.hand
        },
        getDeck (state) {
            return state.deck
        }
    },
    mutations: {
        setHand (state, card) {
            state.hand.push(card)
        },
        setDeck (state, card) {
            state.deck.push(card)
        },
        chooseCard (state) {
            const filteredCards = state.allCards.filter(v => v.location === 'inDeck')
            let rand = Math.floor(Math.random() * filteredCards.length);
            state.chosenCard = filteredCards[rand];
        },
        clearChosenCard (state) {
            state.chosenCard = {}
        }
    },
    actions: {
        test () {
          alert('ccsac')
        },
        setHandAction ({ commit }, card) {
            commit('setHand', card)
        },
        setDeckAction ({ commit }, card) {
            commit('setDeck', card)
        }
    }
}
export default table;