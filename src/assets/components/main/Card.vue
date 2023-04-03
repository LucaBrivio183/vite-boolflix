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
    <article class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="../../img/image-not-found.png" alt="image-not-found" v-if="this.item.poster_path === null">
                <img :src="this.store.config.urlPoster + this.store.config.posterSize + this.item.poster_path"
                    :alt="item.title" v-else>
            </div>
            <div class="flip-card-back">
                <span><b>Titolo: </b>{{ item.title || item.name }}</span>
                <span><b>Titolo originale: </b>{{ item.original_title || item.original_name }}
                    <CountryFlag class="flag" :country='countryToLang' />
                </span>
                <span><b>Voto: </b>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in star(item.vote_average)" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - star(item.vote_average))" />
                </span>
                <span class="overview" v-if="this.item.overview === ''"><b>Overview: </b>No overview avaible</span>
                <span class="overview" v-else><b>Overview: </b>{{ item.overview }}</span>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;
@use '../../scss/_partials/variables' as *;
@use '../../scss/_partials/mixins' as *;

.flip-card {
    background-color: $secondary;
    width: $cardWidth;
    height: $cardHeight;
    perspective: 1000px;

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;

        .flip-card-front {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            /* Safari */
            backface-visibility: hidden;

            img {
                display: block;
                height: 100%;
                width: 100%;
            }
        }

        .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            /* Safari */
            backface-visibility: hidden;
            color: white;
            background-color: $secondary;
            padding: 20px;
            transform: rotateY(180deg);

            span {
                font-size: 1.125rem;
                display: block;
                align-items: center;
                margin: 10px;

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
            }
        }

    }

    &:hover {
        .flip-card-inner {
            transform: rotateY(180deg);
        }
    }
}
</style>