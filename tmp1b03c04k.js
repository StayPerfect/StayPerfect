

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

    /* Ripristina la risposta precedentemente scelta */
    if(answers[index]){

      answerButtons.forEach(function(button){

        button.classList.toggle(
          "selected",
          button.getAttribute("data-score") === answers[index]
        );

      });

    } else {

      answerButtons.forEach(function(button){
        button.classList.remove("selected");
      });

    }

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
      mountains:0,
      cityscape:0,
      culture:0,
      islands:0

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
     * PORTUGAL PERFECT MATCH
     * RISULTATI POSSIBILI:
     *
     * Madeira
     * Azores
     * Algarve
     * Lisbon
     * Porto
     * Northern & Central Portugal
     * =====================================================
     */


    var madeiraScore =
      scores.islands * 5 +
      scores.nature * 2 +
      scores.adventure * 2 +
      scores.mountains +
      scores.coast;


    var azoresScore =
      scores.islands * 5 +
      scores.nature * 3 +
      scores.adventure * 2 +
      scores.mountains +
      scores.coast;


    var algarveScore =
      scores.coast * 4 +
      scores.relax * 3 +
      scores.romance * 2 +
      scores.beach;


    var lisbonScore =
      scores.city * 4 +
      scores.cityscape * 3 +
      scores.culture * 2 +
      scores.nightlife +
      scores.food;


    var portoScore =
      scores.city * 3 +
      scores.food * 3 +
      scores.culture * 2 +
      scores.cityscape +
      scores.romance;


    var northernCentralScore =
      scores.nature * 3 +
      scores.mountains * 3 +
      scores.food * 2 +
      scores.culture * 2 +
      scores.city;


    var results = [

      {
        name:"Madeira",
        icon:"🌋",
        title:"Your Match: Madeira",
        text:
          "Madeira is your perfect Portugal. Discover dramatic " +
          "mountains, volcanic landscapes, ocean views, hiking trails " +
          "and unforgettable Atlantic experiences.",
        link:"madeira.html",
        score:madeiraScore
      },

      {
        name:"Azores",
        icon:"🌿",
        title:"Your Match: Azores",
        text:
          "The Azores are your perfect Portugal. Explore volcanic " +
          "islands, green landscapes, crater lakes, ocean experiences " +
          "and spectacular nature.",
        link:"azores.html",
        score:azoresScore
      },

      {
        name:"Algarve",
        icon:"🏖️",
        title:"Your Match: Algarve",
        text:
          "The Algarve is your perfect Portugal. Enjoy golden beaches, " +
          "dramatic cliffs, sunshine, coastal towns, relaxed days " +
          "and beautiful Atlantic scenery.",
        link:"algarve.html",
        score:algarveScore
      },

      {
        name:"Lisbon",
        icon:"🏛️",
        title:"Your Match: Lisbon",
        text:
          "Lisbon is your perfect Portugal. Discover historic streets, " +
          "architecture, viewpoints, museums, restaurants, nightlife " +
          "and the energy of Portugal's capital.",
        link:"lisbon.html",
        score:lisbonScore
      },

      {
        name:"Porto",
        icon:"🍷",
        title:"Your Match: Porto",
        text:
          "Porto is your perfect Portugal. Explore historic streets, " +
          "the Douro, Portuguese food and wine, architecture and " +
          "an authentic northern atmosphere.",
        link:"porto.html",
        score:portoScore
      },

      {
        name:"Northern & Central Portugal",
        icon:"⛰️",
        title:"Your Match: Northern & Central Portugal",
        text:
          "Northern and Central Portugal are your perfect match. " +
          "Discover mountains, historic towns, countryside, local food, " +
          "wine regions and authentic Portuguese landscapes.",
        link:"portogallo.html",
        score:northernCentralScore
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

