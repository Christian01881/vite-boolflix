<template>
    <header class="d-flex align-items-center justify-content-between">
        <h1 class="fs-1 ps-5"><span class="orange">Bool</span><span class="light">Flix</span></h1>
        
        <AppSearch @find="movieFinder()" />
    </header>
    <div id="jumbotron">

    </div>
    <div class="subtitle">
        <h2 class="mt-3 text-center light">Tutti i <span class="orange">Film</span> e le tue <span class="orange">serie TV</span>  preferite, <br> a portata di click!</h2>
    </div>
    <main>
        <h1 class="orange mt-5 mb-4 title">My Films:</h1>
        <div class="d-flex align-items-start overflow-x">
            <AppSingleCard v-for="card, index in store.movies" :card="card"/>
        </div>
        <h1 class="orange mt-5 mb-4 title">My TV-Series:</h1>
        <div class="d-flex align-items-start overflow-x">
            <AppSingleCard  v-for="card, index in store.series" :card="card"/>
        </div>
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
                store.queryParameters.query = '';
            },
            showCanvas(){
                store.seeCanvas = true
            }
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
    .orange{
       color: #ff9310;
    }
    .light{
        color:#98bff5;
    }

    .bg-purple{
        background-color: #140f23;
    }

        #jumbotron{
            margin: 0 auto;
            width: 70%;
            height: 80vh;
            background-image: url(../image/netflix.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position-y: 90px;
        }

        .overflow-x{
            overflow-x: hidden;
            width: 90%;
            margin: 0 auto;
            height: 420px;

            &:hover{
                overflow-x: scroll;
            }

            &::-webkit-scrollbar {
                height: 10px;
            }

            &::-webkit-scrollbar-thumb{
                background-color:#98bff5;
                border-radius: 10px;
            }
        }

        .title{
            margin-left: 5vw;
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