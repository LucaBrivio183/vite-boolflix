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
    <main>
        <div class="container">
            <h2>MOVIES</h2>
            <div class="card-list"> <!-- movies list -->
                <!-- movies card -->
                <div v-for="item in store.movies">
                    <Card :title="item.title" :originalTitle="item.original_title"
                        :originalLanguage="item.original_language" :voteAverage="item.vote_average"
                        :poster="compilePosterUrl(item.poster_path)" :overview="item.overview" />
                </div>
            </div>
        </div>
        <div class="container">
            <h2>TV SHOWS</h2>
            <div class="card-list"> <!-- TV series list -->
                <!-- TV series card -->
                <div v-for="item in store.tvSeries">
                    <Card :title="item.name" :originalTitle="item.original_name" :originalLanguage="item.original_language"
                        :voteAverage="item.vote_average" :poster="compilePosterUrl(item.poster_path)"
                        :overview="item.overview" />
                </div>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;
@use '../../scss/_partials/variables' as *;
@use '../../scss/_partials/mixins' as *;

main {
    background-color: $tertiary;
    flex-grow: 1;

    .container {
        @include ms_container(75rem, 90%);
        height: 50%;

        h2 {
            color: white;
            font-size: 2vw;
            padding: 10px 0;
        }

        .card-list {
            display: flex;
            gap: 10px;
            overflow-x: auto;

        }
    }
}
</style>
