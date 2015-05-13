//console.log("Hi");

var Game = {
  arrayOfWords: ["abduction", "abolished", "adversity", "algorithm", "amplitude", "anxiously", "auctioned", "authorize", "benchmark", "bestowing", "bifurcate", "binocular", "biography", "blasphemy", "blueprint", "bothering", "boulevard", "breathing", "breakdown", "byproduct", "capturing", "cautioned", "certainly", "chemistry", "clampdown", "clergyman", "clipboard", "coastline", "cohabited", "combative", "comparing", "competing", "compliant", "comprised", "configure", "conspired", "constable", "contrived", "copyright", "countable", "cumlinate", "curtailed", "custodian", "customary", "dangerous", "defiantly", "deflation", "deformity", "deploying", "deporting", "diplomacy", "discharge", "discovery", "dislocate", "dismantle", "dragonfly", "duplicate", "education", "equitably", "exclusion", "excursion", "exhorting", "exploding", "exploring", "exporting", "expulsion"],
  score: 0,
  level: 1,
  timeForLevel: 90000,
  gameRunning: false,
  levelReset: false,
  string: "",
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
    Game.startLevel(Game.randomword());
  },
  startLevel: function(shufle) {
    Game.topleft = shufle[0];
    Game.topcenter = shufle[1];
    Game.topright = shufle[2];
    Game.centerleft = shufle[3];
    Game.centercenter = shufle[4];
    Game.centerright = shufle[5];
    Game.bottomleft = shufle[6];
    Game.bottomcenter = shufle[7];
    Game.bottomright = shufle[8];
    Game.levelPoints = Math.floor(Game.timeForLevel/1000);

    $('#topleft').html(Game.topleft);
    $('#topcenter').html(Game.topcenter);
    $('#topright').html(Game.topright);
    $('#centerleft').html(Game.centerleft);
    $('#centercenter').html(Game.centercenter);
    $('#centerright').html(Game.centerright);
    $('#bottomleft').html(Game.bottomleft);
    $('#bottomcenter').html(Game.bottomcenter);
    $('#bottomright').html(Game.bottomright);

    Game.propagateLevel();
  },
  resetLevel: function() {
    Game.startLevel();

  },
  undoMove: function() {

  },
  propagateLevel: function() {
    $('#points').html(Game.timeForLevel);
    $('#score').html(Game.score);
    Game.propagator = window.setInterval(
      function() {
        if(Game.timeForLevel <= 0) {
          Game.endGame();
          clearInterval(Game.propagator);
        } else {
          $('#points').html(Game.levelPoints);    
          Game.levelPoints -= 1;
        }
      },
      1000
    );
  },
  joinAnswer: function(alphabet) {
    Game.string += alphabet
    if ((Game.string).length == 9) {
      Game.submitAnswer();
    }
  },
  submitAnswer: function() {
    if(Game.gameRunning) {
      console.log(Game.string);
      console.log(Game.word);
      if (Game.string == Game.origWord) {
        Game.score += Game.levelPoints;
        Game.level += 1;
        Game.timeForLevel = 90000;
      } else {
        alert('Your answer is incorrect');
      }
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
  $("#topleft").click(function() {
    Game.joinAnswer(Game.topleft);
    $(this).hide();
  });
  $("#topcenter").click(function() {
    Game.joinAnswer(Game.topcenter);
    $(this).hide();
  });
  $("#topright").click(function() {
    Game.joinAnswer(Game.topright);
    $(this).hide();
  });
  $("#centerleft").click(function() {
    Game.joinAnswer(Game.centerleft);
    $(this).hide();
  });
  $("#centercenter").click(function() {
    Game.joinAnswer(Game.centercenter);
    $(this).hide();
  });
  $("#centerright").click(function() {
    Game.joinAnswer(Game.centerright);
    $(this).hide();
  });
  $("#bottomleft").click(function() {
    Game.joinAnswer(Game.bottomleft);
    $(this).hide();
  });
  $("#bottomcenter").click(function() {
    Game.joinAnswer(Game.bottomcenter);
    $(this).hide();
  });
  $("#bottomright").click(function() {
    Game.joinAnswer(Game.bottomright);
    $(this).hide();
  });
});