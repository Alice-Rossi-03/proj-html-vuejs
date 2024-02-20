<script>
import AppMainOne from './AppMainOne.vue';
import AppMainTwo from './AppMainTwo.vue';
import AppMainThree from './AppMainThree.vue';
import AppMainFour from './AppMainFour.vue';

  export default{
    name: 'AppMain',
    components:{
        AppMainOne,
        AppMainTwo,
        AppMainThree,
        AppMainFour
    }
  }
</script>

<template>
  <AppMainOne/> 
  <AppMainTwo/>
  <AppMainThree/>
  <AppMainFour/>
</template>

<style lang="scss" scoped>

</style>
