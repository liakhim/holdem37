<template>
    <div class="card-item d-flex flex-column"
         :class="{
            'highlighted': item.highlighted,
            'grayscale': !item.highlighted && highlightMode
         }">

        <div class="card-item-value">
            <p :class="{'red': item.suit === 0 || item.suit === 1}">{{item.value}}</p>
        </div>

        <div class="card-item-icon">
            <img :src="require('@/assets/' + $store.state.suits.find(v => v.id === item.suit).icon)"
                 alt="">
        </div>

        <div class="card-item-value justify-content-end">
            <p :class="{'red': item.suit === 0 || item.suit === 1}"
               :style="{'transform':'rotate(180deg)'}">{{item.value}}</p>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'
    export default {
        props: {
            itemData: {},
            highlightModeProp: Boolean
        },
        setup (props) {
            const item = ref(props.itemData)
            const highlightMode = ref(props.highlightModeProp)
            return {
                item,
                highlightMode
            }
        }
    }
</script>
<style lang="scss">
    $value-size: 20;
    .card-item {
        transition: 0.6s;
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
    .card-item.highlighted {
        transform: scale(1.1) translateY(-10px);
        box-shadow: 0 0 10px yellow;
    }
    .card-item.grayscale {
        opacity: 0.7;
    }
</style>