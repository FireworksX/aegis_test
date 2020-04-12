<template lang="pug">

  #app
    mine-profile


</template>

<script>
import BaseText from '@/components/BaseText.vue'
import BaseContainer from '@/components/BaseContainer.vue'
import MineProfile from '@/views/MineProfile.vue'

export default {
    name: 'App',
    components: {
        MineProfile,
        BaseContainer,
        BaseText,
    },
    created() {
        this.$store.commit('setPersonalSkills', [
            {
                id: 0,
                name: 'Product management',
            },
            {
                id: 1,
                name: 'UX/UI',
            },
            {
                id: 2,
                name: 'Бизнес процессы',
            },
        ])
    },
}
</script>

<style lang="scss">
#app {
    --font-main: 'Open Sans', sans-serif;
    --color-primary: #071ac3;
    --color-primary-100: rgba(7, 26, 195, 0.1);
    --color-primary_lost: #071a98;
    --color-gray-lighten-1: #bdbdbd;
    --color-gray-lighten-3: #eeeeee;
    --color-gray-lighten-5: #fafafa;
    --color-gray-darken-1: #757575;
    --color-gray-darken-1-400: rgba(117, 117, 117, 0.4);
    --color-gray-darken-1-500: rgba(117, 117, 117, 0.5);
    --color-gray-darken-3: #424242;
    --color-gray-darken-4: #212121;
    --color-black: #000;
    --color-black-600: rgba(0, 0, 0, 0.6);
    --color-white: #fff;
    --color-success: #4fdd36;
    --color-error: #f44336;
}
</style>
