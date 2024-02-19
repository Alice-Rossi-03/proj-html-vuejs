<script>
import AppNav from './AppNav.vue';
import AppJumbotron from './AppJumbotron.vue';

  export default{
    name: 'AppHeader',
    components:{
        AppNav,
        AppJumbotron
    }
  }
</script>

<template>
  <AppNav/>
  <AppJumbotron/>
</template>

<style lang="scss" scoped>


</style>
