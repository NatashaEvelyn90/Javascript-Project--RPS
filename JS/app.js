//TODO The stuff to do list!
//! Name of the game? R-P-S. || DONE
//TODO Must have an interactive menu screen || DONE
//TODO Once selecting the "START" must animate into storyline || DONE
//TODO Must have a "Tutorial" || DONE
//TODO Must have a way to Win/Lose the game || DONE
//TODO Must have a way to keep track of the score || DONE
//TODO Once selecting the "Credits" it should just show my name and everything used. || DONE
//? Figure out how the dialogue will be || DONE
//? Figure out if it is possible for you to "Select your opponent" *future stuff*
//* Add a secret card "Alligator" as that would be a +5 to score. Figure out how to add it into the game. || DONE

//* MUSIC / AUDIO Section
// #region Music Selections
const titleMusic = document.getElementById("titleMusic"); //? This is the music that plays in the menu
const announcerMusic = document.getElementById("announcerMusic"); //? This plays during cutscene
const battleTheme = document.getElementById("opponentMusic"); //? This music plays when it is time to RPS!
// #endregion

//*MAIN MENU Section
// #region Main Menu Selections
const mainMenuButtons = document.getElementById("mainButtons"); 
const flowerImage = document.querySelector("#flowerImg"); //* Background image for main menu
const sparkles = document.querySelector("#sparkles"); //* Background for small screen
const bgImageBl = document.querySelector("#bubbleImg"); //* Background image for dialog section
const spaceImg = document.querySelector("#spaceImg"); //* Background image for R-P-S section
const blossomImg = document.querySelector("#blossomImg");
// #endregion


//* Extra stuff
// #region Extra stuff
const playCards = document.getElementById("cards");
const yesGameStart = document.getElementById("yesGameStart");
// #endregion

// ? - - - - - - - - - - - - - - - - - 
// * - - - - - - - - - - - - - - - - - 
//! Begin main Game Section below!
// * - - - - - - - - - - - - - - - - - 
// ? - - - - - - - - - - - - - - - - - 

//! When you launch the page
//#region "HEADER"
//? This code runs and asks an "AGE VERIFICATION" question
const ageVerify = document.querySelector("#loadingText"); 

document.getElementById("refreshBtn").style.display = "none";
window.onload = function(){
    ageVerify.innerText = "Are you over the Age of 18?";
}
// #endregion

//! Clicking the "NO" button:
// #region "NO" button
//? This code will give you a message as well 
const noBtn = document.getElementById("noBtn"); 
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
// #endregion

//! Clicking "REFRESH" button
// #region "REFRESH" button
//? Refresh button only appears once you click the "NO" button
const refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click", reload);

function reload() {
    window.location.reload();
};
// #endregion

//! Clicking the "YES" button
// #region "YES" button
//? This code will go to the main menu of the game
const yesBtn = document.getElementById("yesBtn"); 
const titleScroll = document.getElementById("titleScroll");
const musicButtonOne = document.getElementById("audioButtonOne");


yesBtn.addEventListener("click", gameMenu);
function gameMenu() {
    titleMusic.play();
    document.querySelector("header").style.display = "none";
    titleScroll.removeAttribute("hidden");
    
    //? "PLAY / PAUSE" Audio 
    musicButtonOne.removeAttribute("hidden");
    musicButtonOne.addEventListener("click", audioPause);
    function audioPause() {
        if(titleMusic.paused) {
            titleMusic.play();
            musicButtonOne.innerText = "PAUSE";
        } else {
            titleMusic.pause();
            musicButtonOne.innerText = "🎵";
        }
    }
}
// #endregion

// TODO MUST FIX THIS SECTION
//! When pressing "TUTORIAL" button
// #region "LEARN THE GAME" section
//? This teaches you the rules of the game
const tutorialBtn = document.getElementById("tutorialBtn");
tutorialBtn.addEventListener("click", learnGame);

function learnGame() {
    const gameRulez = document.getElementById("tutorials");
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
// #endregion
// TODO MUST FIX THIS SECTION
//! When pressing "CREDITS" button
// #region "SHOW APPRECIATION" section
//? This shows everyone who helped with making the game
const creditsBtn = document.getElementById("creditsBtn");
creditsBtn.addEventListener("click", showCredits);

function showCredits() {
    const appreciate = document.getElementById("appreciation");
    const isHidden = appreciate.style.display === "none" || appreciate.style.display === "";
    appreciate.style.display = isHidden ? "block" : "none";

    if (isHidden) {
        appreciate.style.border = "4px solid #cb738289";
        const creditSpans = appreciate.querySelectorAll(".staff");
        creditSpans[0].innerText = "Music: Natasha E. || Mattias Häggström Gerdt";
        creditSpans[1].innerText = "Game Design: Natasha E.";
        creditSpans[2].innerText = "Art: Natasha E. || Madeline E. || Alexander E.";
        creditSpans[3].innerText = "Extra Credits: Google Fonts || Bootstrap || Pixabay.com || ChatGPT";
    }
}
// #endregion

//! Clicking the "START" button on the menu
// #region "START" button on menu
//? Starts the beginning of the dialog section
const titleOfGame = document.getElementById("gameTitle");
const startGame = document.getElementById("mainStartBtn");
const topBar = document.getElementById("movieTop");
const bottomBar = document.getElementById("movieBottom");

startGame.addEventListener("click", start);
function start() {
    titleMusic.pause();
    titleMusic.currentTime = 0;

    topBar.removeAttribute("hidden");
    bottomBar.removeAttribute("hidden");

    mainMenuButtons.classList.add("fadeOut");
    flowerImage.classList.add("fadeOut");    
    audioButtonOne.classList.add("fadeOut");
    titleScroll.classList.add("fadeOut");
    //? The sparkles is for the smaller screen
    sparkles.classList.add("fadeOut"); 
    
    setTimeout(theAnnouncement, 4000);
}
// #endregion

//! "DIALOG" Section
// ?This section will be broken down into multiple parts/sections

//! Section containing ANNOUNCER and CRAZPICC'S lines
// #region "SPEAKING" SECTION

//! Keywords 
// #region CONST for this section
// *AUDIO Cues
const musicButtonTwo = document.getElementById("audioButtonTwo");
const titleScrollTwo = document.getElementById("titleScrollTwo");

// *Announcer info
const announcer = document.getElementById("toxTill"); 
const nextBtn = document.getElementById("toxTillBtn");
const mainTalk = document.getElementById("toxTillLines");

// *CRAZPICC info
const mainEnemy = document.getElementById("crazpicc");
const nextBtnTwo = document.getElementById("crazpiccBtn");
const mainTalkTwo = document.getElementById("crazpiccLines");

// *TIMER
const timerStart = document.getElementById("gameTime");

// *Game Over cues
const noGameStart = document.getElementById("noStart");
const gameOver = document.getElementById("gameOver");

// *Buttons to end game or start over
const cowardBtn = document.getElementById("cowardBtn");
const comebackBtn = document.getElementById("comebackBtn");
// #endregion

//! Function after clicking "START" begins here
// #region 1st half of function
function theAnnouncement() {
    let speechStop = false;
    announcerMusic.play();

    // *From Main Menu (hiding)
    titleOfGame.style.visibility = 'hidden';
    mainMenuButtons.style.visibility = 'hidden';
    flowerImage.style.visibility = 'hidden';    
    musicButtonOne.style.visibility = 'hidden';
    titleScroll.style.visibility = 'hidden';
    
    //? "PAUSE / PLAY" audio Section    
    titleScrollTwo.removeAttribute("hidden");

    musicButtonTwo.removeAttribute("hidden");
    musicButtonTwo.addEventListener("click", audioPauseTwo);
    function audioPauseTwo() {
        if(announcerMusic.paused) {
            announcerMusic.play();
            musicButtonTwo.innerText = "PAUSE";
        } else {
            announcerMusic.pause();
            musicButtonTwo.innerText = "🎵";
        }
    }

    nextBtn.removeAttribute("hidden");
    // #endregion

// #region 2nd half of function

    //! ANNOUNCER Section
    // #region Announcer speaking + commands
    const announcerDialogLines = [
        "Welcome to the final round of R-P-S!",
        "Everyone give them a round of applause!",
        "*audience cheers*",
        "I am your announcer, Toxtill, coming to you live with the action!",
        "Today we have an amazing game that will keep you on your toes!",
        "So we have--OH! It that the reigning champion I see?",
        "I DON'T BELIVE IT FOLKS! THIS R-P-S BEGINNER IS UP AGAINST CRAZPICC, THE REIGNING CHAMPION FOR THE PAST 15 YEARS!"
    ]

    let currentLine = 0;

    //! ANNOUNCER Buttons / Section
    announcer.removeAttribute('hidden');
    announcer.classList.add("announcerSlide");
    mainTalk.innerText = announcerDialogLines[currentLine];

    nextBtn.addEventListener("click", announcerSpeech);
    function announcerSpeech() {
        currentLine++;
        if(currentLine < announcerDialogLines.length) {
            mainTalk.textContent = announcerDialogLines[currentLine];
        } else {
            currentLine = 0;
            speechStop = true;
            mainTalk.style.visibility = 'hidden';
            nextBtn.style.visibility ='hidden';
            nextBtnTwo.removeAttribute("hidden");
            crazpiccSpeech();
        }
    }
    // #endregion

    //! CRAZPICC Section
    // #region CRAZPICC speaking + commands
    const crazpiccDialogLines = [
        "Well, well well...",
        "*stares judgingly*",
        "I see that you are my opponent?",
        "Pathetic.",
        "Let's just get this over with so I can go home to my dog.",
        "You ready to be beaten?"
    ]

    let currentLineTwo = 0;

    //! CRAZPICC Buttons / Section
    mainEnemy.classList.add("enemySlide");
    
    nextBtnTwo.addEventListener("click", crazpiccSpeech);
    function crazpiccSpeech() {
        mainEnemy.removeAttribute("hidden");
        mainTalkTwo.innerText = crazpiccDialogLines[currentLineTwo];
        currentLineTwo++;
        if(currentLineTwo < crazpiccDialogLines.length) {
            mainTalkTwo.innerText = crazpiccDialogLines[currentLineTwo];
        } else {
            speechStop = true;
            currentLineTwo = 0;
            timerStart.removeAttribute("hidden");
            nextBtnTwo.style.visibility = 'hidden';
        }
    }
    // #endregion

    // #endregion

//#region 3rd half of function
    //! Click "NO" to CRAZPICC
    // #region Button "NO"
    //? If you say "NO" to CRAZPICC, this stuff happens
    const crazpiccDialogLinesNo = [
        "Didn't expect you to be such a coward."
    ]
    let currentLineTwoB = 0;
    
    noGameStart.addEventListener("click", battleOver);
    function battleOver() {
        nextBtnTwo.removeAttribute("hidden");
        mainTalkTwo.innerText = crazpiccDialogLinesNo[currentLineTwoB]
        currentLineTwoB++;
        if(currentLineTwoB < crazpiccDialogLinesNo.length) {
            mainTalkTwo.innerText = crazpiccDialogLinesNo[currentLineTwoB];   
        } else {
            speechStop = true;
            currentLineTwoB = 0;
            spaceImg.style.visibility = 'hidden',
            timerStart.style.visibility = 'hidden';

            setTimeout(theClose, 4000)
        }
    }
    // #endregion

    //! "GAME OVER" Section
    // #region GAME OVER functions
    //? Everything basically fades away and closes
    function theClose() {
        mainTalkTwo.classList.add("fadeOut");
        bgImageBl.classList.add("fadeOut");

        //* Removing old animation// replace with new
        announcer.classList.remove("announcerSlide");
        announcer.classList.add("fadeOut");

        //* Removing old animation// replace with new
        mainEnemy.classList.remove("enemySlide");
        mainEnemy.classList.add("fadeOut");

        setTimeout(theEnd, 3000)
    }

    //* Announcer and Crazpicc leave; new title appears 
    function theEnd() {
        announcer.style.visibility = 'hidden';
        mainEnemy.style.visibility = 'hidden';
      
        gameOver.removeAttribute("hidden");

        setTimeout(revival, 2000)

        //? Two choices: Leave or Try again 
        document.addEventListener("click", revival);
        function revival() {
            cowardBtn.removeAttribute("hidden");
            comebackBtn.removeAttribute("hidden");
        }
        //! If you click "COWARD" button
        cowardBtn.addEventListener("click", goodbye);
        function goodbye() {
            window.close();
        }
        //! If you click "COMEBACK" button
        comebackBtn.addEventListener("click", startAnew);
        function startAnew() {
            window.location.reload();
        }
    }
}
    // #endregion
// #endregion

// #endregion

// #region R-P-S GAMEPLAY
//! Main Game Section
//? This section includes a "COUNTDOWN TIMER", "CARDS" and "MISC"
let playerScore = 0;
let opponentScore = 0;
let alligatorUsedAt = [];
let gameActive = false;
let timerInterval;


const timerDisplay = document.getElementById('time');
const playerScoreBoard = document.querySelector('.playerScore');
const opponentScoreBoard = document.querySelector('.opponentScore');
const tieResults = document.querySelector('.ifTie');
const resultText = document.getElementById("gameResult");

//? Button choices 
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissors');
const alligatorBtn = document.querySelector('.alligator');
const alligatorAppearance = [7, 19, 31, 40, 51, 69];

//! Event Listeners for the button/cards
rockBtn.addEventListener("click", () => {
    if (!gameActive) return;
    const opponent = computerChoices();
    checkWinner("rock", opponent);
});

paperBtn.addEventListener("click", () => {
    if (!gameActive) return;
    const opponent = computerChoices();
    checkWinner("paper", opponent);
});

scissorBtn.addEventListener("click", () => {
    if (!gameActive) return;
    const opponent = computerChoices();
    checkWinner("scissors", opponent);
});

alligatorBtn.addEventListener("click", () => {
    if (!gameActive) return;
    
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

//! COMPUTER CHOICES 
function computerChoices() {
        const opponentOptions = ['rock', 'paper', 'scissors']
        const choiceNumber = Math.floor(Math.random() * 3);
        return opponentOptions[choiceNumber];
    }

//! CHECK WINNER Section 
    function checkWinner(player, opponent) {
        if(!gameActive) return;

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
            tieResults.innerText = "";
            clearStatus();
        }, 3000);
        
        showAlligatorAppearanceReached();
    }

    function showAlligatorAppearanceReached() {
        if (alligatorAppearance.includes(playerScore) && !alligatorUsedAt.includes(playerScore)) {
            alligatorBtn.removeAttribute('hidden');
        }
    }  

//! CLEAR STATUS Section 
    function clearStatus() {
        tieResults.classList.remove("plusOne", "keepTrying", "alligatorSurprise", "ifTie");
    }

//! R-P-S BATTLE BEGINS HERE 
yesGameStart.addEventListener("click", beginBattle);
function beginBattle() {
//? Remove announcer + add music
    document.querySelector("#titleScrollThree").removeAttribute('hidden')
    titleScrollTwo.style.visibility = 'hidden';
    buttonTwo.style.visibility = 'hidden';
    // announcerGuy.style.visibility = 'hidden';
    // mainEnemy.style.visibility = 'hidden';
    mainTalkTwo.style.visibility = 'hidden';
    announcerMusic.pause();
    titleMusic.currentTime = 0;
    battleTheme.play();

//? Game design options
    document.querySelector("#yesGameStart").style.display = "none";
    document.querySelector("#noGameStart").style.display = "none";
    document.getElementById("mainGameScores").style.visibility = "visible";
    document.querySelector("#bubbleImg").style.display = "none";
    playCards.removeAttribute('hidden');
    document.querySelector("#movieTop").style.visibility = "hidden";
    document.querySelector("#movieBottom").style.visibility = "hidden";

//? Audio pause section
    document.querySelector("#buttonThree").removeAttribute('hidden');
    buttonThree.removeEventListener("click", audioPauseThree);
    buttonThree.addEventListener("click", audioPauseThree);
    function audioPauseThree() {
        if(battleTheme.paused) {
            battleTheme.play();
            buttonThree.textContent = "PAUSE";
        } else {
            battleTheme.pause();
            buttonThree.textContent = "🎵";
        }
    }

//! TIME Section
    playerScore = 0;
    opponentScore = 0;
    alligatorUsedAt = [];
    gameActive = true;
    playerScoreBoard.innerText = playerScore;
    opponentScoreBoard.innerText = opponentScore;
    resultText.innerText = "";

    let timeLeft = 120; // 2 minutes in seconds

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Game Over!";
            gameActive = false;
            disableChoiceButtons();
            showFinalResult();
        }else {
            timeLeft--;
        }
    }
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);


    function disableChoiceButtons() {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
        alligatorBtn.disabled = true;
    }


//! FINAL RESULT Section
    function showFinalResult() {
    if (playerScore > opponentScore) {
        resultText.textContent = "YOU WIN!";
        resultText.style.color = "limegreen";
    } else if (playerScore < opponentScore) {
        resultText.textContent = "YOU LOSE!";
        resultText.style.color = "red";
    } else {
        resultText.textContent = "IT'S A TIE!";
        resultText.style.color = "gold";
    }
}   
}
    // #endregion