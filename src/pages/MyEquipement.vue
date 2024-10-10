<template>
  <div class="flex flex-col bg-white w-full h-[746] mx-8 rounded-3xl">
    <div class="flex flex-row justify-center py-8">
      <button
        class="text-[#2c4eff] text-[15px] font-normal font-['Inter'] px-6"
      >
        Défibrilateur
      </button>
      <button
        class="text-[#5b5d68] text-[15px] font-normal font-['Inter'] px-6"
      >
        Extincteur
      </button>
      <button
        class="text-[#5b5d68] text-[15px] font-normal font-['Inter'] px-6"
      >
        Autres
      </button>
    </div>
    <div class="bg-[#f8f8f8] rounded-xl mx-4 shadow">
      <div class="flex flex-row justify-evenly py-6">
        <div
          class="text-[#111928] text-[15px] font-medium font-['Inter'] leading-relaxed"
        >
          NAME
        </div>
        <div
          class="text-[#111928] text-[15px] font-medium font-['Inter'] leading-relaxed"
        >
          NUMBER
        </div>
      </div>
      <div class="bg-white flex flex-row justify-between p-4 rounded-xl pl-20">
        <div
          class="text-[#637381] text-sm font-normal font-['Inter'] leading-snug"
        >
          NAME
        </div>
        <div
          class="text-[#637381] text-sm font-normal font-['Inter'] leading-snug"
        >
          NUMBER
        </div>
        <button
          class="h-[34px] px-5 py-[5px] bg-white rounded-[50px] border border-[#3758f9] justify-center items-center inline-flex text-center text-[#3758f9] text-base font-medium font-['Inter'] leading-normal"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyEquipement",
};
</script>
