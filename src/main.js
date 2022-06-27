import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import { useREM } from './utils/flexible'
import mLibs from './libs'
useREM()

// 注册Svg-icons
import 'virtual:svg-icons-register'

createApp(App).use(router).use(mLibs).mount('#app')
