<template lang="pug">
  div(
    :class="classNames"
    :style="styleNames"
  )
    slot

</template>

<script>
export default {
    name: 'BaseText',
    props: {
        bold: { type: Boolean, default: false },
        inline: { type: Boolean, default: false },
        color: { type: String, default: 'white' },
        size: { type: String, default: 'md' },
        align: { type: String, default: 'left' },
    },
    computed: {
        classNames() {
            const names = ['base-text', `base-text_${this.align}`, { 'base-text_bold': this.bold }]
            if (this.checkValIsString(this.size)) {
                names.push(`base-text_${this.size}`)
            }
            if (this.inline) {
                names.push('base-text_inline')
            }
            return names
        },
        styleNames() {
            const names = {
                color: `var(--color-${this.color})`,
                'font-size': undefined,
            }
            if (!this.checkValIsString(this.size)) {
                names['font-size'] = `${this.size}px`
            }
            return names
        },
    },
    methods: {
        checkValIsString(val) {
            return !+val
        },
    },
}
</script>

<style lang="scss">
.base-text {
    font-family: var(--font-main);
}

.base-text_xsm {
    font-size: 10px;
}

.base-text_sm {
    font-size: 12px;
}

.base-text_md {
    font-size: 14px;
}

.base-text_lg {
    font-size: 16px;
}

.base-text_xl {
    font-size: 18px;
}

.base-text_xxl {
    font-size: 20px;
}

.base-text_bold {
    font-weight: bold;
}

.base-text_center {
    text-align: center;
}

.base-text_right {
    text-align: right;
}

.base-text_inline {
    display: inline-block;
}
</style>
