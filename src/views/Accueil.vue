<script setup>
import FooterMain from '@/components/FooterMain.vue';
</script>

<template>

  <main>

  <section>
    <h2>Accueil</h2>
    <p>Salut, moi, c'est Patrizia, je n'aurais jamais imaginé créer un site, ni coder quoi que ce soit</p>
  </section>
   
</main>
<FooterMain/>

</template>


<style scoped>

section {
display: flex;
flex-direction:column;
flex-wrap: nowrap;
width:auto;
padding: 10 vh;
min-height:70vh;
border:1px solid #b1d4c3;
padding: 15px;
}
</style>


<script>
export default {
name: "HomeView",
};
</script>




