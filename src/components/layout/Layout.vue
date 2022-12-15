<script setup>
import Degrees from '../Degrees.vue';
import Index from '../form/Index.vue';
import Location from '../Location.vue';
import ErrorAlert from './ErrorAlert.vue';
import { onMounted, ref } from 'vue';
import { appWeatherStore } from '../../stores/store';

const store = appWeatherStore();
const modal = ref(false);
const bar=ref(false);

if (!store.dataChange) {
    onMounted(() => {
        store.defaultLocation();

    })
}
function changeModal(value) {
    modal.value = value;
}
function changeBar(value){
    bar.value=value;
}



</script>
<template>
    <div class="layout">


        <div class="message-err" v-if="store.err">
           <ErrorAlert/>
        </div>


        <div class="modal" v-show="modal">
            <Index 
            @openBar="changeBar"
            @closeModal="changeModal" 
            />
        </div>
        <div class="header">
            <Location
            :barChangeLayout="bar" 
            @openModal="changeModal" 
           
            />

        </div>
        <div class="body">
            <Degrees/>
        </div>


    </div>

</template>

<style scoped>
.layout {
    position: relative;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    min-height: 80vh;
}
</style>