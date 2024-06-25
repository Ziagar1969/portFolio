<script setup>
import NavigationBar from "../components/NavigationBar.vue"
</script>


<template>  
<NavigationBar/>

    <form>
      <label>NOM</label>
      <input type="name" required v-model="name">
  
      <label>Email</label>
      <input type="email" required v-model="email">
      <label>Message</label>
      <textarea class=""></textarea>
  
    </form>
          <p>{{ name }}Nom</p>
          <p> {{ email }} Email</p>
          <p> {{ Message }}</p>
          </template>
        
      
  
      <script>
      export default {
          name: "ContactView",
          data() {
              return {
                  Nom: " ",
                  Email: " ",
                  Message: " "
              }
          }
      }
  </script>
      