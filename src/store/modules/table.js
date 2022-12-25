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
        chosenCards: [],
        board: [],
        hand: [
            { id: 12, suit: 0, value: 5, location: 'inHand', highlighted: false },
            { id: 13, suit: 1, value: 5, location: 'inHand', highlighted: false }
        ]
    }),
    getters: {
        getValues (state) {
          return state.values
        },
        getHand (state) {
            return state.hand
        },
        getDeck (state) {
            return state.allCards.filter(v => v.location === 'inDeck')
        },
        getBoard (state) {
            return state.board
        },
        getChosenCards (state) {
            return state.chosenCards
        },
        combinationCheck () {
            return (combination) => {
                let combinationSorted = combination.sort((a, b) => a.value > b.value ? -1 : 1)
                combinationSorted.forEach((v, index) => {
                    /* проверка на стрит - если при итерации следующие четыре элемента имеют
                    значение на 1 единицу меньше чем предыдущее значение карты  */
                    const straightExp = (combinationSorted[index + 4] &&
                        v.value - 1 === combinationSorted[index + 1].value &&
                        v.value - 2 === combinationSorted[index + 2].value &&
                        v.value - 3 === combinationSorted[index + 3].value &&
                        v.value - 4 === combinationSorted[index + 4].value)
                    if (straightExp) {
                        console.log('есть стрит до ' + v.value)
                    }

                    /* проверка на флеш - если длина отфильтрованного по масти массива равна 5 */
                    const flushExp = (combinationSorted.filter(v => v.suit === 0).length === 5 ||
                        combinationSorted.filter(v => v.suit === 1).length === 5 ||
                        combinationSorted.filter(v => v.suit === 2).length === 5 ||
                        combinationSorted.filter(v => v.suit === 3).length === 5)
                    if (flushExp) {
                        console.log('Есть флеш из ' + v.suit)
                    }

                    /* проверка на стрит-флеш */
                    const straightAndFlushExp = flushExp && straightExp
                    if (straightAndFlushExp) {
                        console.log('есть стрит флеш')
                    }
                    /* проверка на каре */
                    const fourExp = (combinationSorted[index + 4] &&
                        (v.value === combinationSorted[index + 1].value &&
                        v.value === combinationSorted[index + 2].value &&
                        v.value === combinationSorted[index + 3].value))
                    if (fourExp) {
                        console.log('есть каре')
                    }
                    /* проверка на сет - если в отсортированном массиве в итерации
                    (начиная со второго ээлемента) - соседние значения карт равны текущему */
                    const threeExp = (index > 0 && combinationSorted[index + 1] &&
                        v.value === combinationSorted[index - 1].value &&
                        v.value === combinationSorted[index + 1].value)
                    if (threeExp) {
                        console.log('Проверка ' + v.value + ' - ' + 'есть сет из ' + v.value)
                    }
                    /* проверка на пару - если при итерации сортированного массива карта
                     справа имеет значение равное текущему */
                    const pairExp = combinationSorted[index + 1] &&
                        v.value === combinationSorted[index + 1].value
                    if (pairExp) {
                        console.log('Проверка ' + v.value + ' - ' + 'есть пара ' + v.value)
                    }
                })
                let combinationResult;
                return combinationResult;
            }
            // return combination.sort()
        }
    },
    mutations: {
        setHand (state, card) {
            state.hand.push(card)
        },
        setDeck (state, card) {
            state.deck.push(card)
        },
        setBoard (state, card) {
            state.board.push(card)
        },
        moveToTable (state, cardId) {
            state.allCards.find(v => v.id === cardId).location = 'inBoard'
        },
        chooseCards (state, quantity) {
            state.chosenCards = [];
            for (let i = 0; i < quantity; i++) {
                const filteredCards = state.allCards.filter(v => v.location === 'inDeck')
                let rand = Math.floor(Math.random() * filteredCards.length);
                filteredCards[rand].location = null;
                state.chosenCards.push(filteredCards[rand]);
            }
        },
        clearChosenCard (state) {
            state.chosenCard = {}
        }
    },
    actions: {
        setHandAction ({ commit }, card) {
            commit('setHand', card)
        },
        setDeckAction ({ commit }, card) {
            commit('setDeck', card)
        }
    }
}
export default table;