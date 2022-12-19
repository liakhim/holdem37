<template>
    <div class="game-table">
        <div class="game-table-frame">
            <div class="cards">
                <CardItem v-for="(item) in getBoard"
                          :size="'middle'"
                          :highlight-mode-prop="false"
                          :item-data="item"
                          :key="item.id"/>
            </div>
        </div>
    </div>
    <div class="hand-part">
        <div class="hand-cards d-flex">
            <CardItem v-for="(item) in getHand"
                      :size="'small'"
                      :highlight-mode-prop="false"
                      :item-data="item"
                      :key="item.id"/>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'
    import { mapActions, mapGetters, mapMutations } from 'vuex'
    import CardItem from '@/components/CardItem.vue'
    export default {
        name: 'Home',
        components: { CardItem },
        setup () {
            const activeCards = ref([
                { suit: 0, value: 2, location: 'inDeck', highlighted: true },
                { suit: 1, value: 2, location: 'inDeck', highlighted: false },
                { suit: 2, value: 2, location: 'inDeck', highlighted: false },
                { suit: 3, value: 2, location: 'inDeck', highlighted: false },
                { suit: 3, value: 3, location: 'inDeck', highlighted: false },
            ]);
            return { activeCards }
        },
        computed: {
            ...mapGetters('a', ['getHand', 'getDeck', 'getBoard', 'getChosenCards', 'combinationCheck'])
        },
        methods: {
            ...mapActions('a', ['setDeckAction', 'test']),
            ...mapMutations('a', ['moveToTable', 'chooseCards', 'setBoard']),
            dealFlop () {
                console.log('flop')
                this.chooseCards(3)
                for (let i = 0; i < this.getChosenCards.length; i++) {
                    this.setBoard(this.getChosenCards[i])
                }
            },
            dealRiver () {
                console.log('river')
                this.chooseCards(1)
                this.setBoard(this.getChosenCards[0])
            },
            dealTurn () {
                console.log('turn')
                this.chooseCards(1)
                this.setBoard(this.getChosenCards[0])
            }
        },
        created () {
            this.dealFlop()
            setTimeout(() => {
                this.dealRiver()
            }, 1000)
            setTimeout(() => {
                this.dealTurn()
            }, 2000)
            // this.$store.dispatch('table/setDeckAction')
            // this.setDeckAction({ id: 0, suit: 0, value: 2, location: 'inDeck', highlighted: false })
        }
    }
</script>
<style lang="scss">
    .game-table {
        margin: 60px auto 0;
        height: 400px;
        width: 900px;
        border-radius: 200px;
        background: green;
        border: 12px solid #000000;
        .game-table-frame {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            .cards {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #ffffff20;
                height: 260px;
                width: 700px;
                border-radius: 130px;
            }
        }
    }
    .hand-part {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -40px;
    }
</style>