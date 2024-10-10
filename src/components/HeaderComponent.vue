<template>
  <div
    class="relative bg-white rounded-[21px] mx-4 my-8 px-4 py-2 lg:px-8 lg:py-4 flex items-center justify-between"
  >
    <!-- Logo Section -->
    <div class="flex items-center">
      <img
        class="w-14 h-14 lg:w-20 lg:h-20 object-contain"
        src="@/assets/Logo_1.png"
        alt="Logo"
      />
      <img
        class="w-36 h-8 lg:w-60 lg:h-12 ml-4"
        src="@/assets/Logo_ecrit.png"
        alt="Logo Texte"
      />
    </div>

    <!-- Profile Image -->
    <img
      class="w-14 h-14 lg:w-20 lg:h-20 rounded-full object-cover"
      src="@/assets/Profil_image.png"
      alt="Profile Image"
    />
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
/* Styles personnalisés si nécessaire */
</style>
