<template>
   <!-- <button class="modal-btn modal-trigger" @click="isOpen = !isOpen;">
            {{ isOpen ? "Close" : "Open" }} Modal
    </button> -->
    <section>
 
   <transition name="modal">
     <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <span class="modal-close" @click="closeModal">&times;</span>
          <!-- <slot></slot> -->
          <div class="modal-content" id="modal1">
             <h1>CV online </h1>
            <p>CV conçu en HTML et CSS, selon les normes W3C</p>
          </div>
        </div>
      </div>
    </transition>
    

 
    <transition name="modal">
     <div v-if="isOpen" class="modal">
        <div class="overlay" @click.self="isOpen = false">
          <span class="modal-close" @click="closeModal">&times;</span>
          <slot></slot>
          <div class="modal-content" id="modal2">
            <h1>Cahier des Charges</h1>
            <p>Document incontournable pour bien échafauder un projet en tenant comte des besoins du client, de ses objectifs et de ceux de l'entreprise,des contraintes techniques, des fonctionnalités que l'on désire implémenter</p>
          </div>
        </div>
      </div>
    </transition>

  <transition name="modal">
     <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false">
          <div class="modal-content" id="modal3">
            <span class="modal-close" @click="closeModal">&times;</span>
            <slot></slot>
            <h1>Espace de commentaires en ligne</h1>
            <p>Création d'une page de commentaires en ligne, permettant d'ajouter un commentaire à la liste de commentaires existants. Les champs d'input se vident après l'ajout du commentaire.</p>
          </div>
        </div>
      </div>
    </transition>
  

 
     
          
                 
        
       
    
  </section>

  
  <!-- </div> -->
</template>
 
<script>



export default {
  data() {
    return {
      isOpen: false,
      };
    },
      methods: {
        openModal() {
          this.isOpen = true;
        },
        closeModal() {
          this.isOpen = false;
        },
      },
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
.modal-content {
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  width: 50%;
  padding: 80px;
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
  background: #292424 0,5;
  z-index: 1000;
  transition: opacity 0.2s ease;
}
</style>