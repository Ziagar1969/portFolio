import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Accueil.vue"
import Realisations from "../views/Realisations.vue"
import Contact from "../views/Contact.vue"
import TerrainVague from "../components/TerrainVague.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
        {path: "/", name: "HomeView", component: HomeView},
        {path: "/Realisations", name: "Realisations", component: Realisations},
        {path: "/Contact", name: "Contact", component: Contact},
        {path: "/:catchAll(.*)", name: "TerrainVague", component: "TerrainVague"}
  ]
})

export default router
