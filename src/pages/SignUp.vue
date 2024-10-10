<template>
    
  <div class="w-full h-full px-[72px] pb-20 bg-[#f8f8f8] justify-center items-center inline-flex">
  <div class="w-full h-full flex items-center justify-center ">

    <form @submit.prevent="register">
    <div class="h-[550px] flex-col justify-start items-start gap-10 inline-flex pt-10 px-20 bg-white">
      <div class="flex-col justify-start items-start gap-10 flex">
        <div class="text-[#212b36] text-3xl font-bold font-['Inter'] leading-[38px]">Sign Up</div>
        <div class="flex-col justify-start items-start gap-5 flex">
          <div class="w-[400px] h-[84px] flex-col justify-start items-start gap-[5px] flex">
            <div class="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
              <div  for="email" class="w-[250px] justify-start items-start gap-2.5 inline-flex">
                <div class="text-[#111928] text-base font-medium font-['Inter'] leading-normal">Email Address</div>
              </div>
              <input type="email" id="email"  class="focus:outline-none self-stretch grow shrink basis-0 pl-5 pr-4 py-3 bg-white rounded-md border border-[#3758f9] justify-start items-center gap-2.5 inline-flex">
            </div>
          </div>
          <div class="w-[400px] h-[84px] flex-col justify-start items-start gap-[5px] flex">
            <div class="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
              <div class="w-[250px] justify-start items-start gap-2.5 inline-flex">
                <div class="text-[#111928] text-base font-medium font-['Inter'] leading-normal">Your Password</div>
              </div>
              <input type="password" class="self-stretch focus:outline-none grow shrink basis-0 pl-5 pr-4 py-3 bg-white rounded-md border border-[#dfe4ea] justify-start items-center gap-2.5 inline-flex">
              
            </div>
          </div>
          <div class="w-[400px] px-7 py-[13px] bg-[#3758f9] rounded-md justify-center items-center gap-2.5 inline-flex">
            <div class="text-center text-white text-base font-medium font-['Inter'] leading-normal">Sign In</div>
          </div>
        </div>
      </div>
      <div class="justify-start items-start gap-[23px] inline-flex">
        <div class="text-[#637381] text-base font-normal font-['Inter'] leading-normal">Forget Password?</div>
        <div class="text-right"><span style="text-[#637381] text-base font-normal font-['Inter'] leading-normal">Don't have an account? </span><span style="text-[#3758f9] text-base font-normal font-['Inter'] leading-normal">Sign Up</span></div>
      </div>
    </div>
    </form>
    <div class="w-[585px] h-[550px] relative overflow-hidden">
      <div class="w-[585px] h-[550px] left-0 top-0 absolute bg-[#3056d3]"></div>
      <div class="w-[585px] h-[550px] left-0 top-0 absolute bg-[#3758f9]"></div>
      <div class="w-[495px] h-[495px] left-[-80px] top-[-140px] absolute bg-gradient-to-r from-sky-50 to-blue-600 rounded-full"></div>
      <div class="w-[85px] h-[85px] left-[415px] top-[490px] absolute origin-top-left -rotate-90 bg-gradient-to-r from-sky-50 to-blue-600 rounded-full"></div>
      <div class="w-[354px] h-[354px] left-[-177px] top-0 absolute bg-gradient-to-r from-sky-50 to-blue-600 rounded-full"></div>
      <div class="text-left left-[55px] top-[393px] absolute text-white text-[28px] font-semibold font-['Inter'] leading-[34px]">Hey<br/>Welcome<br/>Back</div>
    </div>
  </div>
</div>
</template>

<script>

// let form={
//   name:"",
//   mail:"",
//   password:""
// }


export default {
    name:'SignUp',
    mounted() {
    },
}
</script>

<style scoped>

</style>