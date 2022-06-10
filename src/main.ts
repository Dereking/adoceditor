import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import adoceditor from './components'




const app = createApp(App)


app.use(adoceditor)


app.use(ElementPlus)


app.mount('#app')