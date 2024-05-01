<template>
  <div
    class="h-screen text-white fixed w-full z-[9999] bg-black flex justify-center items-center"
    ref="box"
  >
    <div class="lottieContainer w-[250px] opacity-0" ref="lottieContainer"></div>
  </div>
  <div class="h-screen fixed w-0 z-[9999] bg-lime-600" ref="screen2"></div>
  <div class="h-screen fixed w-0 z-[9999] bg-teal-600" ref="screen3"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import lottie from 'lottie-web'
import { overallDataStore } from '@/stores/overallDataStore'
import { storeToRefs } from 'pinia'
const overallData = overallDataStore()
const { isLoading } = storeToRefs(overallData)

const box = ref(null)
const lottieContainer = ref(null)
const screen2 = ref(null)
const screen3 = ref(null)
let animat

watch(isLoading, () => {
  animat.restart()
})

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../src/assets/AnimationCat.json'
  })
  animat = gsap.timeline({ paused: true })
  animat
    .to(lottieContainer.value, {
      opacity: 1,
      duration: 0.5
    })
    .to(screen2.value, {
      width: '100%',
      x: 0,
      delay: 2,
      duration: 0.2
    })
    .to(screen3.value, {
      width: '100%',
      x: 0,
      duration: 0.2
    })
    .to(box.value, {
      y: '-150%',
      opacity: 0,
      duration: 0.2
    })
    .to(screen2.value, {
      x: '150%',
      duration: 0.2,
      opacity: 0
    })
    .to(screen3.value, {
      x: '150%',
      duration: 0.2,
      opacity: 0
    })
    .to(screen2.value, {
      width: 0
    })
    .to(screen3.value, {
      width: 0
    })
  animat.play()
})
</script>
