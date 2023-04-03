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
    <main>
        <div class="container">
            <h2>MOVIES</h2>
            <div class="card-list"> <!-- movies list -->
                <!-- movies card -->
                <div v-for="item in store.movies">
                    <Card :item='item' />
                </div>
            </div>
        </div>
        <div class="container">
            <h2>TV SHOWS</h2>
            <div class="card-list"> <!-- TV series list -->
                <!-- TV series card -->
                <div v-for="item in store.tvSeries">
                    <Card :item='item' />
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
