var targetNumber = 0;
var clickSum = 0;
var winsCounter = 0;
var lossCounter = 0;

function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)}

function assignCrystalValue(){
    $("#crystals").children("h1").each(function(index, item){
        $(item).attr("value", getRndInteger(1,12));
        $(item).addClass("clickZone");
        })
    }

// the following three functions (startGame, addValues, and roundComplete) mimic the example from Monday Nov 12 that showed the game loop.

function startGame(){
    clickSum = 0;
    assignCrystalValue();
    targetNumber = getRndInteger(19,120)
    }
    
function roundComplete(){
    if (clickSum > targetNumber){
        document.getElementById("win-lose").innerHTML = "you lose";
        lossCounter++;
        startGame();
    }
    if (clickSum === targetNumber){
        document.getElementById("win-lose").innerHTML = "you win!";
        winsCounter++;
        startGame();
    }
}

// start game gets the game going, now that all the terms have been defined
startGame()

document.getElementById("target-number").innerHTML = targetNumber;
document.getElementById("win-tally").innerHTML = "Wins: " + winsCounter;
document.getElementById("loss-tally").innerHTML = "Losses: " + lossCounter;


$(".clickZone").on("click", function() {
    var crystalValue = ($(this).attr("value"));
    var crystalValueInt = parseInt(crystalValue);
    clickSum += crystalValueInt;
    document.getElementById("points-tally").innerHTML = clickSum;
    roundComplete()

    // if (clickSum === targetNumber) {
        
    //     document.getElementById("win-lose").text = "you win!";
    //     winsCounter++;
    //     startGame()
    //   }
  
    //   if (clickSum > targetNumber) {
    //     document.getElementById("win-lose").text = "you lose";
    //     lossCounter++;
    //     startGame()
    //   }
})

// roundComplete()


