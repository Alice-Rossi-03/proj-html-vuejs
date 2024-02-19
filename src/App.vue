<script>
import AppHeader from './components/1-header/AppHeader.vue'
import AppMain from './components/2-main/AppMain.vue'
import AppFooter from './components/3-footer/AppFooter.vue'

  export default{
    components: {
      AppHeader,
      AppMain,
      AppFooter
    }
  }
</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <main>
    <AppMain/>
  </main>

  <footer>
    <AppFooter/>
  </footer>
</template>

<style lang="scss">
header{
  background-image: url('./assets/img/header-bg.png');
}
</style>
