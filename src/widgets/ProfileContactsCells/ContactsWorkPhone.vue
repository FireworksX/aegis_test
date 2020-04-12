<template lang="pug">

  .contacts-section(v-show="hasSection" :class="{ 'contacts-section_editable': editable }")
    base-info-cell.profile-contacts__cell(v-if="state === 'visible'")
      icon-24-mobilephone.profile-contacts__cell-icon(slot="before")
      base-text(color="primary") {{ parsedPhone }}
      base-text(slot="description" color="gray-darken-1-400" size="xsm") {{ description }}
      button-edit.contacts-section__edit(v-if="editable" slot="aside" @press="clickEdit")
    template(v-else)
      wrap-submit(
        @cancel="cancelChange"
        @accept="acceptChange"
      )
        base-input(:value="value" @input="typedValue")

</template>

<script>
import BaseText from '@/components/BaseText.vue'
import Icon24Mobilephone from '@/icons/24/icon-24-mobilephone.vue'
import ButtonEdit from '@/components/buttons/ButtonEdit.vue'
import BaseInfoCell from '@/components/BaseInfoCell.vue'
import WrapSubmit from '@/components/WrapSubmit.vue'
import BaseInput from '@/components/BaseInput.vue'
import formatPhone from '@/helpers/formatPhone'

export default {
    name: 'ContactsWorkPhone',
    components: { BaseInput, WrapSubmit, BaseInfoCell, ButtonEdit, Icon24Mobilephone, BaseText },
    props: {
        editable: { type: Boolean, default: false },
        value: { type: String, default: '' },
        description: { type: String, default: '' },
    },
    computed: {
        hasSection() {
            const hasValue = this.value !== undefined && this.value.length > 0
            return hasValue || this.editable
        },
        parsedPhone() {
            return formatPhone(this.value)
        },
    },
    data() {
        return {
            state: 'visible',
            stateValue: '',
        }
    },
    methods: {
        clickEdit() {
            this.state = 'edit'
            this.stateValue = this.value
        },
        typedValue(val) {
            this.stateValue = val
        },
        acceptChange() {
            this.$emit('change', this.stateValue)
            this.stateValue = this.value
            this.state = 'visible'
        },
        cancelChange() {
            this.stateValue = this.value
            this.state = 'visible'
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
</style>
