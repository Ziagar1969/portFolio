

<template>


  <main>

  <section>
    <h2 id="accueil">Accueil</h2>
  <p id="title-text">Bonjour!
  Je m'appelle Patrizia, je n'aurais jamais imaginé créer un site, ni coder quoi que ce soit dans ma vie. Au départ, mon domaine de prédilection ce sont les langues étrangères, modernes ou anciennes. Ma langue maternelle étant l'Italien, j'ai d'abord appris le Français depuis le collège, puis l'Anglais (un peu à la sauvage, cette langue n'étant pas considérée comme indispensable à l'époque...) 
  L'univers du code m'attire depuis longtemps, peut-être parce qu'il s'agit, en fait, d'une autre 'langue étrangère'. Ce que j'aime dans cet univers, c'est qu'il oblige à regarder la réalité avec émerveillement: malgré tous les progrès, époustouflants, pour rendre le code plus simple, il faut des centaines de lignes pour rendre quelque chose, un message, une attitude, une action, que n'importe quel humain réalise sans réfléchir. 
  Mise à part cette raison bien philosophique, le code, avec toute sa complexité, peut rendre plus simple la vie de beaucoup de gens. Alors voilà : 
  je vais encore transpirer pour continuer à apprendre ces nouvelles langues que sont les languages informatiques, mais j'assume !</p>


    


  </section>

</main>


</template>



<style scoped>


section {
  display:grid;
  grid-template-columns: 1fr 1fr;
/* display: flex;
flex-direction:row; */
color: white;
/* width:auto;
min-height:800px; */
border:2px solid black;
padding: 15px;
}

#title-text {

  padding-top: 50px;
  padding-right: 10px;
}


p{
  text-align: justify;
  margin-right: 40px;
}


</style>


<script>

export default {
name: "Accueil",

};
</script>




