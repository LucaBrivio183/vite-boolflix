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
}
</script>

<template>
    <!-- movies card -->
    <div v-for="item in store.movies">
        <Card :title="item.title" :originalTitle="item.original_title" :originalLanguage="item.original_language"
            :voteAverage="item.vote_average" />
    </div>
    <!-- TV series card -->
    <div v-for="item in store.tvSeries">
        <Card :title="item.name" :originalTitle="item.original_name" :originalLanguage="item.original_language"
            :voteAverage="item.vote_average" />
    </div>
</template>

<style lang="scss" scoped></style>