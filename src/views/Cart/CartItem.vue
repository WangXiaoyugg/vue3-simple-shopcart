<template>
    <section class="cart-item">
        <div class="cart-item-left">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1825215635,1500412764&fm=11&gp=0.jpg" alt="">
            <div class="info">
                <h4>Iphone 12 Pro</h4>
                <p>￥9999</p>
                <button class="delete-btn">移除</button>
            </div>
        </div>
        <div class="cart-item-right">
            <Icon name="add" class="add"/>
            <span class="amount">1</span>
            <Icon name="subtract" class="subtract"/>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../../components/Icon.vue'
export default defineComponent({
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
    width: 600px;
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