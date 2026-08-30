

(function(){

"use strict";

var questions = document.querySelectorAll(".question");
var answersButtons = document.querySelectorAll(".answer");

var nextBtn = document.getElementById("nextBtn");
var backBtn = document.getElementById("backBtn");
var progressBar = document.getElementById("progressBar");

var result = document.getElementById("result");
var resultIcon = document.getElementById("resultIcon");
var resultTitle = document.getElementById("resultTitle");
var resultText = document.getElementById("resultText");
var resultLink = document.getElementById("resultLink");

var current = 0;
var answers = [];


/* =========================
   SHOW QUESTION
========================= */

function showQuestion(index){

  questions.forEach(function(question, i){

    question.classList.toggle(
      "active",
      i === index
    );

  });

  if(progressBar && questions.length){

    progressBar.style.width =
      (((index + 1) / questions.length) * 100) + "%";

  }

  if(backBtn){

    backBtn.style.visibility =
      index === 0 ? "hidden" : "visible";

  }

  if(nextBtn){

    nextBtn.textContent =
      index === questions.length - 1
        ? "Show My Match →"
        : "Next →";

  }

}


/* =========================
   ANSWER BUTTONS
========================= */

answersButtons.forEach(function(button){

  button.addEventListener("click", function(event){

    event.preventDefault();

    var question =
      button.closest(".question");

    if(!question){
      return;
    }

    question
      .querySelectorAll(".answer")
      .forEach(function(item){

        item.classList.remove("selected");

      });

    button.classList.add("selected");

    answers[current] =
      button.getAttribute("data-score");

  });

});


/* =========================
   NEXT
========================= */

nextBtn.addEventListener("click", function(event){

  event.preventDefault();

  if(!answers[current]){
    return;
  }

  if(current < questions.length - 1){

    current++;

    showQuestion(current);

    return;

  }

  showResult();

});


/* =========================
   BACK
========================= */

backBtn.addEventListener("click", function(event){

  event.preventDefault();

  if(current > 0){

    current--;

    showQuestion(current);

  }

});


/* =========================
   RESULT
   SPAIN CONTINENTAL ONLY
========================= */

function showResult(){

  var scores = {

    beach:0,
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
    coast:0,
    mountains:0,
    cityscape:0,
    culture:0

  };


  answers.forEach(function(answer){

    if(Object.prototype.hasOwnProperty.call(scores, answer)){

      scores[answer]++;

    }

  });


  var beachScore =
    scores.beach +
    scores.coast +
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


  /*
   * ONLY MAINLAND SPAIN
   *
   * No:
   * Mallorca
   * Menorca
   * Ibiza
   * Formentera
   * Balearic Islands
   * Canary Islands
   */

  var continentalResults = [

    {
      name:"Valencia",
      icon:"🏖️",
      title:"Your Match: Valencia",
      text:
        "Your perfect match is Valencia, on Spain's Mediterranean mainland. " +
        "Enjoy beautiful beaches, great food, historic streets, culture " +
        "and a relaxed coastal atmosphere.",
      link:"valencia.html",
      score:
        beachScore * 4 +
        foodScore * 2 +
        cityScore * 2 +
        natureScore
    },


    {
      name:"Madrid",
      icon:"🏙️",
      title:"Your Match: Madrid",
      text:
        "Your perfect match is Madrid, the vibrant capital of mainland Spain. " +
        "Discover museums, architecture, restaurants, neighbourhoods, " +
        "nightlife and Spanish city life.",
      link:"madrid.html",
      score:
        cityScore * 4 +
        foodScore * 2 +
        scores.culture * 2 +
        scores.nightlife
    },


    {
      name:"Andalusia",
      icon:"🍷",
      title:"Your Match: Andalusia",
      text:
        "Your perfect match is Andalusia in southern mainland Spain. " +
        "Discover tapas, historic cities, beaches, white villages, " +
        "beautiful landscapes and authentic Spanish culture.",
      link:"andalusia.html",
      score:
        foodScore * 3 +
        beachScore * 2 +
        natureScore * 2 +
        cityScore
    },


    {
      name:"Galicia",
      icon:"⛰️",
      title:"Your Match: Galicia",
      text:
        "Your perfect match is Galicia in northern mainland Spain. " +
        "Explore dramatic Atlantic coastlines, green landscapes, " +
        "beautiful towns, local food and outdoor experiences.",
      link:"galicia.html",
      score:
        natureScore * 4 +
        scores.coast * 2 +
        foodScore +
        scores.adventure
    }

  ];


  continentalResults.sort(function(a,b){

    return b.score - a.score;

  });


  var resultData =
    continentalResults[0];


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


/* =========================
   INITIAL STATE
========================= */

showQuestion(0);

})();

