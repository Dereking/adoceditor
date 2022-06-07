import { createApp } from 'vue'
import App from './App.vue'
import adoceditor from './components'


const app = createApp(App)
app.use(adoceditor)
app.mount('#app')