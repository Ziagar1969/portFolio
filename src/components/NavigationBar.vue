
<template>
    <!-- <nav> -->
        <ul>
<li v-for="nav in navItems" :key="nav">
    {{ nav }}
</li>


        <!-- <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/Realisations">Réalisations</router-link></li>
        <li><router-link to="/ContactView">Contact</router-link></li> -->
    </ul>  

 <!-- </nav> -->

</template>
<script>
export default {
    data() {
        return {
            navItems: ["Accueil", "Realisations", "Contact"]
        }
    }
}
</script>


<style scoped>
nav ul {
  padding: 0px;
  margin: 0 px;
  color:bisque;
  list-style-type: none;
   background-color: rgb(58, 2, 45);
 
   flex-direction: column;
 }
 nav li{
  
   display: inline-flex ;
   padding: 0px;
   margin: 0 px;
   width:200px;
   height: 120 px;
   border : 2px solid rgb(13, 168, 13);
   text-align: center;
   line-height: 40 px;
 }
      
 nav li :hover {
   background-color: blueviolet;
 }

