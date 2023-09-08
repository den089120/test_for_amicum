import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from '@/lib/i18n'
import router from "@/router";
import {pinia} from "@/store";
import './styles/index.scss'

createApp(App).use(router).use(pinia).use(i18n).mount('#app')
