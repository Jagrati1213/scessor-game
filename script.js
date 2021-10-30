//  game start...

// store score here...
var humanScore = 01;
var AiScore = 01;

// display how wins 
var ShowWinner = document.querySelector(".winning-box .show-win");

// display score
var userscore = document.querySelector(".score .user");
var cmpscore = document.querySelector(".score .computer");

// display choices
var userDisplay = document.querySelector(".winning-box #user-display");
var cpmDisplay = document.querySelector(".winning-box #cpm-display");

//  now get the computer choices
var computerRandom = Math.floor(Math.random() * 3);
var computerArray = ["rock", "paper", "scissor"];
var computerchoice = computerArray[computerRandom];

// start the game
function StartGame(userchoice) {

    winner(userchoice, computerchoice);
}
// winning conditions
function winner(a, b) {

    userDisplay.innerHTML = a;
    cpmDisplay.innerHTML = b;
// 1st
    if (a == "rock") {
        if (b == "paper") {
            ShowWinner.innerHTML = "computer";
            cmpscore.innerHTML=AiScore++;

        } else if (b == "scissor") {
            ShowWinner.innerHTML = "user";
            userscore.textContent=humanScore++;
        }
        else {
            ShowWinner.innerHTML = "tie";
        }
    }
    // 2nd
    else if (a == "paper") {
        if (b == "scissor") {
            ShowWinner.innerHTML = "computer";
            cmpscore.innerHTML=AiScore++;

        }
        else if (b == "rock") {
            ShowWinner.innerHTML = "user";
            userscore.textContent=humanScore++;

        }
        else {
            ShowWinner.innerHTML = "tie";
        }
    }
    // 3rd
    else if (a == "scissor") {
        if (b == "rock") {
            ShowWinner.innerHTML = "computer";
            cmpscore.innerHTML=AiScore++;

        } else if (b == "paper") {
            ShowWinner.innerHTML = "user"
            userscore.textContent=humanScore++;
        }
        else {
            ShowWinner.innerHTML = "tie";
        }
    }

    else {
        ShowWinner.innerHTML = "tie"
    }

}