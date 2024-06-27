
<template>
    <nav>
        <ul id="navul">
        <li class="menu"><router-link to="/">Accueil</router-link></li>
        <li class="menu"><router-link to="/Realisations">Réalisations</router-link></li>
        <li class="menu"><router-link to="/Contact">Contact</router-link></li>
    </ul>  

 </nav>

</template>


<script>


</script>


<style scoped>
nav {
  height: 160px;
}


#navul {

  padding: 10px;
  margin: 10 px;
  width:100%;
  list-style-type: none;
  background-color: black ;
  border : solid rgb(182, 221, 182) 1px;
  flex-direction: column;
  justify-items:flex-end;

 }
 .menu {
   color:bisque;
   display: inline-flex ;
   padding: 0px;
   margin: 0 px;
   width:200px;
   height: 120 px;
   border: none;

   text-align: center;

  
 }
      
 nav li :hover {
   background-color: blueviolet;
 }
 </style>

