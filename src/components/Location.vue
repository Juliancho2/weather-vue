<template>
    <div class="location">
        <div class="location-header">
            <div class="location-icon">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
            </div>
            <div class="location-city">
                <h3>{{store.dataLocation.name}}</h3>
            </div>
            <div class="bar-menu">
                <button @click="changeModal" v-show="store.barAction">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>

import { appWeatherStore } from '../stores/store';


const store=appWeatherStore();
const emit=defineEmits(["openModal"]);


function changeModal(){
    emit("openModal",true);
    store.barAction=false;
   
}
</script>
<style scoped>
    .location{
        width: 100%;
        min-height:60px ;
    }
    .location-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        height: 100%;
        margin: 0 auto;
        padding: 20px 0;

    }
    .location-icon{
        color: aliceblue;
        font-size: 20px;
    }
    .location-city{
        color: aliceblue;
        font-family: sans-serif;
        font-weight: 200;
    }
    .bar-menu button{
        border: none;
        background: transparent;
        color: aliceblue;
        font-size: 20px;
        cursor: pointer;
    }
</style>