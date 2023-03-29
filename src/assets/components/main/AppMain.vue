<script>
import { store } from '../../../store';
export default {
    name: 'Main',
    data() {
        return {
            store
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
            <li>{{ item.vote_average }}</li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
ul {
    margin: 10px auto;
}
</style>