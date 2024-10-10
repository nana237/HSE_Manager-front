<template>
  <div>
    <!-- Utilisation du composant HeaderComponent -->
    <HeaderComponent />

    <!-- Contenu principal de la page -->
    <div class="content">
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est le contenu de la page.</p>
    </div>
  </div>
</template>

<script>
// Importation du composant HeaderComponent
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderComponent, // Enregistrement du composant
  },
};
</script>
