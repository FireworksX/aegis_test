<template lang="pug">

  .profile-meta
    .profile-meta__item
      icon-24-birth.profile-meta__item-icon
      base-text(color="gray-darken-4") 20 февраля
      .profile-meta__eye(v-show="editable" @click="clickBirthVisible")
        icon-24-eye(v-if="birthVisible")
        icon-24-eye-close(v-else)
    .profile-meta__item
      icon-24-holiday.profile-meta__item-icon
      base-text(color="gray-darken-4") 24 дня отпуска

</template>

<script>
import Icon24Birth from '@/icons/24/icon-24-birth.vue'
import BaseText from '@/components/BaseText.vue'
import Icon24Holiday from '@/icons/24/icon-24-holiday.vue'
import Icon24Eye from '@/icons/24/icon-24-eye.vue'
import Icon24EyeClose from '@/icons/24/icon-24-eye-close.vue'

export default {
    name: 'ProfileMeta',
    components: { Icon24EyeClose, Icon24Eye, Icon24Holiday, BaseText, Icon24Birth },
    props: {
        editable: { type: Boolean, default: false },
        birthVisible: { type: Boolean, default: false },
    },
    methods: {
        clickBirthVisible() {
            this.$emit('birth-change', !this.birthVisible)
        },
    },
}
</script>

<style lang="scss">
.profile-meta {
    padding: 25px 13px 25px 25px;
    background: var(--color-gray-lighten-3);
}

.profile-meta__item {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    &:last-child {
        margin-bottom: 0;
    }
}

.profile-meta__item-icon {
    margin-right: 9px;
    color: var(--color-black-600);
}

.profile-meta__eye {
    color: var(--color-primary);
    display: flex;
    align-items: center;
    margin-left: 13px;
    cursor: pointer;
}
</style>
