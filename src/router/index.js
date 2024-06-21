import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/Realisations.vue"
import ContactView from "@/views/ContactView.vue"


// const Realisations = { template: '<div>Realisations</div>' }
const HomeView= { template: '<div>HomeView</div>' } //pourquoi je n'ai pas ça ?



const routes = [
    { path: '/', component: HomeView }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
        {path: "/", name: "HomeView", component: HomeView},
        {path: "/about", name: "Realisations", component: AboutView},
        {path: "/contact", name: "ContactView", component: ContactView} 

  ]
})

export default router
