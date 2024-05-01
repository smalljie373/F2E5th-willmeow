<template>
  <main class="container" v-if="screenType">
    <section class="flex justify-center mb-6 md:mb-0">
      <div
        class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2 bg-[url('../assets/images/background.svg')] bg-cover bg-no-repeat bg-center"
      >
        <img src="../assets/images/catMain.svg" alt="catMain" />
        <div class="flex flex-col justify-center">
          <h4 class="text-white text-xl mb-3">立委候選人</h4>
          <h2 class="text-white text-5xl font-bold pb-10">威爾喵</h2>
          <p class="text-white text-2xl">學歷</p>
          <ul class="text-white text-xl list-disc mt-3">
            <li class="mx-10">國立喵喵大學法律系學士</li>
            <li class="mx-10">國立喵喵大學法律系碩士</li>
          </ul>
          <p class="text-white mt-3 text-2xl">經歷</p>
          <ul class="text-white text-xl list-disc">
            <li class="mx-10">喵喵法律事務所律師</li>
            <li class="mx-10">喵喵大學法律學分班講師</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { overallDataStore } from '@/stores/overallDataStore'
import { storeToRefs } from 'pinia'
const overallData = overallDataStore()
const { screenType } = storeToRefs(overallData)
</script>
