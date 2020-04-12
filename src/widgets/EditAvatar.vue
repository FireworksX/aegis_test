<template lang="pug">

  .edit-avatar
    base-container
      .edit-avatar__wrapper
        base-button.edit-avatar__close(mode="empty" @press="close")
          icon-24-close
        base-text.edit-avatar__title(
          size="24"
          color="gray-darken-4"
          align="center"
        ) Редактировавние фото
        .edit-avatar__uploaders
          avatar-uploader.edit-avatar__uploaders-upload(@change="selectImage")
          base-crop.edit-avatar__uploaders-crop(
            :get-ref="getRef"
            :src="storeCover"
          )
          base-crop.edit-avatar__uploaders-small(
            :src="storeCover"
            size="sm"
          )
        .edit-avatar__controls
          base-button.edit-avatar__controls-save(@press="save")
            base-text(bold) Сохранить
          base-button(mode="empty" @press="close")
            base-text(color="primary" bold) Закрыть

</template>

<script>
import BaseContainer from '@/components/BaseContainer.vue'
import BaseButton from '@/components/BaseButton.vue'
import Icon24Close from '@/icons/24/icon-24-close.vue'
import BaseText from '@/components/BaseText.vue'
import AvatarUploader from '@/components/uploaders/AvatarUploader.vue'
import BaseCrop from '@/components/BaseCrop.vue'

export default {
    name: 'EditAvatar',
    components: { BaseCrop, AvatarUploader, BaseText, Icon24Close, BaseButton, BaseContainer },
    computed: {
        src() {
            return this.$store.getters['profile/avatar']
        },
    },
    data() {
        return {
            ref: undefined,
            storeCover: '',
        }
    },
    methods: {
        /**
         * @param files = File[]
         */
        selectImage(files) {
            const file = files[0]
            const reader = new FileReader()
            reader.onload = (data) => {
                this.storeCover = data.target.result
            }
            reader.readAsDataURL(file)
        },
        save() {
            const { canvas } = this.ref.getResult()
            this.$store.commit('profile/setAvatar', canvas.toDataURL())
            this.storeCover = this.src
            this.$emit('close')
        },
        close() {
            this.storeCover = this.src
            this.$emit('close')
        },
        getRef(ref) {
            this.ref = ref
        },
    },
    created() {
        this.storeCover = this.src
    },
}
</script>

<style lang="scss">
.edit-avatar {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: var(--color-white);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.14);
}

.edit-avatar__wrapper {
    padding: 27px 0 20px 0;
    position: relative;
}

.edit-avatar__close {
    position: absolute;
    right: 0;
    top: 17px;
    color: var(--color-primary);
}

.edit-avatar__title {
    margin-bottom: 35px;
}

.edit-avatar__controls {
    display: flex;
    align-items: center;
    justify-content: center;
}

.edit-avatar__controls-save {
    margin-right: 10px;
}

.edit-avatar__uploaders {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
}

.edit-avatar__uploaders-upload {
    margin-right: 25px;
}

.edit-avatar__uploaders-crop {
    margin-right: 15px;
}
</style>
