<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
    <ul>
        <li><RouterLink to="/contador">Contador</RouterLink></li>
        <li><RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink></li>
        <li><RouterLink to="/registrar">Registrar</RouterLink></li>
    </ul>
</div>
</template>
<script setup>
import router from '@/router';
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import { ref, watch } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref();
const email = ref();
// watch(() => registrarStore.nombre, (newValue) => {
//     nombre.value = newValue;
// })
// watch(() => registrarStore.email, (newValue) => {
//     email.value = newValue;
// })
</script>
<style scoped>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>