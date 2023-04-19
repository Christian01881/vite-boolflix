<template>
    <header>
        <AppSearch @find="movieFinder()" />
    </header>
    <div id="jumbotron">

    </div>
    <main>
        <AppSingleCard />
    </main>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
import AppSearch from '../components/AppSearch.vue';
import AppSingleCard from './AppSingleCard.vue'
    export default {
        name: 'AppContent',
        data(){
            return{
                store,
            }
        },
        components:{
            AppSearch,
            AppSingleCard
        },
        methods: {
            movieFinder(){
                let params = {} 
                for (let key in store.queryParameters) {
                    if (store.queryParameters[key]) {
                    params[key] = store.queryParameters[key]
                  }
                }
                axios.get(store.URL + store.endSearch + '/' + store.endPointMovie, {params}).then((res)=> {
                    store.movies = res.data.results;
                    console.log(store.movies);
                })
                axios.get(store.URL + store.endSearch + '/' + store.endPointSeries, {params}).then((res)=> {
                    store.series = res.data.results;
                    console.log(store.series);
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 90px;
        position: fixed;
        top: 0;
        z-index: 1000;
        backdrop-filter: blur(10px);
        border-bottom: 2px solid #140f23;
        }

        #jumbotron{
            margin: 0 auto;
            width: 70%;
            height: 80vh;
            background-image: url(../image/netflix.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position-y: 90px;
            border: 1px solid #98bff5;
        }

        @media screen and (max-width: 1000px) {
            #jumbotron{
                background-size: contain;
            }
        }

        @media screen and (max-width: 950px) {
            #jumbotron{
                background-size: contain;
                height: 50vw;
            }
        }
        
</style>