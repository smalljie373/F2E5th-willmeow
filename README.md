# willme

威爾喵，為喵國的未來，先鋪路

此主題為The F2E 5th 前端 & UI 修煉精神時光屋，立委競選官網主題
[F2E](https://2023.thef2e.com/)

使用的[ul設計稿](https://2023.thef2e.com/users/12061579704041365831)

這次嘗試使用Tailwind CSS進行切版，與使用GSAP製作Loading動畫，雖然還不熟悉，不過這是個好的開始

## Project Packages 專案套件

- **Vue 3.0 + Vite**: Fast development setup with Vue 3 and Vite.
- **Vue Router**: Handle navigation in the application.
- **Pinia**: State management for the Vue application.
- **Tailwind CSS**: Responsive CSS framework for styling.
- **GSAP**: GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library used to create smooth, interactive, and high-performance animation effects. It is widely regarded as one of the best animation solutions for web and mobile app development.

## 資料夾配置

src/
|-- assets/
| |-- images/
| |-- scss/
|-- components/
|-- views/
|-- router/
|-- store/
|-- App.vue
|-- main.js

- **assets**: Store images and SCSS files.
- **components**: Small components (names should be in uppercase).
- **views**: Main pages (names should end with "View").
- **router**: Vue Router configuration.
- **store**: Pinia store for state management.
- **App.vue**: Entry component.
- **main.js**: Entry script.

## Getting Started 專案執行

1. Clone the repository:

   ```bash
   git clone https://github.com/ashkuan/GYMPlus.git
   ```

2. Install dependencies:

   ```bash
   git clone https://github.com/ashkuan/GYMPlus.git
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

## branch 命名

`feature/ 開發者 頁面`

## commit

`feat: 做了什麼事情`

👉 commit 類型：

- `feat` - 新增/修改功能
- `fix` - 修正
- `docs` - 修改/新增文件
- `style` - 修改程式碼格式或風格，不影響原有運作，例如 ESLin
- `refactor` - 重構 or 優化，不屬於 bug 也不屬於新增功能等
- `test` - 增加測試功能 (when adding missing tests)
- `chore` - 增加或修改第三方套件(輔助工具)等 (maintain)
