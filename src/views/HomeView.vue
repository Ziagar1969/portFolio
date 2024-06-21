
<template>

  <p>Salut, moi, c'est Patrizia, je n'aurais jamais imaginé créer un site, ni coder quoi que ce soit</p>.

  <section><h1>Accueil</h1></section>
  <section><h1>Réalisations</h1></section>
  <section>Contact</section>
  

</template>


<style scoped>

section {
display: flex;
flex-direction:row;
flex-wrap: nowrap;
width:auto;
padding: 10 vh;
min-height:70vh;
border:1px solid #000;
}
</style>


<script>
export default {
name: "HomeView",
};
</script>





<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->
