$(document).ready(function(){
    $("td").click(function(){
        $(this).fadeTo("slow",.33);
});


});
//    $("#start").click(gameLogic());
//    $("#reset").click(window.location.reload());
result = "test";
//Initialize the winning number
    var winningNum = Math.floor(Math.random()*11);
    
function gameLogic() {
guesses = 5;
console.log(winningNum);

    do {
        guess = prompt("What is your guess?");
        //If something other than a number is entered, it fails and asks again.
        if (isNaN(guess)) {
            guess = prompt("What is your guess?", "Please enter a number.");
            break;
        }
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
};
