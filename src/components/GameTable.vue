<template>
    <div class="deck d-flex" style="margin-left: 100px">
        <FlippedCard v-for="(item, index) in getDeck" :key="item.id + index" style="margin-left: -75px"/>
    </div>
    <div class="game-table"
         :class="{green: th === 'green', blue: th === 'blue' }">
        <div class="game-table-frame">
            <slot></slot>
        </div>
    </div>
    <div class="hand-part">
        <div class="hand-cards d-flex">
            <CardItem v-for="(item) in getHand"
                      :size="'small'"
                      :highlight-mode-prop="false"
                      :item-data="item"
                      :key="item.id"
            />
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'
    import { mapGetters } from 'vuex'
    import CardItem from '@/components/CardItem.vue'
    import FlippedCard from '@/components/FlippedCard.vue'
    export default {
        name: 'Home',
        components: { CardItem, FlippedCard },
        setup (props) {
            const th = ref(props.theme)
            const activeCards = ref([
                { suit: 0, value: 2, location: 'inDeck', highlighted: true },
                { suit: 1, value: 2, location: 'inDeck', highlighted: false },
                { suit: 2, value: 2, location: 'inDeck', highlighted: false },
                { suit: 3, value: 2, location: 'inDeck', highlighted: false },
                { suit: 3, value: 3, location: 'inDeck', highlighted: false },
            ]);
            return { activeCards, th }
        },
        props: {
          theme: {
              default: 'green'
          }
        },
        computed: {
            ...mapGetters('a', ['getHand', 'getDeck', 'getBoard', 'getChosenCards', 'combinationCheck'])
        }
    }
</script>
<style lang="scss">
    .game-table {
        margin: 60px auto 0;
        height: 400px;
        width: 900px;
        border-radius: 200px;
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
    .game-table.green {
        background: green;
    }
    .game-table.blue {
        background: #185a9a99;
    }
    .hand-part {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -40px;
    }
</style>