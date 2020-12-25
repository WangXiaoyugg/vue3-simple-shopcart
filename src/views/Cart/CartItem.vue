<template>
    <section class="cart-item">
        <div class="cart-item-left">
            <img :src="data.img" alt="">
            <div class="info">
                <h4>{{ data.title }}</h4>
                <p>{{ data.price }}</p>
                <button class="delete-btn">移除</button>
            </div>
        </div>
        <div class="cart-item-right">
            <Icon name="add" class="add"/>
            <span class="amount">{{ data.amount }}</span>
            <Icon name="subtract" class="subtract"/>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Icon from '../../components/Icon.vue'
import { ICartItem } from './Cart.vue'
export default defineComponent({
    props: {
        data: {
            type: Object as PropType<ICartItem>,
            required: true,
        }
    },
    components: {
        Icon
    },
    setup () {
        

        return {}
    }
})
</script>

<style lang="scss" scoped>
.cart-item {
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
        display: flex;
        
        > img {
            width: 72px;
            height: 72px;
        }
        > .info {
            margin-left: 10px;
            > h4 {
                color: #03045e;
                font-size: 20px;
            }
            > p {
                color: #0096c7;
                font-size: 18px;
            }
            > .delete-btn {
                color: #0096c7;
                font-weight: bold;
                font-size: 16px;
                border: none;
                background: transparent;
            }

        }
    }
    &-right {
        border: 1px solid #ccc;
         .add, .subtract  {
            font-size: 24px;
            cursor: pointer;
        }
        > .amount {
            display: inline-flex;
            justify-content: center;
            font-size: 24px;
            width: 24px;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;

        }
    }
}
</style>