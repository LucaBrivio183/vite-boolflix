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
        <h2 v-show="!store.toogleShowAtSearch">WHAT DO YOU WANT TO WATCH TODAY? <font-awesome-icon
                icon="fa-solid fa-turn-up" /></h2>
        <div class="container">
            <h3 v-show="store.toogleShowAtSearch">MOVIES MATCHES</h3>
            <div class="card-list"> <!-- movies list -->
                <!-- movies card -->
                <div v-for="item in store.movies">
                    <Card :item='item' />
                </div>
            </div>
        </div>
        <div class="container">
            <h3 v-show="store.toogleShowAtSearch">TV SHOWS MATCHES</h3>
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

    h2 {
        text-align: end;
        color: white;
        font-size: 2vw;
        padding: 10px 0;
        margin-right: 10%
    }

    .container {
        @include ms_container(87.5rem, 90%);

        h3 {
            color: white;
            font-size: 2vw;
            padding: 10px 0;
        }

        .card-list {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            overflow-y: hidden;
        }
    }
}
</style>
