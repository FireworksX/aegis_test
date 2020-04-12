<template lang="pug">

  .base-info-cell
    .base-info-cell__before(v-show="hasBefore")
      slot(name="before")
    .base-info-cell__main
      slot.base-info-cell__value
      slot.base-info-cell__description(name="description")
    .base-info-cell__aside(v-show="hasAside")
      slot(name="aside")

</template>

<script>
export default {
    name: 'BaseInfoCell',
    computed: {
        hasBefore() {
            return this.$slots.before !== undefined
        },
        hasAside() {
            return this.$slots.aside !== undefined
        },
    },
}
</script>

<style lang="scss">
.base-info-cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.base-info-cell__before {
    padding: 4px 8px 4px 0;
    display: flex;
}

.base-info-cell__aside {
    padding: 4px 0 4px 8px;
}
</style>
