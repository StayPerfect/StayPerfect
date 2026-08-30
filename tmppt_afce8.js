

(function(){

  var questions =
    document.querySelectorAll("#perfect-match .question");

  var answerButtons =
    document.querySelectorAll("#perfect-match .answer");

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

    questions.forEach(function(question, i){

      question.classList.toggle(
        "active",
        i === index
      );

    });

    var progress =
      ((index + 1) / questions.length) * 100;

    if(progressBar){
      progressBar.style.width =
        progress + "%";
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

    answerButtons.forEach(function(button){

      button.classList.toggle(
        "selected",
        answers[index] ===
        button.getAttribute("data-score")
      );

    });

  }


  answerButtons.forEach(function(button){

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


  nextBtn.addEventListener(
    "click",
    function(){

      if(!answers[current]){
        return;
      }

      if(current < questions.length - 1){

        current++;

        showQuestion(current);

      } else {

        showResult();

      }

    }
  );


  backBtn.addEventListener(
    "click",
    function(){

      if(current > 0){

        current--;

        showQuestion(current);

      }

    }
  );


  function showResult(){

    var scores = {

      coast:0,
      mountains:0,
      villages:0,
      nature:0,
      relax:0,
      adventure:0,
      romance:0,
      culture:0,
      couple:0,
      family:0,
      friends:0,
      solo:0

    };


    answers.forEach(function(answer){

      if(
        Object.prototype.hasOwnProperty.call(
          scores,
          answer
        )
      ){

        scores[answer]++;

      }

    });


    /*
     * =====================================================
     * CORSICA PERFECT MATCH
     *
     * Risultati esclusivamente Corsica:
     *
     * Corsican Coast
     * Corsican Mountains
     * Corsican Villages
     * Corsica Nature & Adventure
     * =====================================================
     */


    var coastScore =
      scores.coast * 4 +
      scores.relax * 2 +
      scores.romance +
      scores.family;


    var mountainScore =
      scores.mountains * 4 +
      scores.adventure * 3 +
      scores.nature * 2 +
      scores.solo;


    var villageScore =
      scores.villages * 4 +
      scores.culture * 3 +
      scores.romance * 2 +
      scores.food;


    var natureScore =
      scores.nature * 4 +
      scores.adventure * 2 +
      scores.mountains * 2 +
      scores.solo;


    var results = [

      {
        name:"Corsican Coast",
        icon:"🏖️",
        title:"Your Match: Corsican Coast",
        text:
          "The Corsican coast is your perfect match. " +
          "Discover turquoise water, beautiful beaches, dramatic " +
          "coastlines, seaside villages and unforgettable Mediterranean scenery.",
        link:"corsican-coast.html",
        score:coastScore
      },

      {
        name:"Corsican Mountains",
        icon:"⛰️",
        title:"Your Match: Corsican Mountains",
        text:
          "The Corsican mountains are your perfect match. " +
          "Explore hiking trails, rugged peaks, forests, valleys " +
          "and spectacular outdoor landscapes.",
        link:"corsican-mountains.html",
        score:mountainScore
      },

      {
        name:"Corsican Villages",
        icon:"🏘️",
        title:"Your Match: Corsican Villages",
        text:
          "Corsica's villages are your perfect match. " +
          "Discover hilltop villages, traditional architecture, " +
          "local food, culture and authentic Corsican life.",
        link:"corsican-villages.html",
        score:villageScore
      },

      {
        name:"Corsica Nature & Adventure",
        icon:"🌿",
        title:"Your Match: Corsica Nature & Adventure",
        text:
          "Corsica's wild nature is your perfect match. " +
          "Discover forests, rivers, mountains, coastal landscapes " +
          "and unforgettable outdoor adventures.",
        link:"corsican-mountains.html",
        score:natureScore
      }

    ];


    results.sort(function(a, b){

      return b.score - a.score;

    });


    var resultData =
      results[0];


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


  showQuestion(0);

})();

