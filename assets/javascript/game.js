var targetNumber = 0;

// var clickSum = hold the sum of guesses
var clickSum = 0;


var winsCounter = 0;
var lossCounter = 0;

function resetHTML

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }

function assignCrystalValue(){console.log("hello")
    $("#crystals").children("h1").each(function(index, item){
        $(item).data("value", getRndInteger(1,12))
    })
}

$('h1').on('click', function () {
    console.log($(this).data("value"))

})
assignCrystalValue()


// the following three functions (startGame, addValues, and roundComplete) mimic the example from Monday Nov 12 that showed the game loop.
function startGame(){
    clickSum = 0;
    assignCrystalValue()
    // populate target number
    
    targetNumber = getRndInteger(19, 120)
        console.log(targetNumber)

    // for (let crystalValues = 0; crystalValues < 4; crystalValues++) {
    //     getRndInteger(1,12);
    //     } 
    // (crystalValues < 4)[
    //     getRndInteger(1,12)
    }

// office hours: code from 30 to 38. target number works. what is the exact syntax for populating the crystalValues array with four index positions, using the function (argument): getRndInteger(1,12)? 
// crystalValues.push(getRndInteger(1,12))


function addValues(){

}

function roundComplete(){
//     if (clickSum > targetNumber){
        
//         document.getElementById("win-lose").text = "you lose";
//         lossCounter++;
//         startGame();
//     }else if (clickSum === targetNumber){
        
//         document.getElementById("win-lose").text = "you win!";
//         winsCounter++;
//         startGame();
//     }
//     // if the points ===, trigger win
//     // if the points are under, allow game to continue. I guess there wouldn't even be code for that?
// }


// start game gets the game going, now that all the terms have been defined
// startGame()

// document.onclick = function(event)
    // sum of crystals
    // is value over the targetNumber
    // round complete






    // var name = target number array pool(19-120)

// var targetNumber is a blank placeholder array/string that we can populate with a math function further down the code, so that it can be repeated without reloading the pages