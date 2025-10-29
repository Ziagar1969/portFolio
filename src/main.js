import "./assets/CSS/main.css"
import "./assets/CSS/mobile.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import NavigationBar from "./components/NavigationBar.vue"
import HeaderMain from "./components/HeaderMain.vue"
import FooterMain from "./components/FooterMain.vue"
import Modale2 from "./components/Modale2.vue"
import ContactForm from "./components/ContactForm.vue"




const app = createApp(App)
app.use(router)

app.component("ContactForm", ContactForm);
app.component('HeaderMain', HeaderMain); 
app.component('NavigationBar', NavigationBar); 
app.component('FooterMain', FooterMain);
app.component("Modale2", Modale2);


app.mount("#app")
