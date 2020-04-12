<template lang="pug">

  .profile-contacts
    .profile-contacts__left
      .profile-contacts__grid
        base-info-cell.profile-contacts__cell
          icon-24-map.profile-contacts__cell-icon(slot="before")
          base-text(color="primary") 11 этаж, место 494
          base-text(slot="description" color="gray-darken-1-400" size="xsm") Башня Империя
        base-info-cell.profile-contacts__cell
          icon-24-landphone.profile-contacts__cell-icon(slot="before")
          base-text(color="primary") +31182
        contacts-work-phone(
          description="Рабочий"
          :value="workPhone"
          editable
          @change="changeWorkPhone"
        )
        contacts-work-phone(
          description="Личный"
          :value="personalPhone"
          editable
          @change="changePersonalPhone"
        )
        base-info-cell.profile-contacts__cell
          icon-24-mail.profile-contacts__cell-icon(slot="before")
          base-text(color="primary") sergey.kudinov@dentsuaegis.ru
        base-info-cell.profile-contacts__cell
          icon-24-skype.profile-contacts__cell-icon(slot="before")
          base-text(color="primary") Skype for business
        base-info-cell.profile-contacts__cell
          icon-24-ms-team.profile-contacts__cell-icon(slot="before")
          base-text(color="primary") Teams
    .profile-contacts__right
      contacts-socials(
        :vkontakte-value="socials.vkontakte"
        :facebook-value="socials.facebook"
        :instagram-value="socials.instagram"
        :linkedin-value="socials.linkedin"
        editable
        @change="changeSocials"
      )


</template>

<script>
import BaseInfoCell from '@/components/BaseInfoCell.vue'
import BaseText from '@/components/BaseText.vue'
import Icon24Map from '@/icons/24/icon-24-map.vue'
import Icon24Landphone from '@/icons/24/icon-24-landphone.vue'
import Icon24Mobilephone from '@/icons/24/icon-24-mobilephone.vue'
import Icon24Mail from '@/icons/24/icon-24-mail.vue'
import Icon24Skype from '@/icons/24/socials/icon-24-skype.vue'
import Icon24MsTeam from '@/icons/24/socials/icon-24-ms-team.vue'
import ButtonEdit from '@/components/buttons/ButtonEdit.vue'
import BaseInput from '@/components/BaseInput.vue'
import ContactsWorkPhone from '@/widgets/ProfileContactsCells/ContactsWorkPhone.vue'
import ContactsSocials from '@/widgets/ProfileContactsCells/ContactsSocials.vue'

export default {
    name: 'ProfileContacts',
    components: {
        ContactsSocials,
        ContactsWorkPhone,
        BaseInput,
        ButtonEdit,
        Icon24MsTeam,
        Icon24Skype,
        Icon24Mail,
        Icon24Mobilephone,
        Icon24Landphone,
        Icon24Map,
        BaseText,
        BaseInfoCell,
    },
    props: {
        editable: { type: Boolean, default: false },
    },
    data() {
        return {
            workPhone: '79811472874',
            personalPhone: '79213413765',
            socials: {
                vkontakte: 'https://vk.com/last_round',
                instagram: 'https://www.instagram.com/abeltinsh.a/',
                facebook: 'https://www.facebook.com/profile.php?id=100041838670039',
                linkedin: '',
            },
        }
    },
    methods: {
        changeWorkPhone(val) {
            this.workPhone = val
        },
        changePersonalPhone(val) {
            this.personalPhone = val
        },
        changeSocials(newSocials) {
            if (newSocials !== undefined) {
                this.socials = newSocials
            }
        },
    },
}
</script>

<style lang="scss">
.profile-contacts {
    display: flex;
}

.profile-contacts__left {
    flex-basis: 70%;
}

.profile-contacts__grid {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-auto-flow: column;
}

.profile-contacts__cell-icon {
    color: var(--color-black-600);
}

.profile-contacts__right {
    flex-basis: 30%;
}
</style>
