<script>
import { store } from '../../../store';
import Card from './Card.vue';

export default {
    name: 'Main',
    components: {
        Card,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        compilePosterUrl(posterPath) {
            return `${store.config.url_poster}${store.config.posterSize}${posterPath}`
        }
    }

}
</script>

<template>
    <h2>movies</h2>
    <!-- movies card -->
    <div v-for="item in store.movies">
        <Card :title="item.title" :originalTitle="item.original_title" :originalLanguage="item.original_language"
            :voteAverage="item.vote_average" :poster="compilePosterUrl(item.poster_path)" />
    </div>
    <h2>tv series</h2>
    <!-- TV series card -->
    <div v-for="item in store.tvSeries">
        <Card :title="item.name" :originalTitle="item.original_name" :originalLanguage="item.original_language"
            :voteAverage="item.vote_average" :poster="compilePosterUrl(item.poster_path)" />
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;
</style>