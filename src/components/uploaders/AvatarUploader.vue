<template lang="pug">

  base-uploader(@change="selectImage")
    .avatar-uploader
      icon-24-upload.avatar-uploader__icon
      base-text(color="primary") Загрузить новое фото

</template>

<script>
import Icon24Upload from '@/icons/24/icon-24-upload.vue'
import BaseText from '@/components/BaseText.vue'
import BaseUploader from './BaseUploader.vue'

export default {
    name: 'AvatarUploader',
    components: { BaseText, Icon24Upload, BaseUploader },
    methods: {
        selectImage(files) {
            this.$emit('change', files)
        },
    },
}
</script>

<style lang="scss">
.avatar-uploader {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.14);
    width: 185px;
    height: 185px;
    background: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background: var(--color-gray-lighten-3);
    }
}

.avatar-uploader__icon {
    margin-bottom: 10px;
    color: var(--color-primary);
}
</style>
