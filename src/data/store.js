import { reactive } from 'vue';

export const store = reactive({
    URL: 'https://api.themoviedb.org/3/',
    movies: [],
    series: [],
    queryParameters: {
        api_key: '2884b9a60d325d6b3aee52d7d709d4a6',
        query: 'avatar'
    },
    endSearch: 'search',
    endPointMovie: 'movie',
    endPointSeries: 'tv'
})