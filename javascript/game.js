
var Game = {
  arrayOfWords: ["abduction", "abolished", "adversity", "algorithm", "amplitude", "anxiously", "auctioned", "authorize", "benchmark", "bestowing", "bifurcate", "binocular", "biography", "blasphemy", "blueprint", "bothering", "boulevard", "breathing", "breakdown", "byproduct", "capturing", "cautioned", "certainly", "chemistry", "clampdown", "clergyman", "clipboard", "coastline", "cohabited", "combative", "comparing", "competing", "compliant", "comprised", "configure", "conspired", "constable", "contrived", "copyright", "countable", "cumlinate", "curtailed", "custodian", "customary", "dangerous", "defiantly", "deflation", "deformity", "deploying", "deporting", "diplomacy", "discharge", "discovery", "dislocate", "dismantle", "dragonfly", "duplicate", "education", "equitably", "exclusion", "excursion", "exhorting", "exploding", "exploring", "exporting", "expulsion"],
  score: 0,
  level: 1,
  timeForLevel: 0,
  gameRunning: false,
  levelReset: false,
  string: "",
  shufle: [],
  codeNo: [],
  letter: "",
  
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
    $('#game .secondary').css('visibility', 'visible');
    for (var i = 0; i < Game.shufle.length ; i++) {
      $($('#game .secondary')[i]).html(Game.shufle[i]);
    }
    Game.propagateLevel();
  },

  resetLevel:function(){
    Game.startLevel();
  },

  undoMove: function() {
    Game.letter = Game.string.substr(Game.string.length - 1);
    $($('#game .secondary')[Game.codeNo[Game.codeNo.length - 1]]).html(Game.letter);
    Game.codeNo.pop();
    Game.string = Game.string.slice(0, -1);
    $('#input-text').html(Game.string);
  },

  propagateLevel: function() {
    $('#input-text').html("");
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
    $('#input-text').html(Game.string);
    if ((Game.string).length == 9) {
      Game.submitAnswer();
    }
  },

  submitAnswer: function() {
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
      alert('Thank you for playing, your score is ' + Game.score);
    }
    Game.gameRunning = false;
    Game.score = 0;
    Game.string = "";
    $('#input-text').html(Game.string);
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
    Game.letter = $(this).html();
    $(this).html("");
    if (Game.letter == "") {
      //Do nothing
    } else {
      Game.codeNo.push($(this).data("code"));
    }
    Game.joinAnswer(Game.letter);
  });
});