<template>
  <div id="app">
    <EquipementPage />
  </div>
</template>

<script>
import EquipementPage from "./pages/EquipementPage.vue";

export default {
  name: "App",
  components: {
    EquipementPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
