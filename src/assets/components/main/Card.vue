<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from '../../../store';
export default {
    name: 'Card',
    components: {
        CountryFlag,
    },
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
        poster: String,
        overview: String
    },
    computed: {
        //function to handle mismatch between country codes and language  codes
        countryToLang() {
            switch (this.originalLanguage) { // to do handle every possible code (overkilling)
                case 'en':
                    return 'gb';
                case 'he':
                    return 'li';
                case 'ja':
                    return 'jpn';
                default:
                    return this.originalLanguage;
            }
        }
    },
    data() {
        return {
            store,
            showInfo: false
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
            <img v-if="poster === null" src="../../img/images-not-avaible.jpg" :alt="originalTitle">
            <img v-else :src="poster" :alt="originalTitle">
        </div>
        <div class="card-info" v-show="showInfo">
            <span><b>Titolo: </b>{{ title }}</span>
            <span><b>Titolo originale: </b>{{ originalTitle }}
                <CountryFlag class="flag" :country='countryToLang' size='medium' />
            </span>
            <span><b>Voto: </b>
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in star(voteAverage)" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - star(voteAverage))" />
            </span>
            <span class="overview"><b>Overview: </b>{{ overview }}</span>
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
            width: 100%;
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