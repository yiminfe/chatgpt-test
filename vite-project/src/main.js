import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由
import ElementPlus from 'element-plus' // 引入 Element Plus 组件库
import 'element-plus/dist/index.css' // 引入 Element Plus 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
  .use(router) // 注册路由
  .use(ElementPlus) // 注册 Element Plus
  .mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
