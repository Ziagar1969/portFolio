


<script setup>
import NNavigationBar from "../components/NavigationBar.vue"
</script>

<template>
  <NNavigationBar/>
	<div class="about">
	
      <h2>Réalisations</h2>
<section id="realisations">
        <p>Vous trouverez ici mes premières réalisations de développeur Web
            <ul>
        <li>CV en ligne</li>
        <li>Cahier des charges</li>
        <li>Espace de commentaires en ligne</li>
        <li>Appli Météo</li>
        <li></li>
    </ul>
</p>
    </section>
	</div>
</template>

<!-- <script>
export default {
  name: "Realisations",
};
</script> -->
<style scoped>
ul {
    padding: 10px;
    margin: 10 px;
    color:bisque;
    list-style-type: none;
    background-color: rgb(104, 29, 86);
   
       }
  li{
    
     display: inline-flex ;
     flex-wrap: nowrap;
     padding: 5px;
     margin: 0 px;
     width:600px;
     height: 120 px;
     border : 2px solid rgb(13, 168, 13);
     text-align: center;
     line-height: 40 px;
   }
        
   li :hover {
     background-color: blueviolet;
   }
</style>