<template>
    <div class="form-container">
        <div class="close" @click="closeModal">
            <font-awesome-icon icon=" fa-solid fa-xmark" />
        </div>
        <form action="" @submit.prevent="changeLocation(form.city, form.country)">
            <div>
                <label for="">Country</label>
                <input v-model.trim="form.country"  type="text" placeholder="Country">
            </div>
            <div>
                <label for="">City</label>
                <input v-model.trim="form.city" required type="text" placeholder="City">
            </div>
            <div class="btn-container">
                <button type="submit">Search</button> 
            </div>
        </form>
    </div>

</template>
<script setup>
import { appWeatherStore } from '../../stores/store';
import { reactive } from 'vue';

const store= appWeatherStore();
const emit=defineEmits(["closeModal",])
const form=reactive({
    country:"",
    city:"",

});

function changeLocation(city,country){
    store.changeLocationStore(city,country);
    emit("closeModal",false);
    store.barAction=true;
}
function closeModal(){
    emit("closeModal",false);
    store.barAction=true;
}
</script>
<style scoped>
    .form-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #9599e25b;
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        min-height: 100px;
    }
    .close{
        padding: 3px;
        position: absolute;
        align-self: flex-end;
        top:  0;
        color: azure;
        font-size: 25px;
        cursor: pointer;
    }
    .form-container form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        min-height: 150px;
        margin: 0 auto;
    }
    .form-container form div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* background: rebeccapurple; */
    }
    .form-container form div label{
        display: inline-block;
        width: 100%;
        max-width: 350px;
        padding: 10px 0;
        color: rgb(255, 253, 251);
        font-family: sans-serif;
        font-weight: bolder;
        
    }
    .form-container form div input{
        width: 100%;
        max-width: 350px;
        outline: none;
        box-sizing: border-box;
        margin-bottom: 5px;
        height: 30px;
        border: none;
        border: 1px solid rgb(232, 230, 230);
        border-radius: 5px;
    }
    .btn-container{
        margin-top: 10px;
        text-align: center;
    }

    .form-container form div button{
        border: none;
        background: #72acde;
        height: 40px;
        width: 80px;
        color: azure;
        font-weight: bold;
        font-size: 15px;
        justify-self: center;
        cursor: pointer;
    }
    .form-container form div button:hover{
        opacity: 0.8;
    }
</style>