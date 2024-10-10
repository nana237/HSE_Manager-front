<template>
  <div class="bg-gray-100 flex flex-col">
    <HeaderComponent />
    <div class="">
      <AjoutEquipement />
    </div>
  </div>
</template>
<script>
// Importation des composant
import HeaderComponent from "@/components/HeaderComponent.vue";
//import DefibrilateurComponent from "@/components/DefibrilateurComponent";
import AjoutEquipement from "@/components/AjoutEquipement";
export default {
  name: "EquipementPage",
  components: {
    HeaderComponent, // Enregistrement des composant
    //DefibrilateurComponent,
    AjoutEquipement,
  },
};
</script>
