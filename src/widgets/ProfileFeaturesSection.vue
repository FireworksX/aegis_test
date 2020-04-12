<template lang="pug">

  .profile-features-section
    .profile-features-section__top
      base-text.profile-features-section__title(color="gray-darken-4" size="lg") {{ title }}
      button-edit.profile-features-section__edit(v-if="editable" @press="clickEdit")
    slot

</template>

<script>
import BaseText from '@/components/BaseText.vue'
import ButtonEdit from '@/components/buttons/ButtonEdit.vue'

export default {
    name: 'ProfileFeaturesSection',
    components: { ButtonEdit, BaseText },
    props: {
        title: { type: String, default: undefined },
        editable: { type: Boolean, default: false },
    },
    methods: {
        clickEdit() {
            this.$emit('edit')
        },
    },
}
</script>

<style lang="scss">
.profile-features-section__top {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.profile-features-section__edit {
    margin-left: 10px;
}
</style>
