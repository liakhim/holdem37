<template>
    <div class="game-table">
        <div class="game-table-frame">
            <div class="cards">
                <CardItem v-for="(item) in activeCards"
                          :highlight-mode-prop="true"
                          :item-data="item"
                          :key="item.id"/>
            </div>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'
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
</style>