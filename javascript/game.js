//console.log("Hi");

var Game = {
  arrayOfWords: ["abduction", "abolished", "adversity", "algorithm", "amplitude", "anxiously", "auctioned", "authorize", "benchmark", "bestowing", "bifurcate", "binocular", "biography", "blasphemy", "blueprint", "bothering", "boulevard", "breathing", "breakdown", "byproduct", "capturing", "cautioned", "certainly", "chemistry", "clampdown", "clergyman", "clipboard", "coastline", "cohabited", "combative", "comparing", "competing", "compliant", "comprised", "configure", "conspired", "constable", "contrived", "copyright", "countable", "cumlinate", "curtailed", "custodian", "customary", "dangerous", "defiantly", "deflation", "deformity", "deploying", "deporting", "diplomacy", "discharge", "discovery", "dislocate", "dismantle", "dragonfly", "duplicate", "education", "equitably", "exclusion", "excursion", "exhorting", "exploding", "exploring", "exporting", "expulsion"],
  score: 0,
  level: 1,
  timeForLevel: 0,
  gameRunning: false,
  levelReset: false,
  string: "",
  shufle: [],
  
  randomword: function(){
    var arrayLength = Game.arrayOfWords.length;
    var index = Math.floor((Math.random()*arrayLength));
    Game.origWord = Game.arrayOfWords[index];
    console.log(Game.origWord);
    Game.word = Game.arrayOfWords[index].split("");
    Game.arrayOfWords.splice(index, 1);
    return (Game.word).sort(0.5 - Math.random());// flag this line //
  },

  startGame: function() {
    Game.gameRunning = true;
    Game.startLevel();
  },

  startLevel: function() {
    Game.shufle = Game.randomword();
    $('button').css('visibility', 'visible');
    for (var i = 0; i < Game.shufle.length ; i++) {
      $($('td button')[i]).html(Game.shufle[i]);
    }
    Game.propagateLevel();
  },

  resetLevel: function() {
    //Game.startLevel();
  },

  undoMove: function() {

  },

  propagateLevel: function() {
    clearInterval(Game.propagator);
    Game.timeForLevel = 90;
    $('#points').html(Game.timeForLevel);
    $('#score').html(Game.score);
    Game.propagator = window.setInterval(
      function() {
        if(Game.timeForLevel == 0) {
          Game.endGame();
        } else {
          $('#points').html(Game.timeForLevel);    
          Game.timeForLevel -= 1;
        }
      },
      1000
    );
  },

  joinAnswer: function(alphabet) {
    Game.string = Game.string.concat(alphabet);
    console.log(Game.string);
    if ((Game.string).length == 9) {
      Game.submitAnswer();
    }
  },

  submitAnswer: function() {
    // if(Game.gameRunning) {
    if (Game.string == Game.origWord) {
      Game.levelPoints = Game.timeForLevel;
      Game.score += Game.levelPoints;
      Game.level += 1;
      Game.string = "";
      Game.startLevel();
    } else {
      Game.timeForLevel = 0;
      Game.endGame();
    }
  },

  help: function() {
    alert("Just spell the word in the right order to score some points and progress to the next level.");
  },

  endGame: function() {
    Game.levelPoints = 0;
    $('#points').html(Game.levelPoints);
    if(Game.gameRunning) {
      alert('Game Over!');
    }
    Game.gameRunning = false;
  }
};

$(document).ready(function() {
  $("#start").click(function() {
    Game.startGame();
  });
  $("#reset").click(function() {
    Game.resetLevel();
  });
  $("#undo").click(function() {
    Game.undoMove();
  });
  $("#help").click(function() {
    Game.help();
  });
  $(".secondary").click(function() {
    var letter = $(this).html();
    $(this).html("");
    Game.joinAnswer(letter);
  });
});