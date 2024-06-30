<script setup>
import { RouterLink, RouterView} from "vue-router";
import HeaderMain from './components/HeaderMain.vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterMain from "./components/FooterMain.vue";

</script>


<template>
  <div id="app"></div>

 
  <NavigationBar/>
  <HeaderMain/>

  <main>

    <router-view></router-view>  
    <Modal/>
    
   </main>
 
  <FooterMain></FooterMain>

</template>

<style>

#app {
  width: 100%;
  display:flex;
  flex-direction:column;
  background-color: rgba(77, 122, 4, 0.829);
} 
</style>
<script>

</script>

 
