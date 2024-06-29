


<template>

  <header>
    
  <a href="/">
    <div>
      <h1>{{ titre }}</h1>
    <img src="../assets/img/favicon.ico" alt="favicon">
    </div> 
    
  </a>

</header>
    </template>

<script>
export default {
  data() {
    return {
      titre: "ZiagarCode"
    }
  }
}
</script>
   
  <style scoped>

h1 {
      color:rgb(102, 102, 204);
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-weight: 700;
      font-size:5rem;
      
    }

  
  header div {
      display: flex;
      justify-content: space-between;
      width:auto;
      background-color: rgb(32, 7, 56);
      padding:1%;
      align-items:center;

  }
  header img {
      width:7%;
      align-self: baseline;
   
      }



  </style>