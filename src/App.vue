<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/Realisations.vue";
import ContactView from "./views/ContactView.vue";
</script>

<template>
  <header>

      <nav>
      <ul> 
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/Realisations">Réalisations</router-link></li>
        <li><router-link to="/ContactView">Contact</router-link></li>
      </ul>
      </nav>

  </header>

  <RouterView />
</template>

<style scoped>
nav ul {
  padding: 0px;
  margin: 0 px;
  color:bisque;
  list-style-type: none;
   background-color: rgb(58, 2, 45);
 
   flex-direction: column;
 }
 nav li{
  
   display: inline-flex ;
   padding: 0px;
   margin: 0 px;
   width:200px;
   height: 120 px;
   border : 2px solid rgb(13, 168, 13);
   text-align: center;
   line-height: 40 px;
 }
      
 nav li :hover {
   background-color: blueviolet;
 }
 

</style>
