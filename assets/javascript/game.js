// var name = target number array pool(19-120)

// var targetNumber is a blank placeholder array/string that we can populate with a math function further down the code, so that it can be repeated without reloading the pages
var targetNumber = " ";

// var name = crystal value array pool 

// the vars for the crystal values(1-12)
// should I set this as: var = crystalValues [a, b, c, d]? I think I should.
// var = crystal1
// var = crystal2
// var = crystal3
// var = crystal4

var crystalValues = [];

// var clickSum = hold the sum of guesses
var clickSum = ("")


var winsCounter = 0;
var lossCounter = 0;


// the following three functions (startGame, addValues, and roundComplete) mimic the example from Monday Nov 12 that showed the game loop.
function startGame(){
    clickSum = 0;
    // populate crystal values
    // populate target number
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    targetNumber = getRndInteger(19, 120)
        console.log(targetNumber)

    crystalValues = (crystalValues < 4)[
        getRndInteger(1,12)
]
console.log(crystalValues)
// office hours: cod from 30 to 38. target number works. what is the exact syntax for populating the crystalValues array with four index positions, using the getRndInteger(1,12)?
}

function addValues(){

}

function roundComplete(){
    if (clickSum > targetNumber){
        
        document.getElementById("win-lose").text = "you lose";
        lossCounter++;
        startGame();
    }else if (clickSum === targetNumber){
        
        document.getElementById("win-lose").text = "you win!";
        winsCounter++;
        startGame();
    }
    // if the points ===, trigger win
    // if the points are under, allow game to continue. I guess there wouldn't even be code for that?
}


// start game gets the game going, now that all the terms have been defined
startGame();

document.onclick = function(event){
    // sum of crystals
    // is value over the targetNumber
    // round complete

}