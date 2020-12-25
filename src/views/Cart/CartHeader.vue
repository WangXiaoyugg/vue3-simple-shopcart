<template>
    <header class="cart-header">
        <section class="cart-header-wrap">
            <h1>{{ title }}</h1>
            <div class="cart-header-wrap-total">
                <Icon name="cart" class="cart"></Icon>
                <span class="total">{{ totalAmount }}</span>
            </div>
        </section>
        
    </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Icon from '../../components/Icon.vue'
import { eventBus } from '../../utils/eventBus'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    components: {
        Icon,
    },
    setup () {
        const totalAmount = ref(null);
        eventBus.on('get-total-amount', (total) => {
            totalAmount.value = total.value
        })

        return {
            totalAmount
        }
    }
})
</script>

<style lang="scss" scoped>
$white: lighten($color: #fff, $amount: 0.7);
$headerBgColor: #0077b6;

.cart-header {
    background: $headerBgColor;
    &-wrap {
        height: 60px;
        width: 600px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > h1 {
            color: $white
        }

        &-total {
            position: relative;
            .cart {
                font-size: 32px;
                color: $white;
            }
            .total {
                position: absolute;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                top: -6px;
                right: -6px;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background: #48cae4;
                color: #fff;
            }
        }
    }
}
</style>