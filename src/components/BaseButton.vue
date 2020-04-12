<template lang="pug">

  button(:class="classNames" @click="click")
    slot

</template>

<script>
/**
 * @param mode = primary | secondary | empty
 */

export default {
    name: 'BaseButton',
    props: {
        mode: { type: String, default: 'primary' },
        stretched: { type: Boolean, default: false },
    },
    computed: {
        classNames() {
            const names = ['base-button']
            names.push(`base-button_${this.mode}`)

            if (this.stretched) {
                names.push('base-button_stretched')
            }

            return names
        },
    },
    methods: {
        click() {
            this.$emit('press')
        },
    },
}
</script>

<style lang="scss">
.base-button {
    padding: 12px;
    outline: none;
    background: var(--color-black);
    margin: 0;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    cursor: pointer;
}

.base-button_primary {
    background: var(--color-primary);
    transition: background-color 0.2s;
    &:hover {
        background: var(--color-primary_lost);
    }
}

.base-button_empty {
    background: transparent;
    &:hover {
        background: transparent;
    }
}

.base-button_stretched {
    width: 100%;
}
</style>
