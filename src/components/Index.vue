<template>
    <div class="index">
        <div class="header-index">
            <h2>Weather Vue</h2>
            
        </div>
        <Layout/>
        <div class="footer">
            <ul>
                <li><a href=""><font-awesome-icon icon="fa-brands fa-github" /></a></li>
                <li>Made by | Julian Moreno</li>
                
            </ul>
        </div>
    </div>
</template>

<script setup>
import Layout from './layout/Layout.vue';


</script>

<style scoped>
.index {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    min-height: 100vh;
}
.header-index{
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 20px;
    color: aliceblue;
    font-family: sans-serif;
    padding: 3px 0;
    box-sizing: border-box;
}

.footer{

    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 600px;
}

.footer ul{
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    max-width: 300px;
}
.footer ul li{
    list-style: none;
    font-size: 15px;
    font-family: sans-serif;
    color: azure;
}
.footer ul li a{
    color: azure;
    font-size: 20px;
}
@media (min-width:750px) {
    .header-index{
        justify-content: flex-start;
        padding-left: 50px;
    }
    
}
</style>