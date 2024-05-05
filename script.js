let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");
const refresh = document.querySelector(".refresh");

// to reset the game
const resetGame = () =>{
    userScore = 0;
    compScore = 0;
    userScoreDisplay.innerText = 0;
    compScoreDisplay.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "black";

}


// to generate a computer choice
const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissor"];
    const randomIndex = Math.floor(Math.random()*3);

    return options[randomIndex];
}

// for a draw situation
const drawGame = () =>{

    msg.innerText = "Draw! play again";
    msg.style.backgroundColor = "black";
}


// to show the winner
const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScoreDisplay.innerText = ++userScore;
    }

    else{
        
        msg.innerText = `You Lose! your ${userChoice} got beaten by ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScoreDisplay.innerText = ++compScore;
    }
}

// main working of the game
const playGame = (userChoice) => {
    

    // generate comp choice
    const compChoice = genCompChoice();
    

    // check winner
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (compChoice === "scissor") ? true : false;
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "rock") ? true : false;
        }
        else if(userChoice === "scissor"){
            userWin = (compChoice === "paper") ? true : false;
        }

        showWinner(userWin , userChoice , compChoice);
    }


} 

// to select a choice from user side
choices.forEach((choice) => {
    
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    })
})

// button to reset game
refresh.addEventListener("click" , resetGame);