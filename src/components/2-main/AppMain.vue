<script>
import AppMainOne from './AppMainOne.vue';
import AppMainTwo from './AppMainTwo.vue';
import AppMainThree from './AppMainThree.vue';
import AppMainFour from './AppMainFour.vue';
import AppMainFive from './AppMainFive.vue';
import AppMainSix from './AppMainSix.vue';
import AppMainSeven from './AppMainSeven.vue';

  export default{
    name: 'AppMain',
    components:{
        AppMainOne,
        AppMainTwo,
        AppMainThree,
        AppMainFour,
        AppMainFive,
        AppMainSix, 
        AppMainSeven
    }
  }
</script>

<template>
  <AppMainOne/> 
  <AppMainTwo/>
  <AppMainThree/>
  <AppMainFour/>
  <AppMainFive/>
  <AppMainSix/>
  <AppMainSeven/>
</template>

<style lang="scss" scoped>

</style>
