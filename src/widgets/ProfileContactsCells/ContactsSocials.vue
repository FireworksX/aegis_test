<template lang="pug">

  .contacts-section(v-show="hasSection" :class="{ 'contacts-section_editable': editable }")
    .contacts-section__row(v-if="state === 'visible'")
      button-edit.contacts-section__edit(v-if="editable" @press="clickEdit")
      .contacts-section__socials
        a.contacts-section__socials-item(
          v-for="(item, index) in listOfSocials"
          :key="index"
          :href="item.link"
        )
          component(:is="item.icon")
    template(v-else)
      wrap-submit(
        position="bottom"
        @cancel="cancelChange"
        @accept="acceptChange"
      )
        base-input.contacts-section__input(
          :value="facebookValue"
          placeholder="ссылка на профиль"
          @input="typedValue('facebook', $event)"
        )
          icon-24-facebook(slot="before")
        base-input.contacts-section__input(
          :value="instagramValue"
          placeholder="ссылка на профиль"
          @input="typedValue('instagram', $event)"
        )
          icon-24-instagram(slot="before")
        base-input.contacts-section__input(
          :value="vkontakteValue"
          placeholder="ссылка на профиль"
          @input="typedValue('vkontakte', $event)"
        )
          icon-24-vk(slot="before")
        base-input.contacts-section__input(
          :value="linkedinValue"
          placeholder="ссылка на профиль"
          @input="typedValue('linkedin', $event)"
        )
          icon-24-in(slot="before")

</template>

<script>
import BaseText from '@/components/BaseText.vue'
import Icon24Mobilephone from '@/icons/24/icon-24-mobilephone.vue'
import ButtonEdit from '@/components/buttons/ButtonEdit.vue'
import BaseInfoCell from '@/components/BaseInfoCell.vue'
import WrapSubmit from '@/components/WrapSubmit.vue'
import BaseInput from '@/components/BaseInput.vue'
import Icon24Facebook from '@/icons/24/socials/icon-24-facebook.vue'
import Icon24Instagram from '@/icons/24/socials/icon-24-instagram.vue'
import Icon24In from '@/icons/24/socials/icon-24-in.vue'
import Icon24Vk from '@/icons/24/socials/icon-24-vk.vue'

export default {
    name: 'ContactsSocials',
    components: {
        BaseInput,
        WrapSubmit,
        BaseInfoCell,
        ButtonEdit,
        Icon24Mobilephone,
        BaseText,
        Icon24Vk,
        Icon24In,
        Icon24Instagram,
        Icon24Facebook,
    },
    props: {
        editable: { type: Boolean, default: false },
        facebookValue: { type: String, default: '' },
        instagramValue: { type: String, default: '' },
        vkontakteValue: { type: String, default: '' },
        linkedinValue: { type: String, default: '' },
    },
    computed: {
        hasSection() {
            const hasValue = this.value !== undefined && this.value.length > 0
            return hasValue || this.editable
        },
        listOfSocials() {
            const list = []
            const hasFacebookValue =
                this.facebookValue !== undefined && this.facebookValue.length > 0
            const hasInstagramValue =
                this.instagramValue !== undefined && this.instagramValue.length > 0
            const hasVkValue = this.vkontakteValue !== undefined && this.vkontakteValue.length > 0
            const hasInValue = this.linkedinValue !== undefined && this.linkedinValue.length > 0

            if (hasFacebookValue) {
                list.push({
                    icon: 'icon-24-facebook',
                    link: this.facebookValue,
                })
            }

            if (hasInstagramValue) {
                list.push({
                    icon: 'icon-24-instagram',
                    link: this.instagramValue,
                })
            }

            if (hasVkValue) {
                list.push({
                    icon: 'icon-24-vk',
                    link: this.vkontakteValue,
                })
            }

            if (hasInValue) {
                list.push({
                    icon: 'icon-24-in',
                    link: this.linkedinValue,
                })
            }

            return list
        },
    },
    data() {
        return {
            state: 'visible',
            stateValues: {
                facebook: '',
                instagram: '',
                vkontakte: '',
                linkedin: '',
            },
        }
    },
    methods: {
        clickEdit() {
            this.state = 'edit'
            this.mergeStates()
        },
        typedValue(key, val) {
            this.stateValues[key] = val
        },
        acceptChange() {
            this.$emit('change', { ...this.stateValues })
            this.mergeStates()
            this.state = 'visible'
        },
        cancelChange() {
            this.mergeStates()
            this.state = 'visible'
        },
        mergeStates() {
            this.stateValues.facebook = this.facebookValue
            this.stateValues.instagram = this.instagramValue
            this.stateValues.vkontakte = this.vkontakteValue
            this.stateValues.linkedin = this.linkedinValue
        },
    },
}
</script>

<style lang="scss">
.contacts-section_editable {
    &:hover {
        .contacts-section__edit {
            opacity: 1;
        }
    }
}

.contacts-section__edit {
    opacity: 0;
    transition: opacity 0.2s;
}

.contacts-section__row {
    display: flex;
    justify-content: flex-end;
}

.contacts-section__edit {
    margin-right: 15px;
}

.contacts-section__socials {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.contacts-section__socials-item {
    margin-right: 22px;
    &:last-child {
        margin-right: 0;
    }
}

.contacts-section__input {
    margin-bottom: 8px;
    &:last-child {
        margin-bottom: 0;
    }
}
</style>
