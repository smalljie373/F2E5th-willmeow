import { ref } from 'vue'
import { defineStore } from 'pinia'

export const overallDataStore = defineStore('overalldata', () => {
  const donateData = ref([
    {
      id: '-a9Bc5D8e2FhJ',
      title: '新手貓奴',
      content: '展開氣勢，壯大團隊自信態度',
      price: '300'
    },
    {
      id: '-6GkP3i4Q7rSt',
      title: '吸貓成癮者',
      content: '展開氣勢，壯大團隊自信態度',
      price: '1,000'
    },
    {
      id: '-Lm5No9pRt2Uv',
      title: '貓黨信徒',
      content: '展開氣勢，壯大團隊自信態度',
      price: '5,000'
    },
    {
      id: '-3WxY6z8AbCdE',
      title: '鏟屎達人',
      content: '展開氣勢，壯大團隊自信態度',
      price: '10,000'
    },
    {
      id: '-7FgH4IjKl1Mn',
      title: '肉球按摩師',
      content: '展開氣勢，壯大團隊自信態度',
      price: '30,000'
    },
    {
      id: '-o2Pq4R6s9TtV',
      title: '一生為貓奉獻者',
      content: '展開氣勢，壯大團隊自信態度',
      price: '50,000'
    }
  ])
  return { donateData }
})
