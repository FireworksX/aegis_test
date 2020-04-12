<template lang="pug">

  .wrap-submit(:class="`wrap-submit_${ position }`")
    .wrap-submit__slot
      slot
    .wrap-submit__controls
      base-button(mode="empty" @press="accept")
        icon-24-accept.wrap-submit__controls-submit
      base-button(mode="empty" @press="cancel")
        icon-24-cancel.wrap-submit__controls-cancel

</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import Icon24Accept from '@/icons/24/icon-24-accept.vue'
import Icon24Cancel from '@/icons/24/icon-24-cancel.vue'

export default {
    name: 'WrapSubmit',
    components: { Icon24Cancel, Icon24Accept, BaseButton },
    props: {
        position: {
            type: String,
            default: 'right',
            validator: (val) => ['right', 'bottom'].indexOf(val) !== -1,
        },
    },
    methods: {
        accept() {
            this.$emit('accept')
        },
        cancel() {
            this.$emit('cancel')
        },
    },
}
</script>

<style lang="scss">
.wrap-submit {
    display: flex;
    align-items: center;
}

.wrap-submit__controls {
    display: flex;
    align-items: center;
}

.wrap-submit__controls-submit {
    color: var(--color-success);
}
.wrap-submit__controls-cancel {
    color: var(--color-error);
}

.wrap-submit_bottom {
    flex-direction: column;
}

.wrap-submit__slot {
    width: 100%;
}
</style>
