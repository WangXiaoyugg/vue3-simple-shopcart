<template>
    <main class="cart">
        <CartItem v-for="(item) in cartList" :key="item.id" :data="item"></CartItem>
        <div class="horizontal-line mt-20"></div>
        <div class="total-price">
            <span class="label">总价</span>
            <span class="price">￥999999</span>
        </div>
        <button class="clear-btn">清空购物车</button>
    </main>
</template>

<script lang="ts">
import { mockData } from '../../mock/index.js'
import { defineComponent, ref, Ref } from 'vue'
import CartItem from './CartItem.vue'

export interface ICartItem {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number,
}

type ICartList = ICartItem[];

export default defineComponent({
    name: 'Cart',
    components: {
        CartItem,
    },
    setup () {
        const cartList = ref([] as ICartItem[])
        // setTimeout(() => {
            cartList.value = mockData;
        // }, 2000);

        return {
            cartList,
        }
    }
})
</script>

<style lang="scss" scoped>
.mt-20 {
    margin-top: 20px;
}
.horizontal-line {
    border-bottom: 1px solid #ccc;
}
.cart {
    width: 600px;
    margin: 0 auto;
    .total-price {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        .label, .price {
            font-size: 14px;
            line-height: 1.2;
            color: #3d5a80;
        }
        .price {
            letter-spacing: 1px;
        }
    }
    .clear-btn {
        width: 100%;
        text-align: center;
        background: transparent;
        border: 1px solid #9a031e;
        color: #9a031e;
        font-size: 16px;
        padding: 4px 8px;
        border-radius: 8px;
        outline: none;
        cursor: pointer;
    }
}
</style>