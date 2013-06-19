var result = "test";
//Initialize the winning number
    var winningNum = Math.floor(Math.random()*11);
    var guesses = 0;
function gameLogic() {
console.log(winningNum);

    do {
        guess = prompt("What is your guess?");
        if (isNaN(guess)) {
            guess = prompt("What is your guess?", "Please enter a number.");
            break;
        }

        if (guess > winningNum) {
            var result = "Your guess is too high.";
            console.log(result);
            guesses++;
        } else if (guess < winningNum) {
            var result = "Your guess is too low.";
            console.log(result);
            guesses++;
        } else {
            result = "Congrats, you won!";
            console.log(result);
            break;
        }
        
    }
    while (guesses < 5);
}
;
