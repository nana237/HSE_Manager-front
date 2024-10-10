<template>
  <div
    class="relative bg-white md:w-[990px] md:h-[766px] rounded-[21px] p-8 mx-4 md:px-16 md:py-8"
  >
    <!-- Colonne de gauche -->
    <div class="flex flex-col md:flex-row gap-28">
      <!-- Colonne gauche: Dropdown et Modèle, Fabricant, Numéro de série -->
      <div class="flex flex-col gap-4 w-full md:w-1/3">
        <!-- Dropdown Type -->
        <label
          class="md:self-start text-[#111928] text-base font-normal font-['Inter'] leading-normal"
        >
          Type
        </label>
        <div class="relative w-full">
          <select
            class="appearance-none w-full bg-white border border-gray-300 text-gray-500 py-3 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled selected>Choisissez une option</option>
            <option value="Trousse de soin">Trousse de soin</option>
            <option value="Defibrilateur">Défibrilateur</option>
            <option value="Autre">Autre</option>
          </select>
          <!-- Icône de la flèche -->
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <!-- Modèle -->
        <div class="flex flex-col md:items-start">
          <label
            class="text-[#212b36] text-base font-medium font-['Inter'] leading-normal"
          >
            Modèle
          </label>
          <input
            type="text"
            class="w-full mt-2 pl-5 pr-4 py-3 bg-white rounded-md border border-gray-300 text-gray-800 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
            placeholder="Modèle"
          />
        </div>

        <!-- Fabricant -->
        <div class="flex flex-col md:items-start">
          <label
            class="text-[#212b36] text-base font-medium font-['Inter'] leading-normal"
          >
            Fabricant
          </label>
          <input
            type="text"
            class="w-full mt-2 pl-5 pr-4 py-3 bg-white rounded-md border border-gray-300 text-gray-800 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
            placeholder="Fabricant"
          />
        </div>

        <!-- Numéro de série -->
        <div class="flex flex-col md:items-start">
          <label
            class="text-[#212b36] text-base font-medium font-['Inter'] leading-normal"
          >
            Numéro de série
          </label>
          <input
            type="text"
            class="w-full mt-2 pl-5 pr-4 py-3 bg-white rounded-md border border-gray-300 text-gray-800 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
            placeholder="Numéro de série"
          />
        </div>
      </div>

      <!-- Colonne droite: Image, Dates, et Description -->
      <div class="flex flex-col gap-4 w-full md:w-2/3">
        <!-- Image -->
        <div class="flex flex-col md:items-start">
          <label
            class="text-[#212b36] text-base font-medium font-['Inter'] leading-normal"
          >
            Image
          </label>
          <input
            type="file"
            class="w-full mt-2 pl-5 pr-4 py-3 bg-white rounded-md border border-gray-300 text-gray-400 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
          />
        </div>

        <!-- Date Installation -->
        <div class="flex flex-col md:items-start">
          <label
            class="text-[#212b36] text-base font-medium font-['Inter'] leading-normal"
          >
            Date Installation
          </label>
          <input
            type="date"
            class="w-full mt-2 pl-5 pr-4 py-3 bg-white rounded-md border border-gray-300 text-gray-800 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
          />
        </div>

        <!-- Date Expiration -->
        <div class="flex flex-col md:items-start">
          <label
            class="text-[#212b36] text-base font-medium font-['Inter'] leading-normal"
          >
            Date Expiration
          </label>
          <input
            type="date"
            class="w-full mt-2 pl-5 pr-4 py-3 bg-white rounded-md border border-gray-300 text-gray-800 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
          />
        </div>

        <!-- Description -->
        <div class="flex flex-col md:items-start">
          <label
            class="text-[#111928] text-base font-medium font-['Inter'] leading-normal"
          >
            Description
          </label>
          <textarea
            class="w-full mt-2 p-5 bg-white rounded-md border border-[#dfe4ea] text-gray-800 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
            placeholder="Description"
            rows="8"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FicheEquipement",
};
</script>

<style scoped>
/* Styles personnalisés si nécessaire */
</style>
