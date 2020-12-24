<template>
    <CartHeader title="数码商城"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CartHeader from './CartHeader.vue'
export default defineComponent({
    name: 'ShopCart',
    components:{
        CartHeader,
    },
    setup () {
        return {}
    },
})
</script>

<style scoped>

</style>