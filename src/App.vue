<script>
//libraries
import axios from 'axios';
//function
import { store } from './store';
//components
import AppHeader from './assets/components/header/AppHeader.vue';
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
  methods: {
    searchMovie() {
      axios.get(store.config.url_movies,
        {
          params: {
            api_key: store.config.api_key,
            query: store.searchKey,
            language: store.config.language
          }
        })
        .then((response) => {
          this.store.movies = response.data.results
        })
    },
    searchTvSeries() {
      axios.get(store.config.url_tv,
        {
          params: {
            api_key: store.config.api_key,
            query: store.searchKey,
            language: store.config.language,
          }
        })
        .then((response) => {
          this.store.tvSeries = response.data.results
        })
    },
    search() {
      this.searchMovie(),
        this.searchTvSeries()
    }

  },
}

</script>

<template>
  <AppHeader @callSearch="this.search()" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
