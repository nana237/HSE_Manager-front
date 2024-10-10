<template>
  <div class="flex flex-col items-center p-8 rounded-lg w-[750]">
    <!-- Titre et bouton Modifier -->
    <div class="flex justify-between items-center w-full mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Defibrilateur</h1>
      <button
        class="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-full hover:bg-gray-50 transition"
      >
        Modifier
      </button>
    </div>

    <!-- Conteneur des informations -->
    <div class="flex gap-8 w-[750] text-left">
      <!-- Colonne de gauche -->
      <div class="bg-white p-6 rounded-lg shadow-md w-[376px] h-[525px]">
        <div class="mb-4 text-gray-800">Modèle: Feur</div>
        <div class="mb-4 text-gray-800">Date Installation: 10/20/25</div>
        <div class="mb-4 text-gray-800">Date Vérification: 10/20/25</div>
      </div>

      <!-- Colonne de droite -->
      <div
        class="bg-white p-6 rounded-lg shadow-md w-[376px] h-[525px] text-left"
      >
        <div class="mb-4 text-gray-800">Autre Info:</div>
        <div class="mb-4 text-gray-800">Autre Info:</div>
        <div class="mb-4 text-gray-800">Autre Info:</div>
        <div class="text-gray-800">Description:</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefibrillatorComponent",
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles personnalisés ici si nécessaire */
</style>
