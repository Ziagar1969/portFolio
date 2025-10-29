<template>
   <div class="meteo-widget">
     <div class="row justify-content-center">
         <div class="col-md-8">
            <h1 class="text-center mt-5">Météo</h1>
              <div class="text-center">
                 <span id="ville"> {{ ville }}</span>
                 <div id="temperature">
                <span>{{ temperature }}</span> °C
              </div>
            </div>
          </div>
        </div>
        
        <div class="row justify-content-center">  
          <div class="col-md-8 text-center">
            <!-- Changer de ville -->
            <div id="changer" 
            class="mt-2 text-center p-3 text-aquamarine font-weight-bold text-uppercase d-inline-block" @click="changerDeVille"> 
              Changer de ville
            </div>
          </div>
         </div>
        </div>  
      </template>


<script>
      export default {
                data() {
            return { 
                ville: 'Paris',
                temperature: "xx.x",
                watchId: null,
            };
        }, 
methods: {
  changerDeVille() {
    const nouvelleVille = prompt('Quelle ville souhaitez-vous voir ?');
    if (nouvelleVille) {
      this.ville = nouvelleVille;
      this.recevoirTemperature(this.ville);
    }
},

    recevoirTemperature(ville) {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=30aef75bb347829017dbb29f735846dd&units=metric";
        let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
        requete.open('GET', url); // Nous récupérons juste des données
        requete.responseType = 'json'; // Nous attendons du JSON
        requete.send(); // Nous envoyons notre requête

        requete.onload = () => {
            // Nous envoyons notre requête
            // Dès qu'on reçoit une réponse, cette fonction est executée
                if (requete.readyState === XMLHttpRequest.DONE) {
                if (requete.status === 200) {
                let reponse = requete.response;
                // Affecter la température et la ville au state pour mettre à jour l'affichage
                this.temperature = reponse.main.temp;
                this.ville = reponse.name;
                          
             } else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
             }
         }
        };
    },
        geoSuccess(position) {
            const url = 
            "https://api.openweathermap.org/data/2.5/weather?lat=" + 
            position.coords.latitude + "&lon=" + 
            position.coords.longitude + "&appid=30aef75bb347829017dbb29f735846dd&units=metric";
            let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
            requete.open('GET', url); // Nous récupérons juste des données
            requete.responseType = 'json'; // Nous attendons du JSON
            requete.send(); // Nous envoyons notre requête
            requete.onload = () =>{
                if (requete.readyState === XMLHttpRequest.DONE) {
                    if (requete.status === 200) {
                        let reponse = requete.response;
                        this.temperature = reponse.main.temp;
                        this.ville = reponse.name;
                    } else {
                        alert('Un problème est intervenu, merci de revenir plus tard.');
                    }
                } 
            };
            },
            geoError() {
                this.ville = "Ulassai";
                this.recevoirTemperature(this.ville);
            },
        },
                mounted() {
            if("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                   this.geoSuccess,
                   this.geoError
            );
       } else {
                alert('La géolocalisation n\'est pas supportée par ce navigateur.');
       
            }
        }, 
        beforeUnmount() {
            if (this.watchId) {
                navigator.geolocation.clearWatch(this.watchId);
            }
        },
    };

</script>
<style>
 .meteo-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  margin: auto;
  background: linear-gradient(to right, #FFFFFF, rgb(124, 179, 124), green);
  /* background: rgb(59, 207, 59); */
  min-width: 400px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 500px;
}

.meteo-widget #ville {
  text-transform: capitalize;
}

.meteo-widget #temperature {
  font-size: 4em;
}

.meteo-widget #changer {
  background: rgba(16, 108, 165, 0.3);
  cursor: pointer;
  height: 30px;
  text-align: center;
  padding: 10px;
  color: aliceblue;
  font-weight: bolder;
  font-family: math;
  /* border-radius: 6px; */
  margin: 10px;
}
</style>