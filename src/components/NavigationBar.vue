
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


<style>

</style>

