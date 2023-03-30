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
        poster: String
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
    <article>
        <div><img :src="poster" :alt="originalTitle"></div>
        <h3>{{ title }}</h3>
        <h4>{{ originalTitle }}</h4>
        <CountryFlag :country='countryToLang' size='small' />
        <div>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in star(voteAverage)" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - star(voteAverage))" />
        </div>
    </article>
</template>