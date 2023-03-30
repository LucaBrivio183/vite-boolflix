<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from '../../../store';
export default {
    name: 'Card',
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
    },
    components: {
        CountryFlag,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        star(voteAverage) {
            return (Math.ceil(voteAverage / 2))
        }
    }
}
</script>

<template>
    <article>
        <h3>{{ title }}</h3>
        <h4>{{ originalTitle }}</h4>
        <div>{{ originalLanguage }}</div>
        <CountryFlag :country='originalLanguage' size='small' />
        <div>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in star(voteAverage)" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - star(voteAverage))" />
        </div>
    </article>
</template>