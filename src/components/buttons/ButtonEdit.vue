<template lang="pug">

  button.button-edit(@click="onClick")
    icon-24-edit

</template>

<script>
import Icon24Edit from '@/icons/24/icon-24-edit.vue'

export default {
    name: 'ButtonEdit',
    components: { Icon24Edit },
    methods: {
        onClick() {
            this.$emit('press')
        },
    },
}
</script>

<style lang="scss">
.button-edit {
    width: 40px;
    height: 40px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: none;
    transition: background-color 0.2s;
    &:hover {
        background: var(--color-primary-100);
    }
}
</style>
