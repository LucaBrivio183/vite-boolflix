<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from '../../../store';
export default {
    name: 'Card',
    components: {
        CountryFlag,
    },
    props: {
        item: Object
    },
    computed: {
        //function to handle mismatch between country codes and language  codes
        countryToLang() {
            switch (this.item.original_language) { // to do handle every possible code (overkilling)
                case 'en':
                    return 'gb';
                case 'he':
                    return 'li';
                case 'ja':
                    return 'jpn';
                default:
                    return this.item.original_language;
            }
        }
    },
    data() {
        return {
            store,
            showInfo: false//variable   for hover effect
        }
    },
    methods: {
        //function to visualize average vote as star  (1 to  5)
        star(voteAverage) {
            return (Math.ceil(voteAverage / 2))
        },
    }
}
</script>

<template>
    <article @mouseover="this.showInfo = true" @mouseleave="this.showInfo = false">
        <div class="card-poster">
            <img src="../../img/image-not-found.png" alt="image-not-found" v-if="this.item.poster_path === null">
            <img :src="this.store.config.urlPoster + this.store.config.posterSize + this.item.poster_path" :alt="item.title"
                v-else>
        </div>
        <div class="card-info" v-show="showInfo">
            <span><b>Titolo: </b>{{ item.title || item.name }}</span>
            <span><b>Titolo originale: </b>{{ item.originalTitle || item.originalname }}
                <CountryFlag class="flag" :country='countryToLang' />
            </span>
            <span><b>Voto: </b>
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in star(item.vote_average)" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - star(item.vote_average))" />
            </span>
            <span class="overview"><b>Overview: </b>{{ item.overview }}</span>
        </div>
    </article>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;
@use '../../scss/_partials/variables' as *;
@use '../../scss/_partials/mixins' as *;

article {
    position: relative;
    background-color: $secondary;
    width: 342px;
    height: 513px;
    overflow: hidden;

    .card-poster {
        img {
            display: block;
            height: 100%;
        }
    }

    .card-info {
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        display: flex;
        flex-direction: column;
        gap: .625rem;
        padding: 20px;
        max-height: 100%;

        span {
            font-size: 1.125rem;
            vertical-align: middle;

            .flag {
                margin: 0 0.5px;
            }

            b {
                font-size: 1.125rem;
            }

            .fa-star {
                color: gold;
                padding: 0 .3125rem;
            }
        }

        .overview {
            text-overflow: ellipsis;
            overflow: hidden;
        }


    }

    &:hover {
        .card-poster {
            opacity: 0.2;
        }
    }
}
</style>