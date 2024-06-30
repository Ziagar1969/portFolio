<template>
 
 
   <transition name="modal">
     <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <div class="modal" id="modal1">
            <h1>CV online </h1>
            <p>CV conçu en HTML et CSS, selon les normes W3C</p>
          </div>
        </div>
      </div>
    </transition>
 
    <transition name="modal">
     <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <div class="modal" id="modal2">
            <h1>Cahier des Charges</h1>
            <p>Document incontournable pour bien échafauder un projet en tenant comte des besoins du client, de ses objectifs et de ceux de l'entreprise,des contraintes techniques, des fonctionnalités que l'on désire implémenter</p>
          </div>
        </div>
      </div>
    </transition>

  <transition name="modal">
     <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <div class="modal" id="modal3">
            <h1>Espace de commentaires en ligne</h1>
            <p>Création d'une page de commentaires en ligne, permettant d'ajouter un commentaire à la liste de commentaires existants. Les champs d'input se vident après l'ajout du commentaire.</p>
          </div>
        </div>
      </div>
    </transition>
  

  <transition name="modal">
     <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <div class="modal" id="modal4">
            <h1>Udemy</h1>
            <p>Formation complète JavaScript</p>
          </div>
        </div>
      </div>
    </transition>
  <button name="modalId" @click="isOpen = !isOpen;">
            {{ isOpen ? "Close" : "Open" }} Modal
    </button>



   



  
  <!-- </div> -->
</template>
 
<script>
export default {
  data() {
    return {
      isOpen: false,
     
    };
  }
};
</script>
 
<style scoped>
.modal {
  font-family: Helvetica, Arial, sans-serif;
  width: 600px;
  margin: 0px auto;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0 3px 9px 4px;
  transition: all 0.2s ease-in;
 
}
.fadeIn-enter {
  opacity: 0;
}
 
.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}
 
.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
 
button {
  padding: 8px;
  margin-top: 11px;
  background-color: green;
  color: white;
  font-size: 1.2rem;
}
 
.overlay {
  position: fixed;
    left: 0;
top: 0;
 
  display: flex;
 align-items: center;
  justify-content: center;
    width: 100%;
  height: 100%;
  background: #000000;
  z-index: 1000;
  transition: opacity 0.2s ease;
}
</style>