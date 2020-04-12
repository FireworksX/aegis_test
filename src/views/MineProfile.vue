<template lang="pug">

  .profile
    edit-avatar.profile__edit-avatar(
      :class="{ 'profile__edit_visible': editAvatarVisible }"
      @close="editAvatarVisible = false"
    )
    base-container
      .profile__header
        base-text.profile__header-name(
          color="gray-darken-4"
          size="34"
          align="center"
        ) Кудинов Сергей Сергеевич
        base-text.profile__header-holiday(
          color="gray-darken-1"
          align="center"
        )
          icon-24-information.profile__header-icon
          |Запланирован отпуск с 25 февраля по 9 марта
      .profile__grid
        aside.profile__aside
          profile-cover.profile__aside-cover(
            :src="avatarSrc"
            editable
            @edit="editAvatarVisible = true"
          )
          profile-meta.profile__aside-meta(
            :birth-visible="birthVisible"
            editable
            @birth-change="birthVisible = $event"
          )
          base-button(stretched)
            base-text(color="gray-lighten-3" bold) Мое развитие
        .profile__content
          profile-work
          profile-contacts.profile__contacts(editable)
          profile-features.profile__features

</template>

<script>
import ProfileCover from '@/widgets/ProfileCover.vue'
import BaseContainer from '@/components/BaseContainer.vue'
import BaseText from '@/components/BaseText.vue'
import ProfileMeta from '@/widgets/ProfileMeta.vue'
import BaseButton from '@/components/BaseButton.vue'
import ProfileWork from '@/widgets/ProfileWork.vue'
import ProfileContacts from '@/widgets/ProfileContacts.vue'
import ProfileFeatures from '@/widgets/ProfileFeatures.vue'
import EditAvatar from '@/widgets/EditAvatar.vue'
import Icon24Information from '@/icons/24/icon-24-information.vue'

export default {
    name: 'MineProfile',
    components: {
        Icon24Information,
        EditAvatar,
        ProfileFeatures,
        ProfileContacts,
        ProfileWork,
        BaseButton,
        ProfileMeta,
        BaseText,
        BaseContainer,
        ProfileCover,
    },
    computed: {
        avatarSrc() {
            return this.$store.getters['profile/avatar']
        },
    },
    data() {
        return {
            birthVisible: false,
            editAvatarVisible: false,
        }
    },
}
</script>

<style lang="scss">
.profile__header-name {
    letter-spacing: 0.25px;
    margin-bottom: 20px;
}

.profile__header-holiday {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile__header-icon {
    margin-right: 10px;
}

.profile__grid {
    display: grid;
    grid-template-columns: 185px auto;
    grid-gap: 25px;
}

.profile__aside-cover {
    margin-bottom: 22px;
}

.profile__aside-meta {
    margin-bottom: 24px;
}

.profile__contacts {
    padding: 25px 30px;
    border-bottom: 1px solid var(--color-gray-lighten-1);
}

.profile__features {
    padding: 25px 30px;
}

.profile__edit-avatar {
    transform: translateY(100%);
    transition: 0.2s;
}

.profile__edit_visible {
    transform: translateY(0);
}
</style>
