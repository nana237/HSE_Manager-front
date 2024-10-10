<template>
<div class="bg-[#f8f8f8] pt-5 h-full">


   <nav class="mb-8" >
      <HeaderComponent profile="false" />
  </nav>
<div class="flex">
  <SideBar v-if="true" />  
  <router-view />
</div>
</div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,SideBar
  },
};
</script>

<style>

</style>
