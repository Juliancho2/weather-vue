<script setup>

import Index from './components/Index.vue';
import { appWeatherStore } from './stores/store';

import { onMounted } from 'vue';
const store = appWeatherStore();




</script>
<template>
  <div class="app">
    <Index/>
  </div>
</template>

<style scoped>
.app{
  background: red;
  min-height:100vh ;
}

</style>
