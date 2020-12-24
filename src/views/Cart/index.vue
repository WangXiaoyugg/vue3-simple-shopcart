<template>
    <CartHeader title="数码商城"/>
    <div class="my-cart-title">我的购物车</div>
    <Cart/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CartHeader from './CartHeader.vue'
import Cart from './Cart.vue'
export default defineComponent({
    name: 'ShopCart',
    components:{
        CartHeader,
        Cart,
    },
    setup () {
        return {}
    },
})
</script>

<style lang="scss" scoped>
.my-cart-title {
    text-align: center;
    padding: 20px;
    font-size: 36px;
    color: #3a0ca3;

}
</style>