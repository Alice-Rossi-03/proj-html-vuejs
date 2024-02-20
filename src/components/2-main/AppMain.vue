<script>
import AppMainOne from './AppMainOne.vue';
import AppMainTwo from './AppMainTwo.vue';
import AppMainThree from './AppMainThree.vue';

  export default{
    name: 'AppMain',
    components:{
        AppMainOne,
        AppMainTwo,
        AppMainThree
    }
  }
</script>

<template>
  <AppMainOne/> 
  <AppMainTwo/>
  <AppMainThree/>
</template>

<style lang="scss" scoped>

</style>
