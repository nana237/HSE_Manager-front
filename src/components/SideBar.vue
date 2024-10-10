<template>
   <div class="flex flex-col w-96 gap-10 pl-5">
            
        <div class="VerticalNavbars w-[299px] h-80 bg-white rounded-3xl shadow flex-col justify-between items-start inline-flex">
        <div class="Frame1000005126 flex-col justify-start items-start gap-9 flex">
            <div class="Frame1000005047 h-20 flex-col justify-start items-start flex">
                <router-link to="/" class="SidebarMenu self-stretch pl-9 pr-7 py-2.5 bg-white justify-start items-center gap-2.5 inline-flex">
                <div class="Home text-indigo-500 text-base font-medium font-['Inter'] leading-normal">Accueil</div>
                </router-link>
                <router-link to="/emergencykit" class="SidebarMenu w-64 pl-9 pr-7 py-2.5 bg-white justify-start items-center gap-2.5 inline-flex">
                <div class="Home text-gray-500 text-base font-medium font-['Inter'] leading-normal">Mes équipements</div>
                </router-link>
                <div class="Frame1000005051 h-44 flex-col justify-start items-start flex">
                <router-link to="/about" class="SidebarMenu self-stretch pl-9 pr-7 py-2.5 bg-white justify-start items-center gap-2.5 inline-flex">
                    <div class="Home text-gray-500 text-base font-medium font-['Inter'] leading-normal">Mon DUERP</div>
                </router-link>
                <router-link to="/about" class="SidebarMenu self-stretch pl-9 pr-7 py-2.5 bg-white justify-start items-center gap-2.5 inline-flex">
                    <div class="Home text-gray-500 text-base font-medium font-['Inter'] leading-normal">Gestion des certifications</div>
                </router-link>
                <router-link to="/about" class="SidebarMenu self-stretch pl-9 pr-7 py-2.5 bg-white justify-start items-center gap-2.5 inline-flex">
                    <div class="Home text-gray-500 text-base font-medium font-['Inter'] leading-normal">Mes informations d’entreprise</div>
                </router-link>
                <router-link to="/about" class="SidebarMenu self-stretch pl-9 pr-7 py-2.5 bg-white justify-start items-center gap-2.5 inline-flex">
                    <div class="Home text-gray-500 text-base font-medium font-['Inter'] leading-normal">Réglementation</div>
                </router-link>
                </div>
            </div>
        </div>
        </div>



        <div class="w-[299px] h-[439px] relative">
        <div class="w-[299px] h-[439px] left-0 top-0 absolute bg-white rounded-[21px] shadow border border-[#dfe4ea]"></div>
        <div class="w-[267px] h-[85px] px-[18px] py-[15px] left-[14px] top-[141px] absolute bg-[#fef3f3] rounded-lg shadow justify-start items-start gap-3 inline-flex">
            <div class="w-5 h-5 relative">
            <div class="w-5 h-5 left-0 top-0 absolute bg-[#e10e0e] rounded-full"></div>
            <div class="w-3 h-3 pl-[0.34px] pr-[0.32px] pt-[0.34px] pb-[0.32px] left-[4px] top-[4px] absolute justify-center items-center inline-flex">
                <div class="w-[11.34px] h-[11.34px] relative">
                </div>
            </div>
            </div>
            <div class="w-[199px] h-10 text-[#bc1c21] text-sm font-medium font-['Inter'] leading-tight">La certification de secouriste<br/>de François Didier est expirée</div>
        </div>
        <div class="w-[263px] h-[77px] left-[13px] top-[52px] absolute bg-amber-50 rounded-lg shadow">
            <div class="w-5 h-5 left-[18px] top-[15px] absolute">
            <div class="w-5 h-5 left-0 top-0 absolute bg-amber-400 rounded-[27px]"></div>
            <div class="w-2.5 h-2.5 px-[0.27px] pt-[0.51px] pb-[1.34px] left-[5px] top-[5.28px] absolute justify-center items-center inline-flex">
                <div class="w-[9.45px] h-[8.15px] relative">
                </div>
            </div>
            </div>
            <div class="w-[201px] left-[50px] top-[15px] absolute text-[#9d5425] text-sm font-medium font-['Inter'] leading-tight text-left">Le détécteur de fumée A465 doit être vérifié</div>
            <div class="w-[74px] h-[18px] py-2 left-[182px] top-[52px] absolute bg-white rounded-md border border-[#637381] justify-center items-center gap-2.5 inline-flex">
            <div class="text-center text-[#111928] text-[9px] font-medium font-['Inter'] leading-snug">Plus de détails</div>
            </div>
        </div>
        <div class="w-[74px] h-[18px]  py-2 left-[197px] top-[204px] absolute bg-white rounded-md border border-[#637381] justify-center items-center gap-2.5 inline-flex">
            <div class="text-center text-[#111928] text-[9px] font-medium font-['Inter'] leading-snug">Plus de détails</div>
        </div>
        <div class="left-[22px] top-[13px] absolute text-[#111928] text-base font-semibold font-['Inter'] leading-[30px]">Mes alertes</div>
        </div>
   </div>

</template>

<script>
export default {
   name:'SideBar'
}
</script>
<style scoped>

</style>