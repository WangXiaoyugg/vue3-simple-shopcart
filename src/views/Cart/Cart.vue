<template>
    <main>
        <CartItem></CartItem>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CartItem from './CartItem.vue'
export default defineComponent({
    name: 'Cart',
    components: {
        CartItem,
    },
    setup () {
        

        return {}
    }
})
</script>

<style lang="scss" scoped>

</style>