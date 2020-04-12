<template lang="pug">

  label.base-uploader
    .base-uploader__body
      slot
    input.base-uploader__input(type="file" @change="change")

</template>

<script>
export default {
    name: 'BaseUploader',
    methods: {
        change(e) {
            e.preventDefault()
            const { files } = e.target
            this.$emit('change', files)
        },
    },
}
</script>

<style lang="scss">
.base-uploader {
    position: relative;
}

.base-uploader__input {
    position: absolute;
    left: -9999px;
    opacity: 0;
}
</style>
