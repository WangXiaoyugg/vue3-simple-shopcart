<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        name: {
            type:String,
            required: true,
        }
    },
    setup (props) {
        const iconName = computed(() => `#icon-${props.name}`)

        return {
            iconName,
        }
    }
})
</script>

<style lang="scss" scoped>
 .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>