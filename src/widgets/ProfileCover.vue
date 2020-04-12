<template lang="pug">

  .profile-cover(:class="{ 'profile-cover_editable': editable }" @click="clickEdit")
    base-button.profile-cover__edit(v-show="editable")
      icon-24-edit
    img.profile-cover__source(:src="src")

</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseText from '@/components/BaseText.vue'
import Icon24Edit from '@/icons/24/icon-24-edit.vue'

export default {
    name: 'ProfileCover',
    components: { Icon24Edit, BaseText, BaseButton },
    props: {
        src: { type: String, required: true },
        editable: { type: Boolean, default: false },
    },
    methods: {
        clickEdit() {
            if (this.editable) {
                this.$emit('edit')
            }
        },
    },
}
</script>

<style lang="scss">
.profile-cover {
    width: 185px;
    height: 185px;
    position: relative;
}

.profile-cover__source {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
}

.profile-cover_editable {
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: var(--color-black);
        transition: opacity 0.2s;
        opacity: 0;
    }

    &:hover {
        &:after {
            opacity: 0.5;
        }

        .profile-cover__edit {
            opacity: 1;
        }
    }
}

.profile-cover__edit {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s;
    color: var(--color-white);
}
</style>
