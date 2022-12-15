<template>
    <div class="alert-err">
        <div class="message">
            <h3>An error occurred try again</h3>
        </div>
    </div>

</template>
<script>
import { onMounted } from 'vue';

</script>
<style scoped>
    .alert-err{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        /* background: rebeccapurple; */
    }
    .message{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:40px;
        font-family: sans-serif;
        font-size: 15px;
        background: rgba(231, 221, 221, 0.374);
        height: 40px;
        color: azure;
        padding: 5px;
        border-radius: 5px;
    }

</style>