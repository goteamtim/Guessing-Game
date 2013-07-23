$(document).ready(function() {
    $("#1").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 1;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#2").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 2;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#3").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 3;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#4").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 4;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#5").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 5;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#6").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 6;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#7").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 7;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#8").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 8;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#9").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 9;
        $(this).off();
        console.log(guess);
        gameLogic();
    });
    $("#10").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 10;
        $(this).off();
        console.log(guess);
        gameLogic();
    });

});

var time = new Date();
var timeNow = time.getHours();
    if (timeNow >4){
        document.getElementsByClassName('numberColor').defineProperty('background-color:black;');
    }
    
var guess;
result = "test";
//Initialize the winning number
var winningNum = Math.floor(Math.random() * 10) + 1;
guesses = 5;
function gameLogic() {
    if (guesses > 0) {
        if (guess > winningNum) {
            result = "Your guess is too high.";
            document.getElementById('result').innerHTML = result;
            guesses--;
            document.getElementById('guessLeft').innerHTML = guesses;
        } else if (guess < winningNum) {
            result = "Your guess is too low.";
            document.getElementById('result').innerHTML = result;
            guesses--;
            document.getElementById('guessLeft').innerHTML = guesses;
        } else {
            result = "Congrats, you won! Wanna play again?";
            document.getElementById('result').innerHTML = result;
            //break;
        }
    } else {
        var i = confirm("Sorry, you coudln't guess the number this time. Would you like to play again?");
        if (i==true){
            window.location.reload();
        }
        else{
            
        }
    }
}



