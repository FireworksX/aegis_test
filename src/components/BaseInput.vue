<template lang="pug">

  .base-input(:class="{ 'base-input_before': hasBefore }")
    .base-input__before(v-show="hasBefore")
      slot(name="before")
    input.base-input__input(
      :value="value"
      :placeholder="placeholder"
      @input="input"
    )

</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        value: { type: String, required: true },
        placeholder: { type: String },
    },
    computed: {
        hasBefore() {
            return this.$slots.before !== undefined
        },
    },
    methods: {
        input(e) {
            const {
                target: { value },
            } = e
            this.$emit('input', value)
        },
    },
}
</script>

<style lang="scss">
.base-input {
    position: relative;
}

.base-input__input {
    font-family: var(--font-main);
    font-size: 14px;
    color: var(--color-gray-darken-4);
    padding: 11px 10px 11px 15px;
    border: 1px solid var(--color-gray-lighten-1);
    width: 100%;
    outline: none;
    box-sizing: border-box;
    &:focus {
        border-color: var(--color-primary);
    }
}

.base-input_before {
    .base-input__input {
        padding-left: 40px;
    }
}

.base-input__before {
    position: absolute;
    top: 0;
    left: 5px;
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
