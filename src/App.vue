<template>
  <div id="app">
    <EquipementPage />
  </div>
   <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
  </nav>
<div class="flex">
  <SideBar />  
  <router-view />
</div>
</template>

<script>
import EquipementPage from "./pages/EquipementPage.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    EquipementPage,SideBar
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
