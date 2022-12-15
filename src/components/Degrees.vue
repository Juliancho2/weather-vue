<template>
    <div class="degrees">
       <div class="degrees-icon" v-for="icon in store.dataLocation.weather">
        <img :src="`https://openweathermap.org/img/wn/${icon.icon}@2x.png`" alt="">
       </div>
       <div class="degrees-description">
        <h3>
            {{Math.floor((f  - 32) * 5/9)}}°<span>C</span>
        </h3>
        <small v-for="item in store.dataLocation.weather">
            {{item.description}}
        </small>
       </div>
       <div class="degrees-more">
            <div class="degrees-more-item">
                <span>Humidity:</span>
                <p>{{store.dataTemp.humidity}}%</p> 
            </div>
            <div class="degrees-more-item">
                <span>Pressure:</span>
                <p>{{store.dataTemp.pressure}} </p> 
            </div>
       </div>
       
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { appWeatherStore } from '../stores/store';
const store= appWeatherStore();

let f=ref(0);

watch(store,()=>{
     f.value=(store.dataTemp.temp - 273.15) * 9/5 + 32;
})



</script>

<style scoped>
    .degrees{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
         min-height: 350px;
    }
    .degrees-icon img{
        width: 130px;
    }
    .degrees-description{
        width: 50%;
        text-align: center;
        min-height: 100px;
    }
    .degrees-description h3{
        color: azure;
        font-size: 70px;
        font-family: sans-serif;
        font-weight: lighter;
    }
    .degrees-description h3 span{
        font-size: 50px;
    }
    .degrees-description small{
        color: azure;
        font-family: sans-serif;
        font-size: 20px;
    }
    .degrees-more{
        margin-top: 60px;
        width: 80%;
        text-align: center;
 }
    .degrees-more-item{
        display: flex;
        align-items: center;
        justify-content: center;
        color: azure;
        font-family: sans-serif;
        width: 50%;
        margin: 0 auto;

    }
    .degrees-more-item span{
        display: inline-block;
        margin-right: 5px;
        font-weight: bold;
        font-size: 18px;
    }
</style>