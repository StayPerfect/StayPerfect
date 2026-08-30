

(function(){

  var questions =
    document.querySelectorAll("#perfect-match .question");

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
      index === 0 ? "hidden" : "visible";

    nextBtn.textContent =
      index === questions.length - 1
      ? "Show My Match →"
      : "Next →";

  }


  document.querySelectorAll(
    "#perfect-match .answer"
  ).forEach(function(button){

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

        return;
      }

      showResult();

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

      if(scores.hasOwnProperty(answer)){
        scores[answer]++;
      }

    });


    /*
     * PORTUGAL RESULTS
     *
     * The quiz can return:
     *
     * - Algarve
     * - Lisbon
     * - Porto
     * - Madeira
     * - Azores
     * - Northern / Central Portugal
     *
     * Madeira and Azores are intentionally included
     * because they are Portuguese destinations.
     */


    var coastScore =
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

    var islandScore =
      scores.islands;

    var romanticScore =
      scores.romance +
      scores.couple +
      scores.relax;

    var foodScore =
      scores.food +
      scores.culture;


    var results = [

      {
        name:"Madeira",
        icon:"🌋",
        title:"Your Match: Madeira",
        text:
          "Madeira is your perfect Portugal. " +
          "Discover dramatic volcanic landscapes, green mountains, " +
          "levada walks, ocean views, beautiful villages and outdoor adventures.",
        link:"madeira.html",
        score:
          islandScore * 5 +
          natureScore * 3 +
          adventureScore +
          coastScore
      },


      {
        name:"Azores",
        icon:"🌋",
        title:"Your Match: Azores",
        text:
          "The Azores are your perfect Portugal. " +
          "Explore volcanic landscapes, crater lakes, green countryside, " +
          "Atlantic coastlines, hiking trails and unforgettable nature.",
        link:"azores.html",
        score:
          islandScore * 5 +
          natureScore * 4 +
          adventureScore * 2
      },


      {
        name:"Algarve",
        icon:"🏖️",
        title:"Your Match: Algarve",
        text:
          "The Algarve is your perfect Portugal. " +
          "Enjoy golden beaches, dramatic cliffs, sunshine, coastal villages, " +
          "great food and relaxed days by the Atlantic.",
        link:"algarve.html",
        score:
          coastScore * 5 +
          romanticScore * 2 +
          foodScore +
          scores.relax
      },


      {
        name:"Lisbon",
        icon:"🏛️",
        title:"Your Match: Lisbon",
        text:
          "Lisbon is your perfect Portugal. " +
          "Discover historic neighbourhoods, architecture, viewpoints, " +
          "restaurants, culture, nightlife and the atmosphere of Portugal's capital.",
        link:"lisbon.html",
        score:
          cityScore * 5 +
          romanticScore * 2 +
          foodScore * 2
      },


      {
        name:"Porto",
        icon:"🍷",
        title:"Your Match: Porto",
        text:
          "Porto is your perfect Portugal. " +
          "Explore historic streets, the Douro, local cuisine, wine, " +
          "river views and one of Portugal's most atmospheric cities.",
        link:"porto.html",
        score:
          foodScore * 4 +
          cityScore * 3 +
          romanticScore
      },


      {
        name:"Northern & Central Portugal",
        icon:"🌿",
        title:"Your Match: Northern & Central Portugal",
        text:
          "Northern and Central Portugal are your perfect match. " +
          "Discover historic towns, countryside, mountains, local food, " +
          "wine regions and authentic Portuguese landscapes.",
        link:"portogallo.html",
        score:
          natureScore * 3 +
          foodScore * 2 +
          cityScore * 2 +
          romanticScore
      }

    ];


    results.sort(function(a,b){
      return b.score - a.score;
    });


    var resultData = results[0];


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

