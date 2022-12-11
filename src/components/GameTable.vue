<template>
    <div class="game-table">
        <div class="game-table-frame">
            <div class="cards">
                <CardItem v-for="(item) in activeCards"
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
                {
                    id: 0,
                    value: 2,
                    suit: 0,
                    status: 'visible'
                },
                {
                    id: 1,
                    value: 3,
                    suit: 1,
                    status: 'visible'
                },
                {
                    id: 2,
                    value: 4,
                    suit: 2,
                    status: 'visible'
                },
                {
                    id: 3,
                    value: 5,
                    suit: 3,
                    status: null
                },
                {
                    id: 4,
                    value: 6,
                    suit: 2,
                    status: null
                }
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