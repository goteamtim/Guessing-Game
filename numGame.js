$(document).ready(function() {
    $("#1").click(function() {
        $(this).fadeTo("fast", .33);
        guess = 1;
        $(this).off();
        console.log(guess);
        gameLogic();
    });

});
var guess;
result = "test";
//Initialize the winning number
var winningNum = Math.floor(Math.random() * 11);
guesses = 5;
function gameLogic() {

    console.log(winningNum);

    do {
        //guess = prompt("What is your guess?");
//        //If something other than a number is entered, it fails and asks again.
//        Eventually this will be replaced by another function all together because
//        that function will collect the status of the div's and then collect input from a click and \n\
//        return an input.
        //if (isNaN(guess)) {
        //    guess = prompt("What is your guess?", "Please enter a number.");
        //     break;
        //  }
        //divGuess();
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
            break;
        }
    }
    while (guesses > 0);
}
;

one = 0;
two = 0;
three = 0;
four = 0;
five = 0;
six = 0;
seven = 0;
eight = 0;
nine = 0;
ten = 0;

function divGuess() {
    if ($("#1").click()) {
        guess = 1;
        console.log(guess);
        return guess;

    } else if ($("#2").click()) {
        guess = 2;
        console.log(guess);
        return guess;
    }
    ;

}
;

