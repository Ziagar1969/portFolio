<template>   
    <form>
      <label></label>
      <input type="name" required v-model="name">
  
      <label>Email</label>
      <input type="email" required v-model="email">
      <label>Message</label>
      <textarea class=""></textarea>
  
    </form>
          <p>Nom</p>
          <p>Email</p>
          </template>
        
      
  
      <script>
      export default {
          name: "ContactView",
          data() {
              return {
                  Nom: " ",
                  Email: " ",
              }
          }
      }
  </script>
      