

<template>
  <h1>{{ titre }}</h1>

  <main>

  <section>
    <h2>Accueil</h2>
    <p>Bonjour!
      Je m'appelle Patrizia, je n'aurais jamais imaginé créer un site, ni coder quoi que ce soit dans ma vie. Au départ, mon domaine de prédilection ce sont les langues étrangères, modernes ou anciennes. Ma langue maternelle étant l'Italien, j'ai d'abord appris le Français depuis le collège, puis l'Anglais (un peu à la sauvage, cette langue n'étant pas considérée comme indispensable à l'époque...) 
    L'univers du code m'attire depuis longtemps, peut-être parce qu'il s'agit, en fait, d'une autre 'langue étrangère'. Ce que j'aime dans cet univers, c'est qu'il oblige à regarder la réalité avec émerveillement: malgré tous les progrès, époustouflants, pour rendre le code plus simple, il faut des centaines de lignes pour rendre quelque chose, un message, une attitude, une action, que n'importe quel humain réalise sans réfléchir. 
  Mise à part cette raison bien philosophique, le code, avec toute sa complexité, peut rendre plus simple la vie de beaucoup de gens. Alors voilà : 
  je vais encore transpirer pour continuer à apprendre ces nouvelles langues que sont les languages informatiques, mais j'assume !</p>
    <img src="../assets/img/papillon.png" name="papillon" alt="Bientôt ma photo de profil" width="50%" height="50%"/>
  </section>

</main>


</template>



<style scoped>

section {
display: flex;
flex-direction:row;
background-color: rgba(111, 165, 24, 0.829);
color: white;
width:auto;
min-height:800px;
border:2px solid black;
padding: 15px;
}

section p {
  padding-left: 10px;
  padding-top: 50px;
  padding-right: 10px;
}

img {
  display:flex;
  align-self: flex-end;
}
p{
  text-align: justify;
  margin-right: 40px;
}


</style>


<script>
export default {
name: "HomeView",

};
</script>




