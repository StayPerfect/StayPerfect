

(function(){

  "use strict";


  var questions =
    document.querySelectorAll(".question");

  var nextBtn =
    document.getElementById("nextBtn");

  var backBtn =
    document.getElementById("backBtn");

  var progressBar =
    document.getElementById("progressBar");

  var result =
    document.getElementById("result");

  var resultIcon =
    document.getElementById("resultIcon");

  var resultTitle =
    document.getElementById("resultTitle");

  var resultText =
    document.getElementById("resultText");

  var resultLink =
    document.getElementById("resultLink");

  var current = 0;

  var answers = [];


  function showQuestion(index){

    questions.forEach(function(question,i){

      question.classList.toggle(
        "active",
        i === index
      );

    });


    var progress =
      ((index + 1) / questions.length) * 100;


    progressBar.style.width =
      progress + "%";


    backBtn.style.visibility =
      index === 0
      ? "hidden"
      : "visible";


    nextBtn.textContent =
      index === questions.length - 1
      ? "Show My Match →"
      : "Next →";

  }


  /* ========================================================
     ANSWER BUTTONS
  ======================================================== */

  document.querySelectorAll(".answer")
    .forEach(function(button){

      button.addEventListener(
        "click",
        function(){

          var parent =
            button.closest(".question");


          parent
            .querySelectorAll(".answer")
            .forEach(function(item){

              item.classList.remove("selected");

            });


          button.classList.add("selected");


          answers[current] =
            button.getAttribute("data-score");

        }
      );

    });


  /* ========================================================
     NEXT
  ======================================================== */

  nextBtn.addEventListener(
    "click",
    function(){

      if(!answers[current]){
        return;
      }


      if(current < questions.length - 1){

        current++;

        showQuestion(current);

        return;

      }


      showResult();

    }
  );


  /* ========================================================
     BACK
  ======================================================== */

  backBtn.addEventListener(
    "click",
    function(){

      if(current > 0){

        current--;

        showQuestion(current);

      }

    }
  );


  /* ========================================================
     RESULTS
     
     ONLY:
     - Paris
     - French Riviera
     - Provence
     - Bordeaux
     - Corsica
     - French Mountains
     
     NO Spain
     NO Portugal
     NO Balearic Islands
     NO Canary Islands
     ======================================================== */

  function showResult(){

    var scores = {

      coast:0,
      city:0,
      nature:0,
      food:0,
      relax:0,
      nightlife:0,
      romance:0,
      adventure:0,
      couple:0,
      family:0,
      friends:0,
      solo:0,
      riviera:0,
      mountains:0,
      cityscape:0,
      culture:0

    };


    answers.forEach(function(answer){

      if(scores.hasOwnProperty(answer)){

        scores[answer]++;

      }

    });


    var coastScore =
      scores.coast +
      scores.riviera +
      scores.relax;


    var cityScore =
      scores.city +
      scores.cityscape +
      scores.culture +
      scores.nightlife;


    var natureScore =
      scores.nature +
      scores.mountains +
      scores.adventure;


    var foodScore =
      scores.food +
      scores.culture;


    var romanceScore =
      scores.romance +
      scores.couple +
      scores.riviera;


    var corsicaScore =
      scores.coast +
      scores.riviera +
      scores.nature +
      scores.mountains +
      scores.adventure +
      scores.relax;


    var resultData;


    /* ======================================================
       CORSICA
       ====================================================== */

    if(
      corsicaScore >= 5 &&
      natureScore >= cityScore &&
      natureScore >= foodScore
    ){

      resultData = {

        icon:"🏝️",

        title:"Your Match: Corsica",

        text:
          "Your perfect France combines Mediterranean beaches, " +
          "dramatic mountains, nature and outdoor experiences. " +
          "Corsica is ideal for discovering beautiful coastlines, " +
          "mountain landscapes, villages and authentic island life.",

        link:"corsica.html"

      };

    }


    /* ======================================================
       FRENCH RIVIERA
       ====================================================== */

    else if(
      scores.riviera >= 1 &&
      coastScore >= natureScore &&
      coastScore >= foodScore
    ){

      resultData = {

        icon:"🌊",

        title:"Your Match: French Riviera",

        text:
          "Your perfect France is Mediterranean and elegant. " +
          "Discover the French Riviera, beautiful beaches, " +
          "coastal towns, restaurants, culture and sunshine " +
          "along the Mediterranean coast.",

        link:"france.html"

      };

    }


    /* ======================================================
       PROVENCE
       ====================================================== */

    else if(
      natureScore >= cityScore &&
      natureScore >= foodScore &&
      romanceScore >= 2
    ){

      resultData = {

        icon:"🌿",

        title:"Your Match: Provence",

        text:
          "Your ideal French escape is slower and atmospheric. " +
          "Discover Provence through beautiful countryside, " +
          "historic villages, local markets, food, landscapes " +
          "and romantic Mediterranean surroundings.",

        link:"provence.html"

      };

    }


    /* ======================================================
       BORDEAUX
       ====================================================== */

    else if(
      foodScore >= cityScore &&
      foodScore >= natureScore
    ){

      resultData = {

        icon:"🍷",

        title:"Your Match: Bordeaux",

        text:
          "Your perfect France is built around food, wine, culture " +
          "and beautiful city experiences. Bordeaux offers historic " +
          "architecture, excellent cuisine, wine culture and easy " +
          "access to the Atlantic coast.",

        link:"bordeaux.html"

      };

    }


    /* ======================================================
       FRENCH MOUNTAINS
       ====================================================== */

    else if(
      natureScore >= cityScore &&
      natureScore >= foodScore
    ){

      resultData = {

        icon:"⛰️",

        title:"Your Match: French Mountains",

        text:
          "You are looking for nature, adventure and spectacular " +
          "landscapes. The French Alps and mountain regions offer " +
          "hiking, outdoor activities, villages and unforgettable scenery.",

        link:"france.html"

      };

    }


    /* ======================================================
       PARIS / FRENCH CITIES
       ====================================================== */

    else {

      resultData = {

        icon:"🗼",

        title:"Your Match: Paris",

        text:
          "Your perfect France is vibrant, cultural and full of things " +
          "to discover. Paris offers iconic landmarks, museums, " +
          "restaurants, cafés, architecture, shopping and French city life.",

        link:"france.html"

      };

    }


    resultIcon.textContent =
      resultData.icon;


    resultTitle.textContent =
      resultData.title;


    resultText.textContent =
      resultData.text;


    resultLink.href =
      resultData.link;


    result.classList.add("show");


    nextBtn.style.display =
      "none";


    backBtn.style.display =
      "none";


    result.scrollIntoView({

      behavior:"smooth",

      block:"center"

    });

  }


  /* ========================================================
     INITIAL STATE
  ======================================================== */

  showQuestion(0);


})();

