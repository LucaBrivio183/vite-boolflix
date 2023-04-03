<script>
//libraries
import axios from 'axios';
//function
import { store } from './store';
//components
import AppHeader from './assets/components/header/AppHeader.vue';
import AppMain from './assets/components/main/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchMovie() {
      axios.get(store.config.urlApi + store.config.endpointMovies,
        {
          params: {
            api_key: store.config.apiKey,
            query: store.searchKey,
            language: store.config.language
          }
        })
        .then((response) => {
          this.store.movies = response.data.results
        })
    },
    searchTvSeries() {
      axios.get(store.config.urlApi + store.config.endpointTv,
        {
          params: {
            api_key: store.config.apiKey,
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
        this.searchTvSeries(),
        store.toogleShowAtSearch = true
    }

  },
}

</script>

<template>
  <AppHeader @callSearch="this.search()" />
  <AppMain />
</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss' as *;
</style>
