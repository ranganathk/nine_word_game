//console.log("Hi");

var Game = {
  arrayOfWords: ["abduction", "abolished", "adversity", "algorithm", "amplitude", "anxiously", "auctioned", "authorize", "benchmark", "bestowing", "bifurcate", "binocular", "biography", "blasphemy", "blueprint", "bothering", "boulevard", "breathing", "breakdown", "byproduct", "capturing", "cautioned", "certainly", "chemistry", "clampdown", "clergyman", "clipboard", "coastline", "cohabited", "combative", "comparing", "competing", "compliant", "comprised", "configure", "conspired", "constable", "contrived", "copyright", "countable", "cumlinate", "curtailed", "custodian", "customary", "dangerous", "defiantly", "deflation", "deformity", "deploying", "deporting", "diplomacy", "discharge", "discovery", "dislocate", "dismantle", "dragonfly", "duplicate", "education", "equitably", "exclusion", "excursion", "exhorting", "exploding", "exploring", "exporting", "expulsion"],
  score: 0,
  level: 1,
  timeForLevel: 90000,
  startGame: function() {
    Game.startLevel;
  }
  startLevel: function() {
    var arrayLength = arrayOfWords.length;
    var index = Math.floor((Math.random()*arrayLength));
    var word = arrayOfWords[index].split("");
    arrayOfWords.splice(index, 1);
    word.sort(function() {
      return 0.5 - Math.random();
    });
  }

}

function myFunction1() {
  alert('1');
}

 var myFunction2 = function() {
 	alert('2');
}

 var myFunction3 = function() {
 	alert('3');
}

 var myFunction4 = function() {
 	alert('4');
}

 var myFunction5 = function() {
 	alert('5');
}

 var myFunction6 = function() {
 	alert('6');
}

 var myFunction7 = function() {
 	alert('7');
}

 var myFunction8 = function() {
 	alert('8');
}

 var myFunction9 = function() {
 	alert('9');
}