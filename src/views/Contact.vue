


<template>  


    <form>
      <label>NOM</label>
      <input type="name" required v-model="name">
  
      <label>Email</label>
      <input type="email" required v-model="email">
      <label>Message</label>
      <div id="message">
      <textarea v-model="Message"></textarea>
  </div>
    </form>
          <p>{{ name }} </p>
          <p> {{ email }} </p>
          <p> {{ Message }} </p>
          </template>
        
      
  
      <script>
      export default {
          name: "ContactView",
          data() {
              return {
                  Nom: " ",
                  Email: " ",
                  Message: " "
              }
          }
      }
  </script>
  <style >
form {
    max-width: 620px;
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
      