<template>
<div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
        <li><RouterLink to="/contador">Contador</RouterLink></li>
        <li><RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink></li>
    </ul>
</div>
</template>
<script setup>
import router from '@/router';


</script>
<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>