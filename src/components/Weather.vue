<template>
    7°
</template>

<script setup>
import { useWeather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

onMounted(()=>{
    useWeather();
})
</script>

<style scoped>

</style>