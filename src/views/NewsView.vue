<template>
  <main class="container mx-auto">
    <h2 class="text-white text-center font-bold text-4xl mb-2">最新消息</h2>
    <p class="text-gray-500 text-center text-xl mb-2">威爾喵立委：最新政治動態與未來展望</p>
    <p class="text-gray-500 text-center text-xl">解析最新政治走向：威爾喵立委的角色與策略</p>
    <section class="py-10">
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4">
        <li
          class="border border-slate-600 rounded-2xl flex flex-col relative"
          v-for="item in newsData"
          :key="item.id"
        >
          <img :src="item.imgUrl" alt="catNews1" class="rounded-t-[1rem]" />
          <div class="p-4">
            <h4 class="text-white font-bold text-2xl">
              {{ item.title }}
            </h4>
            <p class="whitespace-nowrap text-ellipsis overflow-hidden text-gray-500">
              {{ item.content }}
            </p>
            <a
              href="#"
              class="block py-10 text-2xl text-purple-500 font-bold stretched-link hover:text-purple-400"
              ><span> 閱讀更多 </span></a
            >
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { overallDataStore } from '@/stores/overallDataStore'
import { storeToRefs } from 'pinia'
const overallData = overallDataStore()
const { newsData } = storeToRefs(overallData)
</script>
