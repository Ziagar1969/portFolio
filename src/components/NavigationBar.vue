
<template>
    <nav>
        <ul id="navul">
        <li class="menu"><router-link to="/">Accueil</router-link></li>
        <li class="menu"><router-link to="Nouvelle">Réalisations</router-link></li>
        <li class="menu"><router-link to="/Contact">Contact</router-link></li>
   
    </ul>  

 </nav>

</template>




<style>



nav {
  width:fit-content;
  position:fixed;
  top: 1.5rem;
  nav-right: 1.5rem;
}
#navul {
  display: flex;
  padding: 20px;

  list-style-type: none;
  flex-direction: column;
  justify-items:flex-end;

 }
 .menu {

   padding: 0px;
   margin: 0 px;


   border: none;



  
 }
      
 nav li :hover {
   background-color: blueviolet;
 }
 </style>

