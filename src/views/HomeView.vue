<template>
  <main>
    <div class="container">
      <section class="flex justify-center mb-6 md:mb-0">
        <div
          class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2 bg-[url('../assets/images/background.svg')] bg-cover bg-no-repeat bg-center"
        >
          <img src="../assets/images/catMain.svg" alt="catMain" />
          <div class="flex flex-col justify-center">
            <h2 class="text-white text-5xl font-bold">威爾喵<br />為喵國的未來，先鋪路</h2>
            <p class="text-lg text-gray-500 py-5">
              不再藏在箱子裡，威爾喵為每隻貓站出來！<br />如果你認同我的理念，請支持我，請加入改變的行列。<br />
              這一次，為喵國的未來一起努力！
            </p>
            <button type="button" class="btn bg-purple-600 text-white w-auto lg:w-1/3">
              候選人簡介
            </button>
          </div>
        </div>
      </section>
    </div>
    <section class="bg-[#2c2c2c] border-y-2 border-indigo-500">
      <div class="flex justify-between items-center text-white text-xl">
        <Swiper
          :slides-per-view="'auto'"
          :modules="[Autoplay]"
          :allowTouchMove="false"
          :loop="true"
          :freeMode="true"
          :speed="2000"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false
          }"
        >
          <swiper-slide> 快來喵喵 喵喵喵 喵電感應 </swiper-slide>
          <swiper-slide> 不管相隔多遠都能互相連繫 </swiper-slide>
          <swiper-slide> 感覺到我跟你同時觸電反應</swiper-slide>
          <swiper-slide> 快來喵喵 喵喵喵 喵電感應 </swiper-slide>
          <swiper-slide> 不管相隔多遠都能互相連繫 </swiper-slide>
          <swiper-slide> 快來喵喵 喵喵喵 喵電感應 </swiper-slide>
          <swiper-slide> 不管相隔多遠都能互相連繫 </swiper-slide>
          <swiper-slide> 感覺到我跟你同時觸電反應</swiper-slide>
          <swiper-slide> 快來喵喵 喵喵喵 喵電感應 </swiper-slide>
          <swiper-slide> 不管相隔多遠都能互相連繫 </swiper-slide>
        </Swiper>
        <div class="hidden sm:block p-3 text-center border-l-4 border-indigo-500">
          <ul class="flex justify-between text-lg">
            <li class="px-2">
              <h4>100<br />Days</h4>
            </li>
            <li class="px-2">
              <h4>16<br />Hours</h4>
            </li>
            <li class="px-2">
              <h4>13<br />Mins</h4>
            </li>
            <li class="px-2">
              <h4>25<br />Sec</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container py-11">
      <h2 class="text-5xl text-white text-center font-bold">喵咪政見</h2>
      <p class="text-center text-gray-400 text-lg pt-3">
        讓我們一起為這個貓咪友好的未來努力，為每一隻貓咪的幸福而奮鬥。<br />投票給威爾喵，讓我們的未來變得更有毛！
      </p>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-6 mt-5">
        <li class="md:px-8 md:py-6 rounded-3xl bg-slate-800">
          <div class="flex flex-col justify-between items-center">
            <img src="../assets/images/lawIcon.svg" alt="lawIcon" />
            <h4 class="text-center text-white font-bold text-2xl py-2">喵咪法條</h4>
            <p class="text-center text-gray-400 text-lg py-2">
              嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益，確保他們不再受到不負責任的對待。
            </p>
          </div>
        </li>
        <li class="md:px-8 md:py-6 rounded-3xl bg-slate-800">
          <div class="flex flex-col justify-between items-center">
            <img src="../assets/images/healthIcon.svg" alt="healthIcon" />
            <h4 class="text-center text-white font-bold text-2xl py-2">喵咪健保制度</h4>
            <p class="text-center text-gray-400 text-lg py-2">
              建立一個喵咪健保制度，確保每隻貓在生病時都能獲得優質的醫療照顧，無論是貓草還是貓醫院。
            </p>
          </div>
        </li>
        <li class="md:px-8 md:py-6 rounded-3xl bg-slate-800">
          <div class="flex flex-col justify-between items-center">
            <img src="../assets/images/infoCenterIcon.svg" alt="infoCenterIcon" />
            <h4 class="text-center text-white font-bold text-2xl py-2">貓奴案內所</h4>
            <p class="text-center text-gray-400 text-lg py-2">
              建立貓奴案內所，專門媒合貓奴與貓咪，讓每隻貓都能找到不分晝夜任勞任怨好使喚的貓僕人。
            </p>
          </div>
        </li>
        <li class="md:px-8 md:py-6 rounded-3xl bg-slate-800">
          <div class="flex flex-col justify-between items-center">
            <img src="../assets/images/careHouseIcon.svg" alt="careHouseIcon" />
            <h4 class="text-center text-white font-bold text-2xl py-2">喵咪集會所</h4>
            <p class="text-center text-gray-400 text-lg py-2">
              我們將建立貓咪集會所，提供無家可歸的貓咪一個避風港，不再讓我們的同伴風吹雨淋，再也不必流浪街頭。
            </p>
          </div>
        </li>
      </ul>
    </section>
    <section class="container py-20">
      <div
        class="border border-slate-700 rounded-2xl py-[5rem] p-8 flex justify-center bg-[url('../assets/images/background.svg')] bg-cover bg-no-repeat bg-center"
      >
        <div class="flex flex-col-reverse items-center lg:flex-row">
          <div class="flex flex-col justify-center md:w-[424px]">
            <h2 class="text-white font-bold text-3xl text-center py-5">威爾喵政見發表會</h2>
            <p class="text-gray-400 text-lg">
              威爾喵是一名充滿活力、具有政治經驗的候選人，致力於改變社會，並為人民提供更好的生活。政策目標旨在實現更公平、更繁榮、更可持續的社會和經濟。
            </p>
            <a href="#" class="text-2xl text-purple-500 pt-5 font-bold"><span>閱讀更多</span></a>
          </div>
          <img
            src="../assets/images/catConference.svg"
            alt="catConference"
            class="border border-slate-700 rounded-2xl"
          />
        </div>
      </div>
    </section>
    <section class="container py-20">
      <h2 class="text-5xl text-white text-center font-bold mb-10">最新消息</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4">
        <li class="border border-slate-600 rounded-2xl flex flex-col relative">
          <img src="../assets/images/catNews1.svg" alt="catNews1" class="rounded-t-[1rem]" />
          <div class="p-4">
            <h4 class="text-white font-bold text-2xl">
              貓黨30週年紀念活動，邀請您一起Chill out 吸貓草
            </h4>
            <p class="whitespace-nowrap text-ellipsis overflow-hidden text-gray-500">
              嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益
            </p>
            <a
              href="#"
              class="block py-10 text-2xl text-purple-500 font-bold stretched-link hover:text-purple-400"
              ><span> 閱讀更多 </span></a
            >
          </div>
        </li>
        <li class="border border-slate-600 rounded-2xl flex flex-col">
          <img src="../assets/images/catNews1.svg" alt="catNews1" class="rounded-t-[1rem]" />
          <div class="p-4">
            <h4 class="text-white font-bold text-2xl">
              貓黨30週年紀念活動，邀請您一起Chill out 吸貓草
            </h4>
            <p class="whitespace-nowrap text-ellipsis overflow-hidden text-gray-500">
              嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益
            </p>
            <a href="#" class="block py-10 text-2xl text-purple-500 font-bold"
              ><span> 閱讀更多 </span></a
            >
          </div>
        </li>
        <li class="border border-slate-600 rounded-2xl flex flex-col">
          <img src="../assets/images/catNews1.svg" alt="catNews1" class="rounded-t-[1rem]" />
          <div class="p-4">
            <h4 class="text-white font-bold text-2xl">
              貓黨30週年紀念活動，邀請您一起Chill out 吸貓草
            </h4>
            <p class="whitespace-nowrap text-ellipsis overflow-hidden text-gray-500">
              嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益
            </p>
            <a href="#" class="block py-10 text-2xl text-purple-500 font-bold"
              ><span> 閱讀更多 </span></a
            >
          </div>
        </li>
        <li class="border border-slate-600 rounded-2xl flex flex-col">
          <img src="../assets/images/catNews1.svg" alt="catNews1" class="rounded-t-[1rem]" />
          <div class="p-4">
            <h4 class="text-white font-bold text-2xl">
              貓黨30週年紀念活動，邀請您一起Chill out 吸貓草
            </h4>
            <p class="whitespace-nowrap text-ellipsis overflow-hidden text-gray-500">
              嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益
            </p>
            <a href="#" class="block py-10 text-2xl text-purple-500 font-bold"
              ><span> 閱讀更多 </span></a
            >
          </div>
        </li>
      </ul>
    </section>
    <section class="container py-20">
      <div
        class="border border-gray-400 bg-slate-800 rounded-2xl flex justify-center items-center py-36"
      >
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-white text-3xl font-bold text-center">抖內罐罐</h2>
          <p class="text-center text-gray-500 py-3">
            您的每一筆抖內都將讓一隻貓咪過上更好的生活。<br />點擊下方抖內按鈕，讓我們的貓咪生活更美好！
          </p>
          <button type="button" class="btn bg-purple-600 text-white w-auto">立即抖內</button>
        </div>
      </div>
    </section>
    <section class="container mx-auto py-20">
      <h2 class="text-white text-3xl font-bold text-center">您的聲音，我們的行動！</h2>
      <p class="text-center text-gray-500">
        親愛的朋友們，每一位喵民的意見都是我們前進的原動力。<br />無論大小事，我都誠摯希望聽到您的建議。
        分享您的想法，一同為我們的未來打造更美好！
      </p>
      <form class="w-full py-5 md:px-20">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="useremail"
            >
              電子郵件
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="useremail"
              type="email"
              placeholder="請輸入電子郵件"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="username"
            >
              您的姓名
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="username"
              type="text"
              placeholder="請輸入您的姓名"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="content"
            >
              您的建言
            </label>
            <textarea
              name=""
              id="content"
              cols="30"
              rows="10"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="請輸入內容"
            ></textarea>
          </div>
        </div>
        <div class="flex justify-end">
          <button type="button" class="btn bg-purple-600 text-white w-auto">確定送出</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
</script>

<style scoped>
.swiper-wrapper {
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
.swiper-slide {
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 700;
  letter-spacing: 3.2px;
  width: auto;
}
</style>
