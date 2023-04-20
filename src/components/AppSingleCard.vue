<template>
    <div class="card-path">
        <div>
            <img class="none" :src="store.ImageURL + card.poster_path" alt="">
            <h3 class="show text-center">{{ card.title }}</h3>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'AppSingleCard',
        props: ['card'],
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-path{
        min-width: 250px;
        height: 400px;
        margin-right: 30px ;
        color:#98bff5;
        overflow-y: hidden;
        
        &:hover{
            background-color: black;
        }

        &:hover .none{
            opacity: 0.1;
        }

        &:hover .show{
            display: block;
            position: relative;
            top: -250px;
        }
    }

    img{
        width: 100%;
        height: 400px;
        display: block;
    }
</style>