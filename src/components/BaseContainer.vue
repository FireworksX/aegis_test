<template lang="pug">

  div(:class="$style.container")
    slot

</template>

<script>
export default {
    name: 'BaseContainer',
}
</script>

<style lang="scss" module>
.container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 20px;
}
</style>
