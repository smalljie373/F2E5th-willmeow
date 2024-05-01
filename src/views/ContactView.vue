<template>
  <main class="container mx-auto" v-if="screenType">
    <h2 class="md:text-center text-white font-bold text-4xl py-5">您的聲音，我們的行動！</h2>
    <p class="md:text-center text-gray-500 text-xl">
      親愛的朋友們，每一位喵民的意見都是我們前進的原動力。
    </p>
    <p class="md:text-center text-gray-500 text-xl">
      無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
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
            class="appearance-none block w-full bg-transparent text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
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
            class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            id="username"
            type="text"
            placeholder="請輸入您的姓名"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="content"
          >
            您的建言
          </label>
          <textarea
            name=""
            id="content"
            cols="30"
            rows="10"
            class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
            placeholder="請輸入內容"
          ></textarea>
        </div>
      </div>
      <div class="flex justify-end">
        <button type="button" class="btn bg-purple-600 text-white w-auto">確定送出</button>
      </div>
    </form>
  </main>
</template>

<script setup>
import { overallDataStore } from '@/stores/overallDataStore'
import { storeToRefs } from 'pinia'
const overallData = overallDataStore()
const { screenType } = storeToRefs(overallData)
</script>
