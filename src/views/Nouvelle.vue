<template>
  <div>
    <h3>Vous trouverez ici mes premières réalisations de développeur Web</h3>
    <div class="projets">
      <article class="cvonline" @click="openModal('contenu1')">
        <h5>CV online</h5>
        <img src="../assets/img/cvonline.png" alt="CV online">
      </article>
      <article class="cahierdc" @click="openModal('contenu2')">
        <h5>Cahier des Charges</h5>
        <img src="../assets/img/cdc.png" alt="Cahier des Charges">
      </article>
      <article class="espcom" @click="openModal('contenu3')">
        <h5>Espace de commentaires</h5>
        <img src="../assets/img/commentaires2.png" alt="Espace de commentaires">
      </article>
    </div>
    <MeteoWidget />
    <!-- Modales inchangées -->
    <Modale2 ref="contenu1">
      <h2>{{ modalTitle }}</h2>
      <p>{{ modalTexte }}</p>
      <a href="https://github.com/Ziagar1969/cvonline" target="_blank">
        Télécharger le projet
      </a>
    </Modale2>
    <Modale2 ref="contenu2">
      <h2>{{ modalTitle }}</h2>
      <p>{{ modalTexte }}</p>
      <a href="../assets/downloads/corrigecahierdcharges.pdf">
        Télécharger le projet
      </a>
    </Modale2>
    <Modale2 ref="contenu3">
      <h2>{{ modalTitle }}</h2>
      <p>{{ modalTexte }}</p>
      <a href="https://github.com/Ziagar1969/PGComments" target="_blank">
        Télécharger le projet
      </a>
    </Modale2>
  </div>
</template>


<script>

import Modale2 from "../components/Modale2.vue"
import MeteoWidget from "../components/MeteoWidget.vue"
export default {
    name: "Nouvelle",

    components: {
        Modale2,
        MeteoWidget

    },

    data() {
        return {
            modalTitle: "",
            modalTexte: ""

        };
    },
    methods: {

        openModal(ModalId) {
            switch (ModalId) {
                case "contenu1":
                    this.modalTitle = "CV online";
                    this.modalTexte = "CV conçu en HTML et CSS, selon les normes W3C"
                    break;
                case "contenu2":
                    this.modalTitle = "Cahier des Charges";
                    this.modalTexte = "Document incontournable pour bien échafauder un article en tenant comte des besoins du client, de ses objectifs et de ceux de l'entreprise,des contraintes techniques, des fonctionnalités que l'on désire implémenter";
                    break;
                case "contenu3":
                    this.modalTitle = "Espace de commentaires en ligne";
                    this.modalTexte = "Création d'une page de commentaires en ligne, permettant d'ajouter un commentaire à la liste de commentaires existants. Les champs d'input se vident après l'ajout du commentaire.";
                    break;
            }
            this.$refs[ModalId].openModal();
        },
    },
};

</script>


<style scoped>
article {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: auto;
    flex-shrink: 2%;

}

article:hover {
    box-shadow: 0px 0px 15px 2px rgb(0 0 3 / 0.6);
}

article img {
    width: 100%;
}


.projets {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "cvonline cahierdc espcom";
    grid-gap: 2em;

}

.cvonline {
    grid-area: cvonline;
    display: flex;
    flex-direction: column;
}

.cahierdc {
    grid-area: cahierdc;
    display: flex;
    flex-direction: column;
}

.espcom {
    grid-area: espcom;
    display: flex;
    flex-direction: column;
}


h3 {
    color: greenyellow;
    font-style: italic;
    width: fit-content;
    padding-bottom: 10px;
}


h5 {
    color: rgb(102, 102, 204);
    background-color: rgb(158, 192, 98);
    padding: 1%;
    border-radius: 1%;
}




/* @media screen and (width <1200px) {

    .projets{
        grid-template-columns: 1fr;
        grid-template-areas: "cvonline" "cahierdc" "espcom";

    }
} */


@media screen and (width <800px) {

    .projets {
        grid-template-columns: 1fr;
        grid-template-areas: "cvonline" "cahierdc" "espcom";
    }


}
</style>
