//console.log("Hi");

var Game = {
  arrayOfWords: ["abduction", "abolished", "adversity", "algorithm", "amplitude", "anxiously", "auctioned", "authorize", "benchmark", "bestowing", "bifurcate", "binocular", "biography", "blasphemy", "blueprint", "bothering", "boulevard", "breathing", "breakdown", "byproduct", "capturing", "cautioned", "certainly", "chemistry", "clampdown", "clergyman", "clipboard", "coastline", "cohabited", "combative", "comparing", "competing", "compliant", "comprised", "configure", "conspired", "constable", "contrived", "copyright", "countable", "cumlinate", "curtailed", "custodian", "customary", "dangerous", "defiantly", "deflation", "deformity", "deploying", "deporting", "diplomacy", "discharge", "discovery", "dislocate", "dismantle", "dragonfly", "duplicate", "education", "equitably", "exclusion", "excursion", "exhorting", "exploding", "exploring", "exporting", "expulsion"],
  score: 0,
  level: 1,
  timeForLevel: 90000,
  gameRunning: false,
  randomword: function(){
    var arrayLength = Game.arrayOfWords.length;
    var index = Math.floor((Math.random()*arrayLength));
    var word = Game.arrayOfWords[index].split("");
    Game.arrayOfWords.splice(index, 1);
    return word.sort(0.5 - Math.random());
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
  
}