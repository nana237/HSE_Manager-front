<template>
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
import SideBar from "./components/SideBar.vue";
export default {
  name: 'App',
  components: {
    SideBar
  }
}
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
