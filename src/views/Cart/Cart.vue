<template>
    <main>
        <CartItem v-for="(item) in cartList" :key="item.id" :data="item"></CartItem>
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
        setTimeout(() => {
            cartList.value = mockData;
        }, 2000);

        return {
            cartList,
        }
    }
})
</script>

<style lang="scss" scoped>

</style>