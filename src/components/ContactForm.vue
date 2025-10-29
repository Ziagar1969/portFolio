<template>  


 <form @submit.prevent="sendEmail">
   
<label for="name">NOM</label>
              <input id="name" type="text"  v-model="name">
  
<label for="email">Email</label>
            <input id="email" type="email" v-model="email">

<label for="message">Message</label>
            <textarea id="message" v-model="message"></textarea>
<div v-if="formNotFilled" class="rouge">Tous les champs doivent être remplis</div>
<div v-if="successMessage" class="vert">{{ successMessage }}</div>
                
<button type="submit" id="send">Envoyer</button>
  </form>
     </template>
    
     <script>
         import emailjs from "@emailjs/browser";
   

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const USER_ID = import.meta.env.VITE_USER_ID;
       
    export default {
        name:"ContactForm",
        data() {
          return {
            name: "",
            email: "",
            message: "", 
            formNotFilled: false,
            successMessage: ""
          };
        },
    methods: {
        sendEmail() {
                  
          if (!this.name || !this.email || !this.message) {
            this.formNotFilled = true;
            this.successMessage = ""; 
            return;
          }

        emailjs.send(
         SERVICE_ID,
         TEMPLATE_ID, 
            {   
              name: this.name,
              email: this.email,
              message: this.message
                    },
         USER_ID
         )
         .then(
         (result) => {
            console.log("SUCCESS!", result.text);
            this.formNotFilled = false;
            this.successMessage = "Message envoyé !";
            this.name = "";
            this.email= "";
            this.message = "";
        }
      )
        .catch((error) => {
          console.error("Erreur EmailJS :", error);
          this.successMessage = "Erreur lors de l'envoi du message. Veuillez réessayer.";
                });
           }
         }, 

        mounted() {
           emailjs.init(USER_ID);
        }
    };
           
              
         </script>

         <style >


         form {
             display:flex;
             flex-direction: column;
             margin: auto;
             margin-bottom: 60px;
             padding: 20px;
             background:rgba(31, 37, 20, 0.479);
             text-align: left;
             border-radius: 10px;
             max-width: 1400px;
         }
         label {
             color:white;
             padding-left: 5px;
             margin: 25px 0 15px;
            
             letter-spacing: 1px;
             font-weight: bold;
         }
         input, textarea {
             text-transform: capitalize;
             padding: 10px 6px;
             width: 100%; 
             box-sizing: border-box;
             border: 5px solid #ddd;
             color: #555555;
         }
         textarea {
           
            display: flex;
            flex-direction: row;
            margin:5px;
            padding:2%; 
            height:170px;  
         
             
         }
         #email, textarea {
             text-transform: none;
         }
         
         
         #send{
             font-weight: bold;
             font-size: larger;
             color: black;
             width:fit-content;
             margin: 15px;
             border-radius: 9%;
             padding: 10px;
         
           
         }

         .rouge{
            font-size: medium;
            color: red;
         }
         .vert{
            font-size: medium;
            color:green;
         }
         
         </style>
