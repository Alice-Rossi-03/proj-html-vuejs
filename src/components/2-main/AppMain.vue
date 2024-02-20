<script>
import AppMainOne from './AppMainOne.vue';
import AppMainTwo from './AppMainTwo.vue';
import AppMainThree from './AppMainThree.vue';
import AppMainFour from './AppMainFour.vue';
import AppMainFive from './AppMainFive.vue';

  export default{
    name: 'AppMain',
    components:{
        AppMainOne,
        AppMainTwo,
        AppMainThree,
        AppMainFour,
        AppMainFive
    }
  }
</script>

<template>
  <AppMainOne/> 
  <AppMainTwo/>
  <AppMainThree/>
  <AppMainFour/>
  <AppMainFive/>
</template>

<style lang="scss" scoped>

</style>
