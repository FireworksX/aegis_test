<template lang="pug">

  .profile-work
    .profile-work__left
      .profile-work__section
        icon-24-contact-badge.profile-work__section-icon
        base-text.profile-work__position(color="gray-darken-4")
          |Директор департамента размещения рекламы телевизионного спонсорства и спецпроектов на федеральном и неэфирном ТВ в
          base-text.profile-work__position-value(color="primary" inline) Dentsu Aegis CS
      .profile-work__section
        icon-24-tree.profile-work__section-icon
        .profile-work__group
          base-text.profile-work__group-name(color="primary") Группа развития и интеграции внутренних решений
          base-text.profile-work__group-chief(color="gray-darken-3")
            |Руководитель
            base-text.profile-work__group-chiefval(color="primary" inline) Евгений Демур
    .profile-work__right
      base-text.profile-work__since(color="gray-darken-1")
        |Работает в Dentsu
        base-text.profile-work__since-value(color="gray-darken-4") 8 месяцев, с 27.05.19


</template>

<script>
import Icon24ContactBadge from '@/icons/24/icon-24-contact-badge.vue'
import BaseText from '@/components/BaseText.vue'
import Icon24Tree from '@/icons/24/icon-24-tree.vue'

export default {
    name: 'ProfileWork',
    components: { Icon24Tree, BaseText, Icon24ContactBadge },
}
</script>

<style lang="scss">
.profile-work {
    padding: 33px 30px;
    background: var(--color-gray-lighten-3);
    display: flex;
}

.profile-work__left {
    margin-right: 60px;
}

.profile-work__section {
    margin-bottom: 35px;
    display: grid;
    grid-template-columns: 30px auto;
    &:last-child {
        margin-bottom: 0;
    }
}

.profile-work__section-icon {
    color: var(--color-black-600);
    margin-right: 13px;
    justify-self: center;
}

.profile-work__position-value {
    margin-left: 10px;
}

.profile-work__group-name {
    margin-bottom: 8px;
}

.profile-work__group-chiefval {
    margin-left: 8px;
}

.profile-work__since {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.profile-work__since-value {
    margin-left: 8px;
}
</style>
