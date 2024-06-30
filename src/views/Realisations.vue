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
        break;

        case "modal4":
        this.modalTitle = "Certificat Udemy JS";
        this.modalImage = "../assets/images/formUdemy.jpg";
        break;


      }
   
          this.$refs [modalId].openModal();
      },
    },
  };
</script>



<template>

	
      <h2>Réalisations</h2>

  <div id="section"> <h4>Vous trouverez ici mes premières réalisations de développeur Web</h4></div>

  <main> 
  <article><h5 id="modal1">CV en ligne</h5>
     <img class="projet" src="../assets/img/cvonline.png" alt="visuelprojet" @click="openModal('modal1')"/>
       <Modal ref="modal1">
          <h2 id= {{ modalTitle }}>CV en ligne</h2>
      <a href="google.fr" target="_blank">
  <p>Télécharger le projet</p>
    </a>
      </Modal>
            </article>

  <article><h5 id="modal2">Cahier des charges</h5>
    <img src="../assets/img/cdcharges.png" alt="visuelprojet" @click="openModal('modal2')"/>
         <Modal ref="modal2">
     <h2>{{ modalTitle }}</h2>
<a href="../assets/downloads/corrigecahierdcharges.pdf"   target="_blank">
  <p>Télécharger le projet</p>
    </a>
        </Modal>

</article>

  <article><h5 id="modal3">Espace de commentaires en ligne</h5> 
    <img src="../assets/img/commentaires2.png" alt="visuelprojet" @click="openModal('modal3')"/>
         <Modal ref="modal3">
  <h2>{{ modalTitle }}</h2>
<a href="../assets/img/commentaires2.png" target="_blank">
     <p>Télécharger le projet</p>
       </a>
         </Modal>

  </article>

  <article><h5 id="modal4">Formation Udemy</h5>
      <img src="../assets/img/formUdemy.jpg" alt="visuelprojet" @click="openModal('modal4')"/>
           <Modal ref="modal4">
       <h2>{{ modalTitle }}</h2>
    <a href="../assets/img/formUdemy.jpg" target="_blank">
        <p>Formation Udemy JS</p>
          </a>
             </Modal>
       </article>

</main> 
</template>




<style scoped>
#section {
display: flex;
flex-direction: row;
flex-wrap: nowrap;
background-color: rgb(32, 7, 56);

color: white;
justify-content: center;
align-items: center;

}

img {
  width: 250px;
  border: solid 3px rgba(79, 167, 68, 0.829);

}

main {
  display:flex;
  flex-direction: row;
  justify-content:space-between;
}
h2, h5 {
  color:rgb(199, 209, 236);
}
</style>