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
        <div class="container">
            <h1>BOOLFIX</h1>
            <input type="text" placeholder="Search movies or TV series" v-model="store.searchKey"
                @keyup.enter="$emit('callSearch')">
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;
@use '../../scss/_partials/variables' as *;
@use '../../scss/_partials/mixins' as *;

header {
    padding: 1.25rem 0;
    background-color: $secondary;
    flex-shrink: 0;

    .container {
        @include ms_container(87.5rem, 90%);
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            color: $primary;
            font-size: 5vw;
        }

        input {
            height: 3vw;
            width: 20%;
            opacity: 0.8;
            padding: 0 10px;

            &:focus {
                outline: none;
                opacity: 1;
            }
        }
    }
}
</style>