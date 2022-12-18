<template>
    <div class="card-item d-flex flex-column"
         :class="[ size,
            {
                'highlighted': item.highlighted,
                'grayscale': !item.highlighted && highlightMode
            }
         ]">

        <div class="card-item-value">
            <p :class="{'red': item.suit === 0 || item.suit === 1}">{{convertValue(item.value).label}}</p>
        </div>

        <div class="card-item-icon">
            <img :src="require('@/assets/' + $store.state.a.suits.find(v => v.id === item.suit).icon)"
                 alt="">
        </div>

        <div class="card-item-value justify-content-end">
            <p :class="{'red': item.suit === 0 || item.suit === 1}"
               :style="{'transform':'rotate(180deg)'}">{{convertValue(item.value).label}}</p>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'
    import { mapGetters } from 'vuex'
    export default {
        props: {
            itemData: {},
            highlightModeProp: Boolean,
            size: {
                required: true,
                default: 'middle'
            }
        },
        setup (props) {
            const item = ref(props.itemData)
            const highlightMode = ref(props.highlightModeProp)
            return {
                item,
                highlightMode
            }
        },
        computed: {
            ...mapGetters('a', ['getValues'])
        },
        methods: {
            convertValue (value) {
                return this.getValues.find(v => v.value === value)
            }
        }
    }
</script>
<style lang="scss">
    $value-size: 20;
    .card-item {
        transition: 0.6s;
        background: #fff;
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
        }
        &-icon {
            img {
                width: 32px;
            }
        }
    }
    .card-item.middle {
        width: 80px;
        height: 120px;
    }
    .card-item.small {
        width: 70px;
        height: 105px;
        .card-item-icon {
            img {
                width: 24px;
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