<template>
    <div class="card-item d-flex flex-column">
        <div class="card-item-value">
            <p :class="{'red': item.suit === 0 || item.suit === 1}">2</p>
        </div>
        <div class="card-item-icon">
            <img :src="require('@/assets/' + $store.state.suits.find(v => v.id === item.suit).icon)"
                 alt="">
        </div>
        <div class="card-item-value justify-content-end">
            <p :class="{'red': item.suit === 0 || item.suit === 1}"
               :style="{'transform':'rotate(180deg)'}">2</p>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'
    export default {
        props: {
          itemData: {}
        },
        setup (props) {
            const item = ref(props.itemData)
            return {
                item
            }
        }
    }
</script>
<style lang="scss">
    $value-size: 20;
    .card-item {
        background: #fff;
        width: 80px;
        height: 120px;
        border: 1px solid #ffffff40;
        margin: 0 5px;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        &-value {
            height: $value-size + px;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            p {
                line-height: 1;
                font-size: $value-size + px;
                font-weight: bold;
                margin: 0;
            }
            p.red {
                color: red;
            }
            p.rotate-90 {
                // transform: rotate(180deg);
            }
        }
        &-icon {
            img {
                width: 32px;
            }
        }
    }
</style>