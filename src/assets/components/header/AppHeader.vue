<script>
import { store } from '../../../store';
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <header>
        <input type="text" v-model="store.searchKey" @keyup.enter="$emit('callSearch')">
        <button @click="$emit('callSearch')">search</button>
    </header>
</template>

<style lang="scss" scoped></style>