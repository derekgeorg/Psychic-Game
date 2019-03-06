    //Global variables needed:
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar = [];
    var letters = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //Computer chooses random letter A-Z
    var computerLetter = letters[Math.floor((Math.random() * 26))];
        console.log(computerLetter);
    
    //User input keys letter A-Z
    document.onkeyup = function(event){
    var userLetter = event.key;
    console.log(userLetter);
    //If user input !== computer choice, list letter as Guesses so far
    //Any time you need to push something into an array, it uses this format:
    // nameOfArray.push(variableYouWantToPush)
    guessesSoFar.push(userLetter);
    console.log(guessesSoFar);
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
    guessesLeft-- 
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    
    //On input determine if letter chosen is letter computer chose
    //If user input === computer choice, increase Wins by 1
    if(computerLetter === userLetter){
        wins++
        alert("You Win!");
        document.getElementById("wins").innerHTML = wins;
        guessesSoFar=[];
        document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
        guessesLeft=10;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        //Restart game
        computerLetter = letters[Math.floor((Math.random() * 26))];
        console.log(computerLetter);
    }
    // When guessesLeft = 0 Alert: you lose!
    else if (guessesLeft == 0){
        //If user input !== computer choice, increase Losses by 1
        losses++
        computerLetter=letters[Math.floor((Math.random() * 26))];
        // When guessesLeft = 0 Alert: No more guesses left. You lose!
        alert("No more guesses left. You lose!")
        document.getElementById("losses").innerHTML = losses;
        guessesLeft=10;
        document.getElementById("guessesLeft").innerHTML = guessesLeft
        guessesSoFar=[];
        document.getElementById("guessesSoFar").innerHTML = guessesSoFar; 
        //Restart game
        computerLetter = letters[Math.floor((Math.random() * 26))];
        console.log(computerLetter);
    }
}

    
