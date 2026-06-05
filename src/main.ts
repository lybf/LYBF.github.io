import { createApp } from 'vue'
import App from './App.vue'

//router
import router from './route'

//i18n
import i18n from './local'

//hightlight.js
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common";
// import hljs from "highlight.js/lib/core";
import hljsVuePlugin from "@highlightjs/vue-plugin";


//mdui
import './style.css'
import "mdui/mdui.css"


const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(hljsVuePlugin)
app.mount('#app')
