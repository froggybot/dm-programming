const game = () => {
    let pScore = 0;
    let cScore = 0;

    //function 2 start game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //function 2 play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach((hand) => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach((option) => {
            option.addEventListener("click", function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //call compare hands here~
                    compareHands(this.textContent, computerChoice);
                    //update img
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //update message
        const winner = document.querySelector(".winner");
        //checking for tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie!";
            return;
        }
        //check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins...";
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins...";
                cScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer wins...";
                cScore++;
                updateScore();
                return;
            }
        }
    };

    //calling all inner functions
    startGame();
    playMatch();
};

//call start game function!
game();
