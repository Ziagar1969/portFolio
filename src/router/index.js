import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Realisations from "../views/Realisations.vue"
import Contact from "../views/Contact.vue"


// const Realisations = { template: '<div>Realisations</div>' }
// const HomeView= { template: '<div>HomeView</div>' } //pourquoi je n'ai pas ça ?



// const routes = [
//     { path: '/', component: HomeView }
// ];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
        {path: "/", name: "HomeView", component: HomeView},
        {path: "/Realisations", name: "Realisations", component: Realisations},
        {path: "/Contact", name: "Contact", component: Contact} 

  ]
})

export default router
