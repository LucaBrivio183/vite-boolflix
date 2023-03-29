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
    axios.get('https://api.themoviedb.org/3/search/movie?', {
      params: {
        api_key: store.config.api_key,
        query: 'ritorno'
      }
    }).then((response) => {
      console.log(response.data.results);
    })
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
