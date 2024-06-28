

<template>
  <h1>{{ titre }}</h1>

  <main>

  <section>
    <h2>Accueil</h2>
    <p>Salut, moi, c'est Patrizia, je n'aurais jamais imaginé créer un site, ni coder quoi que ce soit</p>
    <img src="../assets/img/papillon.png" name="papillon" alt="Bientôt ma photo de profil" width="40%"/>
  </section>

</main>


</template>



<style scoped>

section {
display: flex;
flex-direction:row;
background-color: rgba(111, 165, 24, 0.829);
color: white;
flex-wrap: nowrap;
width:auto;
padding: 10 px;
min-height:500px;
border:1px solid #b1d4c3;
padding: 15px;
}

section p {
  padding-left: 10px;
  padding-top: 50px;
  padding-right: 10px;
}

</style>


<script>
export default {
name: "HomeView",

};
</script>




