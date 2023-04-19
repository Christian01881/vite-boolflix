<template>
    <div class="pe-5">
        <input type="text" placeholder="Search a Movie" v-model="store.queryParameters.query" @keyup.enter="$emit('find')">
        <button @click="$emit('find')"><strong>Search</strong></button>
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'AppSearch',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    button{
        background-color: #98bff5;
        border: 2px solid #ff9310;
        border-radius: 6px;
        padding: 2px;
        margin-left: 10px;
    }

    input{
        background-color: #98bff5;
        border: 2px solid #ff9310;
        border-radius: 6px;
        padding: 2px;
    }

    input::placeholder {
        color: black;
        font-weight: bold;
    }
</style>