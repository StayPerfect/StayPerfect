
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


