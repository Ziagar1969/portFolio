


<template>  
  <h1>{{ titre }}</h1>


    <form ref="form" @submit.prevent="sendEmail">
        
            <label>NOM</label>
              <input type="name" required v-model="name" name="user_name">
  
              <label>Email</label>
            <input type="email" required v-model="email" name="user_email">
          <label>Message</label>
      <div id="message">
        <textarea v-model="message" name="message"></textarea>
         </div>
             <div v-if="formNotFilled" class="text-red-500 mb-3">Veuillez remplir tous les champs.</div>
                <div v-if="successMessage" class="text-green-500 mb-3">{{ successMessage }}</div>
             <input type="submit" value="Send"/>
         </form>


            </template>
      
  
      <script>
      import emailjs from "@emailjs/browser";
      export default {
        name:"ContactView",
        data() {
              return {
                  Nom: " ",
                  Email: " ",
                  Message: " ",  
                  titre: "Me contacter",
                  formNotFilled: false,
                  successMessage: "",
              };
          },

        
        methods: {
            sendEmail() {
                if (!this.name || !this.email || !this.message) {
                    this.formNotFilled = true;
                    this.successMessage = "";
                    return;
                }

                emailjs.sendForm(
                    "service_2in15u7",
                    "template_g6legej",
                    this.$refs.form,
                    "ZbS01-Py7TrcYy8UX"
                )
                .then(
                    (result) => {
                        console.log("SUCCESS!", result.text);
                        this.formNotFilled = false;
                        this.successMessage = "Email envoyé avec succès";
                        this.name = "";
                        this.email = "";
                        this.message = "";
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }

                );
            },
        },
          
        
      };
  </script>
  <style >
form {
    max-width: 720px;
    margin: 30 px auto;
    background:rgb(174, 218, 105);
    text-align: left;
    padding: 40 px;
    border-radius: 10px;
}
label {
    color:white;
    display: inline-block;
    padding-left: 5px;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input {
    display: block;
    padding: 10px 6px;
    width: 100%; 
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555555;
}
#message { 
    display: flex;
    flex-direction: row;
    padding-left:15%;
   padding-bottom: 3%;
   margin:5px;

    
}
textarea{
  padding:2%; 
  height:70px;  
  width:90%;
  
}
</style>
      