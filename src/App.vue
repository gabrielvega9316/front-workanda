<template>
  <router-view ></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh; /* Establecer la altura mínima como 100% de la altura de la ventana */
  background-color: #36414d; /* Color de fondo gris claro */
  margin: 0; /* Eliminar el margen para ocupar toda la pantalla */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>