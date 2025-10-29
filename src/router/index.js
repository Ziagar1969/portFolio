import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Accueil.vue"
import Contact from "../views/Contact.vue"
import NotFoundPage from "../components/NotFoundPage.vue"
import MeteoWidget from "../components/MeteoWidget.vue"
import Nouvelle from "../views/Nouvelle.vue"






const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
  {path: "/", name: "Accueil", component: HomeView},
  {path: "/Nouvelle", name: "Nouvelle", component: Nouvelle},
  {path: "/Contact", name: "Contact", component: Contact},
  {path: "/MeteoWidget", name: "MeteoWidget", component: MeteoWidget},
  {path: "/:pathMatch(.*)*", name: "NotFoundPage", component: NotFoundPage},
 ]
})


export default router
