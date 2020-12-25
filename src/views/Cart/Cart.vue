<template>
    <main class="cart">
        <CartItem 
            v-for="(item) in cartList" 
            :key="item.id" 
            :data="item"
            @add="onAdd"
            @subtract="onSubtract"
            @delete="onDelete"
        ></CartItem>
        <div class="horizontal-line mt-20"></div>
        <div class="total-price">
            <span class="label">总价</span>
            <span class="price">￥{{ totalPrice }}</span>
        </div>
        <button class="clear-btn" @click="onClear">清空购物车</button>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onUpdated } from 'vue'
import CartItem from './CartItem.vue'
import { mockData } from '../../mock/index.js'
import { eventBus } from '../../utils/eventBus'

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
    setup (props, context) {
        const cartList = ref([] as ICartItem[])
        const totalPrice = computed(() => {
            return cartList.value.reduce((acc, cur) => acc+ cur.price * cur.amount, 0)
        })
        const totalAmount = computed(() => cartList.value.reduce((acc, cur) => acc + cur.amount, 0))

        cartList.value = mockData;
        eventBus.emit('get-total-amount', totalAmount)
        onUpdated(() => {
            eventBus.emit('get-total-amount', totalAmount)
        })
        
        const onAdd = (id: number):void => {
           const current = cartList.value.find(item => item.id === id)
           current && current.amount++
        }
        const onSubtract = (id: number):void => {
            const current = cartList.value.find(item => item.id === id)
            current && current.amount > 1 && current.amount--
        }
        const onDelete = (id: number):void => {
            cartList.value = cartList.value.filter(item => item.id !== id)
        }
        const onClear = ():void => {
            cartList.value = []
        }

        return {
            cartList,
            totalPrice,
            onAdd,
            onSubtract,
            onDelete,
            onClear,
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