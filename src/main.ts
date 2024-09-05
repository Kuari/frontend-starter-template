import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import index from './router'
import '@/style.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(index)

app.mount('#app')
