import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 中文化的支持
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 样式
import './assets/css/index.scss'

const app = createApp(App)

app.use(createPinia()).use(router).use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
