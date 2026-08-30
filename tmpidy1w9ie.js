
(function(){

"use strict";

/* =========================
   PERFECT MATCH
========================= */

/* =========================
   PERFECT MATCH — FRANCE
   FRANCE + CORSICA ONLY
========================= */

const answers = {
  experience: null,
  budget: null,
  style: null,
  priority: null
};


/* =========================
   DESTINATION PROFILES
   ONLY FRANCE + CORSICA
========================= */

const destinationProfiles = {

  "Paris": {
    beach:2,
    nature:4,
    adventure:3,
    nightlife:10,
    relax:6,
    family:8,

    budget1:5,
    budget2:8,
    budget3:10,

    couple:10,
    family:8,
    friends:10,
    solo:10,

    activities:10,
    location:10,
    value:6,

    icon:"🗼",
    title:"Paris, France",
    intro:"Your perfect France combines culture, iconic sights, great food and vibrant city life.",
    reasons:[
      "Exceptional culture and historic attractions",
      "Excellent restaurants, cafés and French cuisine",
      "Perfect for couples, friends and solo travellers"
    ],
    link:"france.html"
  },


  "French Riviera": {
    beach:10,
    nature:7,
    adventure:6,
    nightlife:9,
    relax:9,
    family:8,

    budget1:4,
    budget2:7,
    budget3:10,

    couple:10,
    family:8,
    friends:9,
    solo:8,

    activities:9,
    location:10,
    value:6,

    icon:"🌊",
    title:"French Riviera",
    intro:"Your perfect France is Mediterranean: beautiful beaches, elegant towns, sunshine and coastal experiences.",
    reasons:[
      "Mediterranean beaches and spectacular coastline",
      "Perfect balance of relaxation and activities",
      "Great choice for couples, friends and families"
    ],
    link:"france.html"
  },


  "Provence": {
    beach:7,
    nature:9,
    adventure:6,
    nightlife:4,
    relax:10,
    family:8,

    budget1:7,
    budget2:9,
    budget3:10,

    couple:10,
    family:8,
    friends:8,
    solo:8,

    activities:8,
    location:8,
    value:8,

    icon:"🌿",
    title:"Provence, France",
    intro:"Your ideal France is slower and more atmospheric, with villages, landscapes, food and beautiful countryside.",
    reasons:[
      "Peaceful countryside and beautiful landscapes",
      "Excellent food, wine and local markets",
      "Ideal for relaxing and romantic escapes"
    ],
    link:"provence.html"
  },


  "Bordeaux": {
    beach:4,
    nature:7,
    adventure:4,
    nightlife:7,
    relax:8,
    family:7,

    budget1:7,
    budget2:9,
    budget3:9,

    couple:9,
    family:7,
    friends:9,
    solo:8,

    activities:8,
    location:8,
    value:9,

    icon:"🍷",
    title:"Bordeaux, France",
    intro:"Your perfect France is shaped by wine, gastronomy, elegant architecture and relaxed city experiences.",
    reasons:[
      "Exceptional wine and gastronomy",
      "Beautiful historic architecture",
      "Excellent balance between culture and relaxation"
    ],
    link:"bordeaux.html"
  },


  "Annecy": {
    beach:5,
    nature:10,
    adventure:9,
    nightlife:3,
    relax:9,
    family:9,

    budget1:6,
    budget2:9,
    budget3:10,

    couple:9,
    family:10,
    friends:8,
    solo:8,

    activities:10,
    location:8,
    value:7,

    icon:"🏔️",
    title:"Annecy, France",
    intro:"Your ideal France combines mountains, crystal-clear water, outdoor adventures and peaceful scenery.",
    reasons:[
      "Spectacular Alpine landscapes",
      "Excellent hiking and outdoor activities",
      "Beautiful destination for couples and families"
    ],
    link:"annecy.html"
  },


  "Marseille": {
    beach:9,
    nature:8,
    adventure:8,
    nightlife:8,
    relax:7,
    family:8,

    budget1:7,
    budget2:8,
    budget3:9,

    couple:8,
    family:8,
    friends:10,
    solo:9,

    activities:10,
    location:9,
    value:8,

    icon:"⚓",
    title:"Marseille, France",
    intro:"Your perfect France combines Mediterranean coastline, culture, food and an energetic atmosphere.",
    reasons:[
      "Mediterranean coast and Calanques",
      "Strong food and cultural identity",
      "Great mix of city life and outdoor experiences"
    ],
    link:"france.html"
  },


  "Corsica": {
    beach:10,
    nature:10,
    adventure:10,
    nightlife:5,
    relax:10,
    family:9,

    budget1:6,
    budget2:9,
    budget3:10,

    couple:10,
    family:9,
    friends:9,
    solo:8,

    activities:10,
    location:8,
    value:8,

    icon:"🏝️",
    title:"Corsica, France",
    intro:"Your perfect France is Corsica: turquoise water, dramatic mountains, wild landscapes and authentic island experiences.",
    reasons:[
      "Exceptional beaches and Mediterranean coastline",
      "Mountains, hiking and outdoor adventures",
      "Perfect combination of nature, relaxation and discovery"
    ],
    link:"corsica.html"
  },


  "Ajaccio": {
    beach:10,
    nature:9,
    adventure:8,
    nightlife:6,
    relax:10,
    family:9,

    budget1:7,
    budget2:9,
    budget3:10,

    couple:10,
    family:9,
    friends:8,
    solo:8,

    activities:9,
    location:9,
    value:8,

    icon:"🌅",
    title:"Ajaccio, Corsica",
    intro:"Your perfect match is Ajaccio: Mediterranean beaches, Corsican culture, relaxed city life and beautiful coastal scenery.",
    reasons:[
      "Beautiful Mediterranean coastline",
      "Excellent base for discovering Corsica",
      "Great combination of culture, food and relaxation"
    ],
    link:"ajaccio.html"
  },


  "Bonifacio": {
    beach:10,
    nature:10,
    adventure:9,
    nightlife:5,
    relax:10,
    family:8,

    budget1:5,
    budget2:8,
    budget3:10,

    couple:10,
    family:8,
    friends:9,
    solo:8,

    activities:10,
    location:9,
    value:7,

    icon:"🏰",
    title:"Bonifacio, Corsica",
    intro:"Your perfect match is Bonifacio: dramatic cliffs, turquoise water, historic streets and unforgettable coastal scenery.",
    reasons:[
      "Spectacular cliffs and Mediterranean sea",
      "Historic citadel and beautiful old town",
      "Excellent for romance, nature and adventure"
    ],
    link:"bonifacio.html"
  },


  "Corsican Mountains": {
    beach:5,
    nature:10,
    adventure:10,
    nightlife:2,
    relax:9,
    family:7,

    budget1:7,
    budget2:9,
    budget3:9,

    couple:9,
    family:7,
    friends:9,
    solo:10,

    activities:10,
    location:7,
    value:9,

    icon:"⛰️",
    title:"Corsican Mountains",
    intro:"Your perfect Corsica is wild and adventurous, with spectacular mountains, hiking trails and untouched landscapes.",
    reasons:[
      "Outstanding mountain landscapes",
      "Excellent hiking and outdoor adventures",
      "Perfect for nature lovers and active travellers"
    ],
    link:"corsican-mountains.html"
  }

};


/* =========================
   CALCULATE MATCH
========================= */

function calculateMatch(){

  let results = [];

  Object.keys(destinationProfiles).forEach(function(destination){

    const profile = destinationProfiles[destination];

    let score = 0;

    if(answers.experience){
      score += Number(profile[answers.experience] || 0);
    }

    if(answers.budget){
      score += Number(profile["budget" + answers.budget] || 0);
    }

    if(answers.style){
      score += Number(profile[answers.style] || 0);
    }

    if(answers.priority){
      score += Number(profile[answers.priority] || 0);
    }

    results.push({
      destination:destination,
      score:score,
      profile:profile
    });

  });


  results.sort(function(a,b){
    return b.score - a.score;
  });


  const best = results[0];

  /*
   * 40 punti = massimo teorico:
   * esperienza 10
   * budget 10
   * stile 10
   * priorità 10
   */
  const percentage = Math.min(
    100,
    Math.round((best.score / 40) * 100)
  );


  resultTitle.textContent =
    best.profile.icon + " " + best.profile.title;

  resultIntro.textContent =
    best.profile.intro;


  resultScore.textContent =
    percentage + "%";


  resultReasons.innerHTML = "";

  best.profile.reasons.forEach(function(reason){

    const item = document.createElement("div");

    item.className = "reason";

    item.innerHTML =
      "<span>✓</span><span>" +
      reason +
      "</span>";

    resultReasons.appendChild(item);

  });


  /*
   * Mostra solo altre destinazioni
   * francesi/corse.
   */
  alternativeList.innerHTML = "";

  results.slice(1,4).forEach(function(item){

    const alternative =
      document.createElement("a");

    alternative.className =
      "alternative";

    alternative.href =
      item.profile.link;

    alternative.innerHTML =
      "<span>" +
      item.profile.icon +
      "</span>" +
      "<strong>" +
      item.profile.title +
      "</strong>";

    alternativeList.appendChild(alternative);

  });


  resultLink.href =
    best.profile.link;


  /*
   * Mostra il risultato.
   */
  document.querySelectorAll(".match-step")
    .forEach(function(step){
      step.classList.remove("active");
    });

  resultCard.classList.add("show");

  resultCard.scrollIntoView({
    behavior:"smooth",
    block:"center"
  });

}


/* =========================
   QUIZ NAVIGATION
========================= */

const matchSteps =
  document.querySelectorAll(".match-step");

const next1 =
  document.getElementById("next1");

const next2 =
  document.getElementById("next2");

const next3 =
  document.getElementById("next3");

const calculateButton =
  document.getElementById("calculate");

const restart =
  document.getElementById("restart");

const resultCard =
  document.getElementById("resultCard");

const resultTitle =
  document.getElementById("resultTitle");

const resultIntro =
  document.getElementById("resultIntro");

const resultScore =
  document.getElementById("resultScore");

const resultReasons =
  document.getElementById("resultReasons");

const resultLink =
  document.getElementById("resultLink");

const alternativeList =
  document.getElementById("alternativeList");

const matchProgress =
  document.getElementById("matchProgress");


function showStep(number){

  matchSteps.forEach(function(step){

    step.classList.remove("active");

    if(
      Number(step.dataset.step) === number
    ){
      step.classList.add("active");
    }

  });


  if(matchProgress){

    matchProgress.style.width =
      ((number / 4) * 100) + "%";

  }

}


/* =========================
   CHOICE HANDLING
========================= */

document.querySelectorAll(".choice")
  .forEach(function(button){

    button.addEventListener("click",function(){

      const group =
        button.dataset.group;

      const value =
        button.dataset.value;


      document.querySelectorAll(
        '.choice[data-group="' +
        group +
        '"]'
      ).forEach(function(item){

        item.classList.remove("selected");

      });


      button.classList.add("selected");

      answers[group] = value;


      if(group === "experience"){
        next1.disabled = false;
      }

      if(group === "budget"){
        next2.disabled = false;
      }

      if(group === "style"){
        next3.disabled = false;
      }

    });

  });


/* =========================
   NEXT BUTTONS
========================= */

if(next1){

  next1.addEventListener("click",function(){

    showStep(2);

  });

}


if(next2){

  next2.addEventListener("click",function(){

    showStep(3);

  });

}


if(next3){

  next3.addEventListener("click",function(){

    showStep(4);

  });

}


/* =========================
   BACK BUTTONS
========================= */

document.querySelectorAll(".back")
  .forEach(function(button){

    button.addEventListener("click",function(){

      const step =
        Number(button.dataset.back);

      showStep(step);

    });

  });


/* =========================
   CALCULATE
========================= */

if(calculateButton){

  calculateButton.addEventListener(
    "click",
    function(){

      if(
        !answers.experience ||
        !answers.budget ||
        !answers.style ||
        !answers.priority
      ){
        return;
      }

      calculateMatch();

    }
  );

}


/* =========================
   RESTART
========================= */

if(restart){

  restart.addEventListener("click",function(){

    answers.experience = null;
    answers.budget = null;
    answers.style = null;
    answers.priority = null;


    document.querySelectorAll(".choice")
      .forEach(function(button){

        button.classList.remove("selected");

      });


    next1.disabled = true;
    next2.disabled = true;
    next3.disabled = true;


    resultCard.classList.remove("show");


    showStep(1);


    document.getElementById("match")
      .scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

  });

}


showStep(1);

})();

/* =========================
   DESTINATION PROFILES
========================= */

const destinationProfiles = {

"Barcelona":{
  beach:9,nature:7,adventure:7,nightlife:10,relax:7,family:9,
  budget1:6,budget2:8,budget3:10,
  couple:10,family:9,friends:10,solo:10,
  activities:10,location:10,value:7
},


"Madrid":{
  beach:2,nature:6,adventure:6,nightlife:10,relax:7,family:9,
  budget1:8,budget2:9,budget3:10,
  couple:10,family:9,friends:10,solo:10,
  activities:10,location:10,value:9
},

"Valencia":{
  beach:10,nature:7,adventure:7,nightlife:8,relax:9,family:10,
  budget1:9,budget2:10,budget3:9,
  couple:9,family:10,friends:9,solo:9,
  activities:9,location:10,value:10
},

"Alicante":{
  beach:10,nature:7,adventure:7,nightlife:8,relax:10,family:10,
  budget1:9,budget2:9,budget3:9,
  couple:9,family:10,friends:9,solo:8,
  activities:8,location:9,value:10
},

"Andalusia":{
  beach:9,nature:9,adventure:9,nightlife:10,relax:8,family:9,
  budget1:9,budget2:9,budget3:10,
  couple:10,family:9,friends:10,solo:9,
  activities:10,location:10,value:9
},

"Costa del Sol":{
  beach:10,nature:7,adventure:7,nightlife:9,relax:10,family:10,
  budget1:8,budget2:9,budget3:10,
  couple:10,family:10,friends:9,solo:8,
  activities:9,location:10,value:9
},

"Cádiz":{
  beach:10,nature:9,adventure:9,nightlife:7,relax:9,family:8,
  budget1:9,budget2:9,budget3:8,
  couple:9,family:8,friends:9,solo:9,
  activities:9,location:8,value:10
},

"Galicia":{
  beach:8,nature:10,adventure:9,nightlife:5,relax:10,family:7,
  budget1:10,budget2:9,budget3:8,
  couple:9,family:7,friends:8,solo:10,
  activities:9,location:7,value:10
},

"Asturias":{
  beach:8,nature:10,adventure:10,nightlife:4,relax:10,family:8,
  budget1:10,budget2:9,budget3:8,
  couple:9,family:8,friends:8,solo:10,
  activities:9,location:7,value:10
},

"Mallorca":{
  beach:10,nature:9,adventure:8,nightlife:9,relax:9,family:10,
  budget1:8,budget2:10,budget3:10,
  couple:10,family:10,friends:9,solo:9,
  activities:10,location:10,value:9
},

"Menorca":{
  beach:10,nature:10,adventure:7,nightlife:5,relax:10,family:9,
  budget1:8,budget2:9,budget3:8,
  couple:10,family:9,friends:7,solo:9,
  activities:8,location:8,value:9
},

"Ibiza":{
  beach:9,nature:7,adventure:8,nightlife:10,relax:8,family:6,
  budget1:6,budget2:8,budget3:10,
  couple:10,family:5,friends:10,solo:8,
  activities:10,location:9,value:6
},

"Formentera":{
  beach:10,nature:9,adventure:7,nightlife:3,relax:10,family:7,
  budget1:6,budget2:8,budget3:10,
  couple:10,family:7,friends:6,solo:8,
  activities:7,location:7,value:6
},

"Cabrera":{
  beach:10,nature:10,adventure:8,nightlife:1,relax:10,family:6,
  budget1:7,budget2:8,budget3:7,
  couple:9,family:6,friends:6,solo:9,
  activities:8,location:5,value:7
},

"Dragonera":{
  beach:7,nature:10,adventure:9,nightlife:1,relax:10,family:6,
  budget1:9,budget2:8,budget3:7,
  couple:9,family:6,friends:7,solo:10,
  activities:8,location:5,value:9
},

"Tenerife":{
  beach:9,nature:10,adventure:10,nightlife:10,relax:8,family:10,
  budget1:8,budget2:9,budget3:10,
  couple:10,family:10,friends:10,solo:10,
  activities:10,location:10,value:9
},

"Gran Canaria":{
  beach:10,nature:8,adventure:9,nightlife:9,relax:9,family:9,
  budget1:9,budget2:10,budget3:9,
  couple:9,family:9,friends:10,solo:9,
  activities:10,location:9,value:10
},

"Fuerteventura":{
  beach:10,nature:8,adventure:10,nightlife:6,relax:10,family:8,
  budget1:9,budget2:9,budget3:8,
  couple:9,family:8,friends:9,solo:10,
  activities:9,location:8,value:10
},

"Lanzarote":{
  beach:9,nature:10,adventure:9,nightlife:7,relax:9,family:8,
  budget1:8,budget2:9,budget3:9,
  couple:9,family:8,friends:8,solo:9,
  activities:10,location:9,value:9
},

"La Palma":{
  beach:5,nature:10,adventure:10,nightlife:4,relax:10,family:7,
  budget1:10,budget2:9,budget3:7,
  couple:9,family:7,friends:7,solo:10,
  activities:9,location:7,value:9
},

"La Gomera":{
  beach:5,nature:10,adventure:9,nightlife:3,relax:10,family:6,
  budget1:9,budget2:8,budget3:7,
  couple:9,family:6,friends:7,solo:10,
  activities:9,location:6,value:9
},

"El Hierro":{
  beach:5,nature:10,adventure:9,nightlife:2,relax:10,family:5,
  budget1:9,budget2:8,budget3:6,
  couple:8,family:5,friends:6,solo:10,
  activities:8,location:5,value:9
},

"La Graciosa":{
  beach:10,nature:9,adventure:8,nightlife:2,relax:10,family:7,
  budget1:8,budget2:8,budget3:6,
  couple:10,family:7,friends:6,solo:9,
  activities:7,location:5,value:8
},

"Lisbon":{
  beach:7,nature:6,adventure:6,nightlife:10,relax:8,family:9,
  budget1:7,budget2:9,budget3:10,
  couple:10,family:9,friends:10,solo:10,
  activities:10,location:10,value:8
},

"Porto":{
  beach:5,nature:6,adventure:5,nightlife:8,relax:8,family:8,
  budget1:9,budget2:9,budget3:9,
  couple:10,family:8,friends:9,solo:9,
  activities:9,location:9,value:10
},

"Algarve":{
  beach:10,nature:8,adventure:8,nightlife:8,relax:10,family:10,
  budget1:8,budget2:9,budget3:10,
  couple:10,family:10,friends:9,solo:8,
  activities:9,location:9,value:9
},

"Madeira":{
  beach:6,nature:10,adventure:10,nightlife:6,relax:10,family:8,
  budget1:8,budget2:9,budget3:10,
  couple:10,family:8,friends:9,solo:10,
  activities:10,location:8,value:9
},

"Azores":{
  beach:6,nature:10,adventure:10,nightlife:3,relax:10,family:7,
  budget1:8,budget2:9,budget3:8,
  couple:10,family:7,friends:8,solo:10,
  activities:10,location:7,value:9
},

"Sintra":{
  beach:6,nature:9,adventure:7,nightlife:5,relax:9,family:9,
  budget1:8,budget2:9,budget3:10,
  couple:10,family:9,friends:8,solo:9,
  activities:10,location:9,value:9
},

"Cascais":{
  beach:10,nature:7,adventure:7,nightlife:7,relax:10,family:9,
  budget1:7,budget2:9,budget3:10,
  couple:10,family:9,friends:8,solo:8,
  activities:8,location:9,value:7
},

"Funchal":{
  beach:6,nature:9,adventure:9,nightlife:7,relax:9,family:8,
  budget1:8,budget2:9,budget3:10,
  couple:10,family:8,friends:9,solo:9,
  activities:10,location:9,value:9
},

"São Miguel":{
  beach:6,nature:10,adventure:10,nightlife:3,relax:10,family:7,
  budget1:8,budget2:9,budget3:8,
  couple:10,family:7,friends:8,solo:10,
  activities:10,location:7,value:9
}

};


/* =========================
   DESTINATION LINKS
========================= */

const destinationLinks = {
  "Barcelona":"barcelona.html",
  "Madrid":"madrid.html",
  "Valencia":"valencia.html",
  "Alicante":"alicante.html",
  "Andalusia":"andalusia.html",
  "Costa del Sol":"costa-del-sol.html",
  "Cádiz":"cadiz.html",
  "Galicia":"galicia.html",
  "Asturias":"asturias.html",
  "Mallorca":"mallorca.html",
  "Menorca":"menorca.html",
  "Ibiza":"ibiza.html",
  "Formentera":"formentera.html",
  "Cabrera":"cabrera.html",
  "Dragonera":"dragonera.html",
  "Tenerife":"tenerife.html",
  "Gran Canaria":"gran-canaria.html",
  "Fuerteventura":"fuerteventura.html",
  "Lanzarote":"lanzarote.html",
  "La Palma":"la-palma.html",
  "La Gomera":"la-gomera.html",
  "El Hierro":"el-hierro.html",
  "La Graciosa":"la-graciosa.html",
  "Lisbon":"lisbon.html",
  "Porto":"porto.html",
  "Algarve":"algarve.html",
  "Madeira":"madeira.html",
  "Azores":"azores.html",
  "Sintra":"sintra.html",
  "Cascais":"cascais.html",
  "Funchal":"funchal.html",
  "São Miguel":"sao-miguel.html"
};


/* =========================
   DOM
========================= */

const steps =
  document.querySelectorAll(".match-step");

const progress =
  document.getElementById("matchProgress");

const resultCard =
  document.getElementById("resultCard");

const resultScore =
  document.getElementById("resultScore");

const resultTitle =
  document.getElementById("resultTitle");

const resultIntro =
  document.getElementById("resultIntro");

const resultReasons =
  document.getElementById("resultReasons");

const resultLink =
  document.getElementById("resultLink");

const alternativeList =
  document.getElementById("alternativeList");

const next1 =
  document.getElementById("next1");

const next2 =
  document.getElementById("next2");

const next3 =
  document.getElementById("next3");

const calculate =
  document.getElementById("calculate");

const restart =
  document.getElementById("restart");


/* =========================
   STEP NAVIGATION
========================= */

function showStep(step){

  steps.forEach(function(item){

    item.classList.toggle(
      "active",
      Number(item.dataset.step) === step
    );

  });

  progress.style.width =
    (step * 25) + "%";
}


function scrollMatch(){

  document.getElementById("match")
    .scrollIntoView({
      behavior:"smooth",
      block:"start"
    });

}


/* =========================
   CHOICE SELECTION
========================= */

document.querySelectorAll(".choice")
.forEach(function(choice){

  choice.addEventListener("click",function(){

    const group =
      this.dataset.group;

    document.querySelectorAll(
      '.choice[data-group="' + group + '"]'
    ).forEach(function(item){

      item.classList.remove("selected");

    });

    this.classList.add("selected");

    answers[group] =
      this.dataset.value;


    if(group === "experience"){
      next1.disabled = false;
    }

    if(group === "budget"){
      next2.disabled = false;
    }

    if(group === "style"){
      next3.disabled = false;
    }

  });

});


/* =========================
   NEXT BUTTONS
========================= */

next1.addEventListener("click",function(){

  if(!answers.experience) return;

  showStep(2);
  scrollMatch();

});


next2.addEventListener("click",function(){

  if(!answers.budget) return;

  showStep(3);
  scrollMatch();

});


next3.addEventListener("click",function(){

  if(!answers.style) return;

  showStep(4);
  scrollMatch();

});


/* =========================
   BACK BUTTONS
========================= */

document.querySelectorAll(".back")
.forEach(function(button){

  button.addEventListener("click",function(){

    showStep(
      Number(this.dataset.back)
    );

    scrollMatch();

  });

});


/* =========================
   SCORING
========================= */

function scoreDestination(name){

  const profile =
    destinationProfiles[name];

  let score = 0;

  score +=
    (profile[answers.experience] || 0) * 4;

  score +=
    (profile["budget" + answers.budget] || 0) * 2;

  score +=
    (profile[answers.style] || 0) * 2;

  score +=
    (profile[answers.priority] || 0) * 2;

  return Math.round(score);

}


function ranked(){

  return Object.keys(destinationProfiles)
    .map(function(name){

      return {
        name:name,
        score:scoreDestination(name)
      };

    })
    .sort(function(a,b){

      return b.score - a.score;

    });

}


/* =========================
   HUMAN FRIENDLY TEXT
========================= */

const experienceText = {

  beach:
    "you are looking for beaches, sunshine and coastal experiences",

  nature:
    "you prefer nature, landscapes and outdoor experiences",

  adventure:
    "you want activities, adventure and experiences",

  nightlife:
    "you enjoy restaurants, nightlife and an active atmosphere",

  relax:
    "you value relaxation, slower travel and peaceful places",

  family:
    "you are looking for an easy and family-friendly trip"

};


const budgetText = {

  "1":
    "you prefer strong value and keeping travel costs under control",

  "2":
    "you want a comfortable balance between price and quality",

  "3":
    "you are comfortable prioritising comfort and flexibility"

};


const styleText = {

  couple:
    "it fits a couple looking for shared experiences",

  family:
    "it works particularly well for family travel",

  friends:
    "it offers plenty of options for travelling with friends",

  solo:
    "it works well for independent solo travel"

};


const priorityText = {

  activities:
    "there is plenty to see and do",

  location:
    "the destination offers a strong mix of location and accessibility",

  value:
    "it offers a strong overall value proposition"

};


/* =========================
   RESULT
========================= */

calculate.addEventListener("click",function(){

  if(
    !answers.experience ||
    !answers.budget ||
    !answers.style ||
    !answers.priority
  ){
    return;
  }


  const list =
    ranked();

  const winner =
    list[0];


  /* SCORE */

  resultScore.textContent =
    winner.score + "%";


  /* TITLE */

  resultTitle.textContent =
    "✨ " + winner.name;


  /* INTRO */

  const personalizedDescriptions = {

  "Tenerife":
    "You’re looking for sunshine, beaches and relaxation, while still having the freedom to discover nature and unique experiences. Tenerife offers an excellent balance between ocean escapes, volcanic landscapes, activities and comfortable travel.",

  "Barcelona":
    "You want a destination where you can combine beaches, culture, restaurants and an energetic atmosphere. Barcelona gives you the perfect mix of Mediterranean lifestyle, architecture, nightlife and things to discover.",

  "Madrid":
    "You’re looking for culture, great food, nightlife and a lively city atmosphere. Madrid is an excellent choice if you want to spend your trip discovering museums, restaurants, neighbourhoods and Spanish city life.",

  "Valencia":
    "You want the best of both worlds: a relaxed Mediterranean atmosphere together with culture, food and activities. Valencia offers beaches, great cuisine and a comfortable city experience.",

  "Alicante":
    "You’re looking for sunshine, beaches and a relaxed Mediterranean escape without giving up restaurants and things to explore. Alicante is a strong match for an easy and enjoyable coastal trip.",

  "Andalusia":
    "You want variety. Beaches, historic cities, food, culture, nightlife and beautiful landscapes all come together here. Andalusia is ideal if you want a trip packed with different experiences.",

  "Costa del Sol":
    "You’re looking for sunshine, beaches, comfort and relaxation with plenty of restaurants and activities nearby. Costa del Sol is a great fit for an easy Mediterranean escape.",

  "Cádiz":
    "You’re attracted to authentic coastal experiences, beaches, nature and a more relaxed atmosphere. Cádiz combines Atlantic scenery, great food, history and a genuine Andalusian feel.",

  "Galicia":
    "You prefer nature, dramatic landscapes and slower travel. Galicia is a strong match for exploring the Atlantic coast, enjoying excellent food and discovering beautiful outdoor scenery.",

  "Asturias":
    "You’re looking for mountains, nature, adventure and a quieter side of Spain. Asturias offers dramatic coastlines, green landscapes and excellent opportunities for outdoor exploration.",

  "Mallorca":
    "You want variety: beautiful beaches, nature, villages, activities and plenty of places to explore. Mallorca is one of the most versatile choices for a Mediterranean holiday.",

  "Menorca":
    "You’re looking for peaceful beaches, nature and a slower Mediterranean rhythm. Menorca is particularly well suited to travellers who value relaxation and beautiful natural surroundings.",

  "Ibiza":
    "You want beaches, energy, social experiences and nightlife. Ibiza gives you the opportunity to combine beautiful Mediterranean scenery with restaurants, entertainment and unforgettable evenings.",

  "Formentera":
    "You’re looking for beautiful beaches, turquoise water and a peaceful island atmosphere. Formentera is ideal for slowing down and enjoying a more intimate Mediterranean escape.",

  "Cabrera":
    "You value nature, peaceful surroundings and escaping the crowds. Cabrera is a strong match for discovering protected landscapes, clear waters and a quieter Mediterranean environment.",

  "Dragonera":
    "You’re drawn to wild nature, hiking and peaceful coastal landscapes. Dragonera is a great fit if you want to disconnect and experience a more untouched side of the Mediterranean.",

  "Gran Canaria":
    "You want beaches, activities, sunshine and plenty of variety. Gran Canaria offers a combination of coastal escapes, mountains, entertainment and experiences that works for many different travel styles.",

  "Fuerteventura":
    "You’re looking for beaches, adventure and open landscapes. Fuerteventura is especially suited to travellers who enjoy watersports, nature and a relaxed island lifestyle.",

  "Lanzarote":
    "You want something different: volcanic landscapes, beaches, nature and unique scenery. Lanzarote offers a distinctive island experience with plenty to explore.",

  "La Palma":
    "You’re looking for nature, hiking, adventure and peaceful surroundings. La Palma is a strong match for discovering forests, volcanic landscapes and spectacular viewpoints.",

  "La Gomera":
    "You prefer nature, hiking and a quieter island atmosphere. La Gomera offers beautiful landscapes and a slower pace that is ideal for travellers who want to disconnect.",

  "El Hierro":
    "You’re looking for something remote and authentic. El Hierro is a strong match for nature lovers, divers and travellers who want to escape the busiest tourist destinations.",

  "La Graciosa":
    "You want beaches, nature and slow island life. La Graciosa is ideal if your perfect trip means relaxing, cycling, exploring quiet landscapes and enjoying beautiful coastal scenery.",

  "Lisbon":
    "You want culture, restaurants, nightlife and beautiful surroundings with the possibility of enjoying the coast. Lisbon offers an excellent mix of historic streets, viewpoints, food and city energy.",

  "Porto":
    "You’re looking for culture, food, wine and a relaxed city atmosphere. Porto is a great match for discovering historic streets, river views, local cuisine and Portuguese character.",

  "Algarve":
    "You’re looking for sunshine, beaches, relaxation and beautiful coastal scenery. The Algarve offers a comfortable combination of beaches, restaurants, charming towns and outdoor experiences.",

  "Madeira":
    "You want nature, adventure and beautiful landscapes while still having access to comfortable travel and great food. Madeira is especially suited to travellers who want an active but relaxing island escape.",

  "Azores":
    "You’re drawn to nature, adventure and dramatic landscapes. The Azores are a strong match for hiking, volcanic scenery, lakes, wildlife and authentic Atlantic experiences.",

  "Sintra":
    "You want culture, nature and beautiful scenery. Sintra is ideal for exploring historic palaces, forests and romantic landscapes while staying close to Lisbon.",

  "Cascais":
    "You’re looking for beaches, relaxation and an attractive coastal atmosphere. Cascais offers a comfortable mix of ocean views, restaurants, beaches and easy access to Lisbon.",

  "Funchal":
    "You want to combine nature, comfort, food and activities. Funchal is a great base for experiencing Madeira while enjoying gardens, ocean views, restaurants and Portuguese culture.",

  "São Miguel":
    "You’re looking for nature, adventure and unique landscapes. São Miguel offers volcanic lakes, hot springs, green scenery and outdoor experiences for an unforgettable Atlantic escape."

};


resultIntro.textContent =
  personalizedDescriptions[winner.name] ||
  (
    "Based on your preferences, " +
    winner.name +
    " is a strong match for the way you want to travel."
  );


  /* =========================
     SPECIFIC REASONS
  ========================= */

  resultReasons.innerHTML = "";


  const reasons = [

    {
      title:"Your travel style",
      text:
        experienceText[answers.experience]
    },

    {
      title:"Your budget",
      text:
        budgetText[answers.budget]
    },

    {
      title:"Who you travel with",
      text:
        styleText[answers.style]
    },

    {
      title:"Your priority",
      text:
        priorityText[answers.priority]
    }

  ];


  reasons.forEach(function(reason){

    const div =
      document.createElement("div");

    div.className =
      "reason";

    div.innerHTML =
      "<b>✓ " +
      reason.title +
      "</b>" +
      reason.text;

    resultReasons.appendChild(div);

  });


  /* =========================
     MAIN LINK
  ========================= */

  resultLink.href =
    destinationLinks[winner.name] ||
    "#destinations";

  resultLink.textContent =
    "Explore " +
    winner.name +
    " →";


  /* =========================
     ALTERNATIVES
  ========================= */

  alternativeList.innerHTML = "";


  list.slice(1,4)
  .forEach(function(item){

    const div =
      document.createElement("div");

    div.className =
      "alternative";


    const link =
      destinationLinks[item.name];


    if(link){

      div.innerHTML =
        "<strong>" +
        item.name +
        "</strong>" +
        "<span>" +
        item.score +
        "% match</span>" +
        '<br><a href="' +
        link +
        '" style="display:inline-block;margin-top:8px;color:var(--blue);font-size:12px;font-weight:800">Explore →</a>';

    }else{

      div.innerHTML =
        "<strong>" +
        item.name +
        "</strong>" +
        "<span>" +
        item.score +
        "% match</span>";

    }


    alternativeList.appendChild(div);

  });


  /* =========================
     SHOW RESULT
  ========================= */

  steps.forEach(function(step){

    step.classList.remove("active");

  });


  resultCard.classList.add("show");

  progress.style.width =
    "100%";


  setTimeout(function(){

    resultCard.scrollIntoView({
      behavior:"smooth",
      block:"center"
    });

  },100);

});


/* =========================
   RESTART
========================= */

restart.addEventListener("click",function(){

  answers.experience = null;
  answers.budget = null;
  answers.style = null;
  answers.priority = null;


  document.querySelectorAll(".choice")
  .forEach(function(choice){

    choice.classList.remove("selected");

  });


  next1.disabled = true;
  next2.disabled = true;
  next3.disabled = true;


  resultCard.classList.remove("show");

  alternativeList.innerHTML = "";


  showStep(1);

  scrollMatch();

});


/* =========================
   INITIAL STATE
========================= */

showStep(1);

)();
