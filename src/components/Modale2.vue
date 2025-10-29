<template>
  <div v-if="isOpen"  class="modale" role="dialog" aria-modal="true">
    <div class="overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="modal-close" @click="closeModal">&times;</span>
          <slot></slot>
        </div>
      </div>
    </div>
</template>


<script>
export default {
      data(){
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
           }
        }
    };
 </script>

<style>
.modale {
position:fixed;
top: 100px;
left: 250px;
width: 60%;
background-color: rgba(219, 163, 163, 0.5);
display: flex;
    
}

.modal-close {
 position: absolute;
 top: 0;
 right: 10px;
 font-size: 30px;
 cursor: pointer;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(16, 175, 122); /* transparence réduite */
  color: rgba(20, 70, 8, 0.904);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  /* margin et padding supprimés */
}

</style>

