<script>
import LangFlag from 'vue-lang-code-flags';
import { store } from '../../../store';
export default {
    name: 'Main',
    data() {
        return {
            store,
            LangFlag
        }
    },
}
</script>

<template>
    <main>
        <ul v-for="item in store.movies">
            <li>{{ item.title }}</li>
            <li>{{ item.original_title }}</li>
            <li>{{ item.original_language }}</li>
            <li><lang-flag :iso="item.original_language" :squared="false" /></li>
            <li>{{ item.vote_average }}</li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
ul {
    margin: 10px auto;
}
</style>