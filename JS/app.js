//! Name of the game? R-P-S. || DONE
//TODO Must have an interactive menu screen || DONE
//TODO Once selecting the "START" must animate into storyline
//TODO Must have a "Tutorial" || DONE
//TODO Must have a way to Win/Lose the game || DONE
//TODO Must have a way to keep track of the score || DONE
//TODO Once selecting the "Credits" it should just show my name and everything used. || DONE
//? Figure out how the dialogue will be
//? Figure out if it is possible for you to "Select your opponent" *future stuff*
//* Add a secret card "Alligator" as that would be a +5 to score. Figure out how to add it into the game. || DONE

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const titleMusic = document.getElementById("titleMusic");
const ageVerify = document.querySelector("#loadingText");
const noBattle = document.getElementById("noGameStart");
const battleTheme = document.getElementById("battleMusic");
const topBar = document.getElementById("movieTop");
const bottomBar = document.getElementById("movieBottom");
const playCards = document.getElementById("cards");
const titleOfGame = document.getElementById("gameTitle");
const mainMenuButtons = document.getElementById("mainMenuButtons");
const flowerImage = document.querySelector("#flowerImg");
const bgImageBl = document.querySelector("#bubbleImg");
const spaceImg = document.querySelector("#spaceImg");

//! When the window first opens
//? This code runs and asks an 'Age Verification' question
document.getElementById("refreshBtn").style.display = "none";
window.onload = function(){
    ageVerify.innerText = "Are you over the Age of 18?";
}

//! Clicking the "YES" button
//? This code will go to the main menu of the game
yesBtn.addEventListener("click", gameMenu);
function gameMenu() {
    titleMusic.play();
    document.querySelector("header").style.display = "none";
}

//! Clicking the "NO" button:
noBtn.addEventListener("click", tooBad);
function tooBad() {    
    const message = document.getElementById("textAge");
    message.innerText = "Not old enough!";
    message.style.textAlign = "center";
    document.querySelector("#yesBtn").style.display = "none";
    document.querySelector("#noBtn").style.display = "none";
    document.querySelector("#loadingText").style.display = "none";
    document.querySelector("#refreshBtn").style.display = "block";
    ageVerify.style.marginTop = "30px";
}

//! Clicking "NO" = "REFRESH" will appear 
const refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click", reload);
function reload() {
    window.location.reload();
};

//! When pressing "TUTORIAL" button
const tutorialBtn = document.getElementById("tutorialBtn");
tutorialBtn.addEventListener("click", learnGame);

function learnGame() {
    titleMusic.play();
    const gameRulez = document.getElementById("gameRule");
    const isHidden = gameRulez.style.display === "none" || gameRulez.style.display === "";
    
    gameRulez.style.display = isHidden ? "block" : "none";
    if (isHidden) {
        gameRulez.style.border = "4px solid #cb738289";
        const learnSpan = gameRulez.querySelectorAll(".rules");
        learnSpan[0].innerText = "RPS is Rock Paper Scissors; just like the classic game!";
        learnSpan[1].innerText = "The rules are simple, rock beats scissors, scissors beat paper, paper beats rock.";
        learnSpan[2].innerText = "However, there might be something special within the game as well.";
        learnSpan[3].innerText = "Will this secret appear in your game?";
    }
}

//! When pressing "CREDITS" button
const creditsBtn = document.getElementById("creditsBtn");
creditsBtn.addEventListener("click", showCredits);

function showCredits() {
    titleMusic.play();
    const appreciate = document.getElementById("appreciation");
    const isHidden = appreciate.style.display === "none" || appreciate.style.display === "";
    
    appreciate.style.display = isHidden ? "block" : "none";
    if (isHidden) {
        appreciate.style.border = "4px solid #cb738289";
        const creditSpans = appreciate.querySelectorAll(".staff");
        creditSpans[0].innerText = "Music: Natasha E.";
        creditSpans[1].innerText = "Game Design: Natasha E.";
        creditSpans[2].innerText = "Art: Natasha E. || Madeline E. || Alexander E.";
        creditSpans[3].innerText = "Extra Credits: Google Fonts || Bootstrap || Pixabay.com || ChatGPT";
    }
}

//! Clicking the "START" button on the menu
const startGame = document.getElementById("mainStart");
startGame.addEventListener("click", start);

function start() {
    titleMusic.pause();
    titleMusic.currentTime = 0;
    document.querySelector("#movieTop").removeAttribute('hidden');
    document.querySelector("#movieBottom").removeAttribute('hidden');
    mainMenuButtons.classList.add("fadeOut");
    flowerImage.classList.add("fadeOut");    
    
    setTimeout(theAnnouncement, 5000);
}

//! Dialogue Section
const announcerDialogLines = [
    "Welcome to the final round of R-P-S!",
    "Everyone give them a round of applause!",
    "*audience cheers*",
    "I am your announcer, Toxtill, coming to you live with the action!",
    "Today we have an amazing game that will keep you on your toes!",
    "So we have--OH! It that the reigning champion I see?",
    "I DON'T BELIVE IT FOLKS! THiS RPS BEGINNER IS UP AGAINST CRAZPICC, THE REIGNING CHAMPION FOR THE PAST 15 YEARS!"
]

let currentLine = 0;

function theAnnouncement() {
    const announcer = document.getElementById("announcerGuy");
    const opponentTheme = document.getElementById("announcerMusic");
    const nextBtn = document.getElementById("nextBtn");
    const mainText = document.getElementById("mainTalk");


    opponentTheme.play();
    document.querySelector("#announcerGuy").removeAttribute('hidden');
    mainTalk.textContent = announcerDialogLines[currentLine];

    nextBtn.addEventListener("click", () => {
        currentLine++;
        if(currentLine < announcerDialogLines.length) {
            mainTalk.textContent = dialogLines[currentLine];
        } else {
            announcer.setAttribute('hidden', true);
            currentLine = 0;
        }
    })
}


//! Main Game Section
//? This section includes a "COUNTDOWN TIMER", "CARDS" and "MISC"
const yesBattle = document.getElementById("yesGameStart");
yesBattle.addEventListener("click", beginBattle);

function beginBattle() {
    titleMusic.pause();
    opponentTheme.pause();
    titleMusic.currentTime = 0;
    battleTheme.play();
    document.querySelector("#yesGameStart").style.display = "none";
    document.querySelector("#noGameStart").style.display = "none";
    document.getElementById("mainGameScores").style.visibility = "visible";
    document.querySelector("#bubbleImg").style.display = "none";
    playCards.removeAttribute('hidden');
    document.querySelector("#movieTop").style.visibility = "hidden";
    document.querySelector("#movieBottom").style.visibility = "hidden";

    //! Countdown TIMER
    let timeLeft = 120; // 2 minutes in seconds
    function updateTimer() {
        const timerDisplay = document.getElementById('time');
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Game Over!";
        } else {
            timeLeft--;
        }
    }
    updateTimer(); 
    const timerInterval = setInterval(updateTimer, 1000);
    
    //! RPS Section
    let playerScore = 0;
    let opponentScore = 0;
    let alligatorUsedAt = [];
    
    //? These are the button choices
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    const alligatorBtn = document.querySelector('.alligator');
    
    //? This is the score display
    const playerScoreBoard = document.querySelector('.playerScore');
    const opponentScoreBoard = document.querySelector('.opponentScore');
    const tieResults = document.querySelector('.ifTie');
    
    //? This is the secret Alligator card
    const alligatorAppearance = [7, 19, 31, 40, 51];
    function showAlligatorAppearanceReached() {
        if (alligatorAppearance.includes(playerScore) && !alligatorUsedAt.includes(playerScore)) {
            alligatorBtn.removeAttribute('hidden');
        }
    }    
    
    function computerChoices() {
        const opponentOptions = ['rock', 'paper', 'scissors']
        const choiceNumber = Math.floor(Math.random() * 3);
        return opponentOptions[choiceNumber];
    }
    
    function clearStatus() {
        tieResults.classList.remove("plusOne","KeepTrying", "alligatorSurprise", "ifTie");
    }

    function checkWinner(player, opponent) {
        clearStatus();

        if (player === opponent) {
            tieResults.innerText = 'TIE!';
            tieResults.classList.add("ifTie");
        } else if (
            (player === 'rock' && opponent === 'scissors') ||
            (player === 'scissors' && opponent === 'paper') ||
            (player === 'paper' && opponent === 'rock') ||
            (player === 'alligator')
        ) {
            playerScore++;
            playerScoreBoard.innerText = playerScore;
            tieResults.innerText = "+1 POINT!";
            tieResults.classList.add("plusOne");
        } else {
            opponentScore++;
            opponentScoreBoard.innerText = opponentScore;
            tieResults.innerText = "KEEP GOING!";
            tieResults.classList.add("keepTrying");
        }
        setTimeout(() => {
            clearStatus();
            tieResults.innerText = "";
        }, 3000);
        
        showAlligatorAppearanceReached();
    }
    
    //! Event Listeners for the buttons
    rockBtn.addEventListener("click", () => {
        const opponent = computerChoices();
        checkWinner("rock", opponent);
    });
    
    paperBtn.addEventListener("click", () => {
        const opponent = computerChoices();
        checkWinner("paper", opponent);
    });
    
    scissorBtn.addEventListener("click", () => {
        const opponent = computerChoices();
        checkWinner("scissors", opponent);
    });
    
    alligatorBtn.addEventListener("click", () => {
        clearStatus();

        playerScore += 5;
        playerScoreBoard.innerText = playerScore;
        tieResults.innerText = "GATOR POWER! +5 POINTS!";
        tieResults.classList.add("alligatorSurprise");
        alligatorUsedAt.push(playerScore);
        alligatorBtn.setAttribute('hidden', true);
    
        setTimeout(() => {
            clearStatus();
            tieResults.innerText = "";
        }, 5000);

        showAlligatorAppearanceReached(); 
    });
}
