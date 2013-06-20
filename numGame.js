result = "test";
//Initialize the winning number
    var winningNum = Math.floor(Math.random()*11);
    
function gameLogic() {
guesses = 0;

    do {
        guess = prompt("What is your guess?");
        //If something other than a number is entered, it fails and asks again.
        if (isNaN(guess)) {
            guess = prompt("What is your guess?", "Please enter a number.");
            break;
        }
        if (guess > winningNum) {
            result = "Your guess is too high.";
            console.log(result);
            document.getElementById('result').innerHTML = result;
            guesses++;
        } else if (guess < winningNum) {
            result = "Your guess is too low.";
            console.log(result);
            document.getElementById('result').innerHTML = result;
            guesses++;
        } else {
            result = "Congrats, you won!";
            console.log(result);
            document.getElementById('result').innerHTML = result;
            break;
        }
        
    }
    while (guesses < 5);
};
