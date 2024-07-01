<script>
import Modal from "../components/Modal.vue"


export default {
  name: "Réalisations",
  components: {
    Modal,
  },
  data() {
    return {
      modalTitle: " ",
    
    };
  },
  methods: {
    openModal(modalId) {
      switch (modalId) {

        case "modal1":
          this.modalTitle = "Curriculum Vitae - HTML et CSS";
          this.modalImage = "../assets/img/cvonline.png";
          break;
          
        case "modal2":
        this.modalTitle = "Cahier des charges";
        this.modalImage = "../assets/img/cdcharges.png";
        break;


        case "modal3":
        this.modalTitle = "Espace de commentaires en ligne";
        this.modalImage = "../assets/img/commentaires2.png";
        break

      }
   
          this.$refs [modalId].openModal();
      },
    },
  };
</script>



<template>

<div>
        <a href="https://www.udemy.com/" 
        target="_blank">
        <img src="../assets/img/formUdemy.jpg" 
        id="Udemy"  
        alt="visuelprojet" 
        title="Visiter le site">
        </a>

</div>

	
      <h2>Réalisations</h2>

  <div id="section"> <h4>Vous trouverez ici mes premières réalisations de développeur Web</h4></div>

  <main> 
   <article><h5>CV en ligne</h5>
     <img class="projet" 
     src="../assets/img/cvonline.png" 
     alt="visuelprojet" 
     @click="openModal('modal1')"/>
     <p><a href="../assets/downloads/cvonline.htm">Télécharger le projet</a></p>
  </article>

  <article><h5 id="modal2">Cahier des charges</h5>
    <img src="../assets/img/cdcharges.png" 
    alt="visuelprojet" 
    @click="openModal('modal2')"/>
    <p>Télécharger le projet</p>
 </article>

  <article><h5 id="modal3">Espace de commentaires en ligne</h5> 
    <img src="../assets/img/commentaires2.png" 
    alt="visuelprojet" 
    @click="openModal('modal3')"/>
    <p><a href="../assets/liens/PGComments.htm" target="_blank">Télécharger le projet </a></p>
  </article>

 
        

 

   <Modal ref="modal1">
        <h2>{{ modalTitle }}</h2>
        <a href="google.fr" target="_blank">
          <h5>
         <p class="download_github"><a href="../assets/liens/cvonline.htm"></a></p>
          </h5>
        </a>
   </Modal>
   <Modal ref="modal2">
        <h2>{{ modalTitle }}</h2>
        <a href="google.fr" target="_blank">
          <h5>
        <p><a href="../assets/downloads/corrigecahierdcharges.pdf">Télécharger le projet</a></p>
          </h5>
        </a>
   </Modal>

   <Modal ref="modal3">
        <h2>{{ modalTitle }}</h2>
        <a href="google.fr" target="_blank">
          <h5>
         <p class="download_github"><a href="../assets/liens/PGComments.htm">Télécharger le projet</a></p>
          </h5>
        </a>
   </Modal>

      
</main> 
</template>




<style scoped>
#section {
display: flex;
flex-direction: row;


background-color: rgb(32, 7, 56);
color: white;
justify-content: center;
align-items: center;

}

img {
 width: 350px;
  height:500px;
  border: solid 3px rgba(25, 29, 24, 0.829);
}

main {
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  flex-wrap: wrap;
align-content: flex-end;
}
h2, h5 {
  color:rgb(199, 209, 236);
}
#Udemy {
  display:flex;
 
  width:auto;
  height: 200px;
 }

 #Udemy:hover {
  height: 300px;
  margin:0;
position:sticky;

 }


</style>