import { ref, onMounted } from 'vue'
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
  const questionsAndanswers = ref([
    {
      id: '-w5080131z641480',
      title: '我想捐款支持你們的項目，該怎麼做？',
      content:
        '感謝您的支持！您可以透過我們網站上提供的捐款鏈接或捐款表格進行捐款。請填寫您希望捐款的金額和您的個人信息，然後選擇您偏好的支付方式進行捐款。'
    },
    {
      id: '-5aa013w16sc1480',
      title: '我捐款後何時能收到捐款收據？',
      content:
        '我們會在收到您的捐款後盡快發送捐款收據給您。通常情況下，您將在捐款後的一至兩個工作日內收到電子或紙質收據，收據上將包含您的捐款金額、捐款日期和我們的慈善機構信息。如果您在一定時間內未收到收據，請聯繫我們的客服部門協助處理。'
    }
  ])
  const newsData = ref([
    {
      id: '7Df9Gh3K2j1P6s8',
      title: '貓黨30週年紀念活動，邀請您一起Chill out 吸貓草',
      content: '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益',
      imgUrl: './src/assets/images/catNews1.svg'
    },
    {
      id: 'b5T9pL2oQ7i4F1',
      title: 'Meowcast： 威爾喵的政貓時刻',
      content: '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益',
      imgUrl: './src/assets/images/catNews2.svg'
    },
    {
      id: 'R3kP6lA2j9f7Ht',
      title: '「Lofi Cat」 24小時音樂直播上線',
      content: '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益',
      imgUrl: './src/assets/images/catNews3.svg'
    },
    {
      id: '5s8F2hG4rT1qP9',
      title: '貓黨30週年紀念活動，邀請您一起Chill out 吸貓草',
      content: '嚴禁貓奴才中途烙跑的喵咪法條，保護每一隻貓咪的權益',
      imgUrl: './src/assets/images/catNews4.svg'
    }
  ])
  const isLoading = ref(false)
  const screenType = ref(false)
  const loadingType = () => {
    screenType.value = false
    isLoading.value = !isLoading.value
    setTimeout(() => {
      screenType.value = true
    }, 2500)
  }
  onMounted(() => {
    loadingType()
  })
  return { donateData, questionsAndanswers, newsData, isLoading, loadingType, screenType }
})
