import { reactive } from "vue";

export const store = reactive({
    //links for API request.
    config: {
        url_movies: 'https://api.themoviedb.org/3/search/movie?',
        url_tv: 'https://api.themoviedb.org/3/search/tv?',
        api_key: 'e485e07e64f3f605cf0eb3c2b003041e',
        language: 'it',
    },
    //searchKey that take input from user
    searchKey: '',
    //array of filtered movies for showing on screen
    movies: [],
})