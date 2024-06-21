import './assets/main.css'
import "./assets/css/style.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import NavigationBar from "@/components/NavigationBar.vue"
import HeaderMain from "@/components/HeaderMain.vue"
import FooterMain from "@/components/FooterMain.vue"

import HomeView from "./views/HomeView"
import AboutView from "./views/AboutView"
import ContactView from "./views/ContactView"


<template>
    <div class="row justify-content-center">
        <HomeView/>
        <AboutView/>
        <ContactView/>
    </div>
    
</template>


const app = createApp(App)
app.use(router)


app.component('HeaderMain', HeaderMain); 
app.component('NavigationBar', NavigationBar); 
app.component('FooterMain', FooterMain);

app.mount("#app")
