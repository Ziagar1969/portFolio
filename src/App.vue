<script setup>
import { RouterLink, RouterView} from "vue-router";
import HeaderMain from './components/HeaderMain.vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterMain from "./components/FooterMain.vue";
</script>


<template>
  <div id="app"></div>


  <h1>ZiagarCode</h1>

    

  <main>
    <router-view></router-view>
  </main>
 
  <FooterMain></FooterMain>

</template>

<style>

</style>

 
