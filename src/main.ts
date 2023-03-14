import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import index from './router'
import '@/styles/index.scss'
import 'virtual:windi.css'

const app = createApp(App)

app.use(createPinia())
app.use(index)

app.mount('#app')
