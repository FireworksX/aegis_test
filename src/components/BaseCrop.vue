<template lang="pug">

  .base-cropper(:class="`base-cropper_${ size }`")
    cropper(
      :src="src"
      :stencilProps="stencilProps"
      ref="cropper"
    )

</template>

<script>
import { Cropper } from 'vue-advanced-cropper'

export default {
    name: 'BaseCrop',
    components: { Cropper },
    props: {
        size: { type: String, default: 'md' },
        src: { type: String, required: true },
        getRef: { type: Function, default: (ref) => ref },
    },
    data() {
        return {
            stencilProps: {
                handlers: {
                    eastNorth: true,
                    north: false,
                    westNorth: true,
                    west: false,
                    westSouth: true,
                    south: false,
                    eastSouth: true,
                    east: false,
                },
            },
        }
    },
    mounted() {
        this.getRef(this.$refs.cropper)
    },
}
</script>

<style lang="scss">
.base-cropper {
    .vue-square-handler {
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
}

.base-cropper_md {
    width: 185px;
    height: 185px;
    min-width: 185px;
    min-height: 185px;

    .vue-advanced-cropper {
        height: 100%;
        min-width: 185px;
        min-height: 185px;
    }
}

.base-cropper_sm {
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;

    .vue-advanced-cropper {
        height: 100%;
        min-width: 50px;
        min-height: 50px;
    }
}
</style>
