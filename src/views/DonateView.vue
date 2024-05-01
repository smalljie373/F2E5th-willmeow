<template>
  <main class="container mx-auto">
    <h2 class="md:text-center text-white text-4xl font-bold py-5">愛心斗內，拯救貓咪！</h2>
    <p class="md:text-center text-gray-400 text-xl">您的每一筆抖內都將讓一隻貓咪過上更好的生活。</p>
    <p class="md:text-center text-gray-400 text-xl">
      讓我們一起為這個貓咪友好的未來努力，為每一隻貓咪的幸福而奮鬥。
    </p>
    <section class="px-5 py-10">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <li v-for="item in donateData" :key="item.id" class="relative">
          <button
            type="button"
            class="donateBtn border py-2 px-3 w-full rounded-xl hover:opacity-70 stretched-link"
            @click.prevent="createData(item.id)"
            :class="{ 'bg-gray-800': item.id === status.loadingItem }"
          >
            <h6 class="text-white font-bold text-start">{{ item.title }}</h6>
            <p class="mb-1 text-purple-600 text-start">{{ item.content }}</p>
            <p class="text-white text-start">NT$ {{ item.price }}</p>
          </button>
        </li>
      </ul>
      <div class="border p-3">
        <h5 class="text-white font-bold text-xl py-3">自訂金額</h5>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            class="appearance-none block w-full bg-transparent text-white border rounded py-3 px-4 leading-tight focus:outline-none"
            id="price"
            type="number"
            placeholder="NT$ 請自行輸入金額"
          />
          <button type="button" class="btn bg-purple-600 text-white w-auto py-0">確定送出</button>
        </div>
      </div>
    </section>
    <p class="md:text-center text-xl text-gray-500">＊一顆罐罐等值為 NT$ 1</p>
  </main>
</template>

<script setup>
import { overallDataStore } from '@/stores/overallDataStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const overallData = overallDataStore()
const { donateData } = storeToRefs(overallData)

const status = ref({
  loadingItem: ''
})

const createData = (id) => {
  status.value.loadingItem = id
}
</script>
