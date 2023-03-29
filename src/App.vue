<script>
//libraries
import axios from 'axios';
//function
import { store } from './store';
//components
import AppHeader from './assets/components/Header/AppHeader.vue';
import AppMain from './assets/components/main/AppMain.vue';
import AppFooter from './assets/components/footer/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  created() {

  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss' as *;
</style>
