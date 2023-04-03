import { reactive } from "vue";

export const store = reactive({
    //links for API request.
    config: {
        urlApi: 'https://api.themoviedb.org/3/',
        endpointMovies: 'search/movie?/',
        endpointTv: 'search/tv?/',
        apiKey: 'e485e07e64f3f605cf0eb3c2b003041e',
        language: 'it-IT',
        urlPoster: 'https://image.tmdb.org/t/p/',
        posterSize: 'w342/'
    },
    //searchKey that take input from user
    searchKey: '',
    //array of filtered movies for showing on screen
    movies: [],
    //array of filtered TV series for showing on screen
    tvSeries: [],
    //general toggle for showing and hiding element on page at search 
    toogleShowAtSearch: false,
})