<template>
    <div class="card-path">
        <div>
            <img class="none" :src="store.ImageURL + card.poster_path" alt="">
            <h3 class="show text-center">{{ card.title }}</h3>
            <h3 class="show text-center">{{ card.name }}</h3>
            <p class="show mt-4 text-center">Language:</p>
            <img :src="'src/image/' + card.original_language + '.png'" alt="" class="show flags mi-5"  v-if="flags.includes(card.original_language)">
            <h5 v-else class="show mt-5 orange text-center"><span class="text-uppercase">{{ card.original_language }}</span>... <br> Sorry flag not found</h5>
            <p v-if="card.overview != 0" class="show mt-5">{{ card.overview.slice(0, 100) }}...</p>
            <p v-else class="show text-center mt-5 orange">Sorry overview not found</p>
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
                store,
                flags: [ 'it', 'en', 'us']
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
            top: -400px;
        }
    }

    img{
        width: 100%;
        height: 400px;
        display: block;
    }

    .flags{
        width: 80px;
        height: 80px;
    }

    .mi-5{
        margin-left: 80px;
    }  
    
    .orange{
        color: #ff9310
    }
</style>