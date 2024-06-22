import "./assets/CSS/main.css"
import "./assets/CSS/style.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import NavigationBar from "../src/components/NavigationBar.vue"
import HeaderMain from "../src/components/HeaderMain.vue"
import FooterMain from "../src/components/FooterMain.vue"

import HomeView from "../src/views/HomeView.vue"
import AboutView from "./views/Realisations.vue"
import ContactView from "./views/Contact.vue"



const app = createApp(App)
app.use(router)


app.component('HeaderMain', HeaderMain); 
app.component('NavigationBar', NavigationBar); 
app.component('FooterMain', FooterMain);

app.mount("#app")
