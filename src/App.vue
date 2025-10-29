<script setup>

import HeaderMain from './components/HeaderMain.vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterMain from "./components/FooterMain.vue";
import Modale2 from "./components/Modale2.vue";
// import Contact from "./views/Contact.vue";


</script>


<template>
  <div id="app">
 
  <NavigationBar/>
  <HeaderMain/>

  <main>


    <router-view></router-view>  
  
  <Modale2></Modale2>


    
   </main>
 
  <FooterMain></FooterMain>
</div>
</template>

<style>

#app {
max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  background-color: rgb(221, 107, 14, 0.4);
  cursor: default;

} 



</style>


 
