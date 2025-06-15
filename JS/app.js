//! The stuff to do list!
// #region
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
// #endregion

//TODO Shared MUSIC / AUDIO cues
// #region Music Selections
// *MUSIC Selection
const titleMusic = document.getElementById("titleMusic"); //? This is the music that plays in the menu
const announcerMusic = document.getElementById("announcerMusic"); //? This plays during cutscene
const battleTheme = document.getElementById("opponentMusic"); //? This music plays when it is time to RPS!

// *AUDIO Cues
const titleScroll = document.getElementById("titleScroll");
const musicButtonOne = document.getElementById("audioButtonOne");
const titleScrollTwo = document.getElementById("titleScrollTwo");
const musicButtonTwo = document.getElementById("audioButtonTwo");

const musicPlayerA = document.getElementById("musicPlayerOne");
const musicPlayerB = document.getElementById("musicPlayerTwo");
const musicPlayerC = document.getElementById("musicPlayerThree");
// #endregion

// TODO Character Cues
// #region

//? LARGE
// #region Large Section
//? Announcer info LARGE
const announcer = document.getElementById("toxTill"); 
const nextBtn = document.getElementById("toxTillBtn");
const mainTalk = document.getElementById("toxTillLines");

//? CRAZPICC info LARGE
const mainEnemy = document.getElementById("crazpicc");
const nextBtnTwo = document.getElementById("crazpiccBtn");
const mainTalkTwo = document.getElementById("crazpiccLines");

//? TIMER 
const timerStart = document.getElementById("gameTime");

//? GAME OVER 
const gameOver = document.getElementById("superOver");
const noGameStart = document.getElementById("noStart");
const cowardBtn = document.getElementById("coward");
const comebackBtn = document.getElementById("comeback");

//? Children's Card Game Section  
const yesGameStart = document.getElementById("yesStart");
const playCards = document.getElementById("cardGame");
const mainGameScores = document.getElementById("scoringSection");

const mainMenuButtons = document.getElementById("mainButtons"); 
const flowerImage = document.querySelector("#flowerImg"); //* Background image for main menu
const bgImageBl = document.querySelector("#pinkBubbles"); //* Background image for dialog section
const spaceImg = document.querySelector("#spacey"); //* Background image for R-P-S section
const blossomImg = document.querySelector("#blossoms");
// #endregion

//* SMALL
// #region Small Section
//* Announcer info SMALL 
const announcerSm = document.getElementById("toxTillSm");
const nextBtnSm = document.getElementById("toxTillBtnSm");
const mainTalkSm = document.getElementById("toxTillLinesSm");
//* CRAZPICC info SMALL 
const mainEnemySm = document.getElementById("crazpiccSm");
const nextBtnTwoSm = document.getElementById("crazpiccBtnSm");
const mainTalkTwoSm = document.getElementById("crazpiccLinesSm");

// *TIMER
    const timerStartSm = document.getElementById("gameTimeSm")

// *Game Over cues
    const gameOverSm = document.getElementById("superOverSm");
    const noGameStartSm = document.getElementById("noStartSm")
    
// *Buttons to end game or start over
    const cowardBtnSm = document.getElementById("cowardSm");
    const comebackBtnSm = document.getElementById("comebackSm");

   //? Children's Card Game Section  
const yesGameStartSm = document.getElementById("yesStartSm");
const playCardsSm = document.getElementById("cardGameSm");
const mainGameScoresSm = document.getElementById("scoringSectionSm");

// const mainMenuButtons = document.getElementById("mainButtons"); 
// const flowerImage = document.querySelector("#flowerImg"); //* Background image for main menu
const bgImageBlSm = document.querySelector("#pinkBubblesSm"); //* Background image for dialog section
const spaceImgSm = document.querySelector("#spaceySm"); //* Background image for R-P-S section
const blossomImgSm = document.querySelector("#blossomsSm");
// #endregion

// #endregion

// ? - - - - - - - - - - - - - - - - - 
// * - - - - - - - - - - - - - - - - - 
//! Begin main Game Section below!
// * - - - - - - - - - - - - - - - - - 
// ? - - - - - - - - - - - - - - - - - 

//TODO Shared section
//#region  
//TODO When you launch the page
//#region "HEADER"
//? This code runs and asks an "AGE VERIFICATION" question
const ageVerify = document.querySelector("#loadingText"); 

document.getElementById("refreshBtn").style.display = "none";
window.onload = function(){
    ageVerify.innerText = "Are you over the Age of 18?";
}
// #endregion

//TODO Clicking the "NO" button:
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

//TODO Clicking "REFRESH" button
// #region "REFRESH" button
//? Refresh button only appears once you click the "NO" button
const refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click", reload);

function reload() {
    window.location.reload();
};
// #endregion

//TODO Clicking the "YES" button
// #region "YES" button
//? This code will go to the main menu of the game
const yesBtn = document.getElementById("yesBtn"); 

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

yesBtn.addEventListener("click", gameMenu);
function gameMenu() {
    titleMusic.play();
    document.querySelector("header").style.display = "none";
    titleScroll.removeAttribute("hidden"); 
}
// #endregion
//#endregion

//? LARGE SECTION
// #region large section

//? LARGE "TUTORIAL" section
// #region "HOW TO PLAY" Section
//? This teaches you the rules of the game
const tutorialSection = document.getElementById("tutorialBtn");
tutorialSection.addEventListener("click", learnGames);

function learnGames() {
    const gameRulez = document.getElementById("gamingRules");
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

//? LARGE "CREDITS" section
// #region "SHOW APPRECIATION" section
//? This shows everyone who helped with making the game
const credits = document.getElementById("creditsBtn");
credits.addEventListener("click", showCredits);

function showCredits() {
    const appreciate = document.getElementById("manyThanks");
    const isHiddenTwo = appreciate.style.display === "none" || appreciate.style.display === "";
    appreciate.style.display = isHiddenTwo ? "block" : "none";

    if (isHiddenTwo) {
        appreciate.style.border = "4px solid #cb738289";
        const creditSpans = appreciate.querySelectorAll(".staff");
        creditSpans[0].innerText = "Music: Natasha E. || Mattias Häggström Gerdt";
        creditSpans[1].innerText = "Game Design: Natasha E.";
        creditSpans[2].innerText = "Art: Natasha E. || Madeline E. || Alexander E.";
        creditSpans[3].innerText = "Extra Credits: Google Fonts || Bootstrap || Pixabay.com || ChatGPT";
    }
}
// #endregion

//? Clicking the "START" button on the menu
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
    scoringSection.style.visibility = 'hidden';
    
    setTimeout(theAnnouncement, 4000);
}
// #endregion

//? DIALOG Section
// #region entire Dialog
// #region TOXTILL + CRAZPICC Lines
function theAnnouncement() {
    let speechStop = false;
    announcerMusic.play();
    announcer.removeAttribute('hidden');
    announcer.classList.add("announcerSlide");

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

    //! Toxtill Section
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

    //! Toxtill Buttons / Section
    // announcer.removeAttribute('hidden');
    // announcer.classList.add("announcerSlide");
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

    //! CRAZPICC Section
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
        mainTalkTwo.style.visibility = 'hidden';
        bgImageBl.style.visibility = 'hidden';
        
      
        gameOver.removeAttribute("hidden");

        setTimeout(revival, 2000)

        //? Two choices: Leave or Try again 
        document.addEventListener("click", revival);
        function revival() {
            cowardBtn.removeAttribute("hidden");
            comebackBtn.removeAttribute("hidden");
        }
        // TODO MUST FIGURE OUT SOMETHING ELSE FOR THIS SECTION
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

//? R-P-S Section
// #region main game
//! Main Game Section
//? This section includes a "COUNTDOWN TIMER", "CARDS" and "MISC"
let playerScore = 0;
let opponentScore = 0;
let alligatorUsedAt = [];
let gameActive = false;
let timerInterval;

const titleScrollThree = document.getElementById("titleScrollThree");
const musicButtonThree = document.getElementById("audioButtonThree");

const timerDisplay = document.getElementById('clockDisplay');
const playerScoreBoards = document.querySelectorAll('#playerPoints, #playerScore');
const opponentScoreBoards = document.querySelectorAll('#opponentPoints, #opponentScore');

function updateScoreDisplays() {
  playerScoreBoards.forEach(el => el.innerText = playerScore);
  opponentScoreBoards.forEach(el => el.innerText = opponentScore);
}
// console.log(playerScoreBoards, opponentScoreBoards);


const tieResults = document.getElementById('tieBreaker');
const resultText = document.getElementById("trueWinner");


//? Button choices 
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');
const alligatorBtn = document.getElementById('alligator');
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
   updateScoreDisplays();
    tieResults.innerText = "GATOR POWER! +5 POINTS!";
    tieResults.classList.add("alligatorSurprise");
    const usedTrigger = alligatorAppearance.find(trigger => playerScore - 5 < trigger && playerScore >= trigger);
    if (usedTrigger !== undefined) {
    alligatorUsedAt.push(usedTrigger);
}

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
            (player === 'paper' && opponent === 'rock')
        ) {
            playerScore++;
           updateScoreDisplays();
            tieResults.innerText = "+1 POINT!";
            tieResults.classList.add("plusOne");
        } else {
            opponentScore++;
        updateScoreDisplays();
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

function audioPauseThree() {
    if(battleTheme.paused) {
        battleTheme.play();
        musicButtonThree.textContent = "PAUSE";
    } else {
        battleTheme.pause();
        musicButtonThree.textContent = "🎵";
    }
}

//! R-P-S BATTLE BEGINS HERE 
yesGameStart.addEventListener("click", beginBattle);
function beginBattle() {
    gameActive = true;
    console.log("Battle started — gameActive is now", gameActive);

//? Remove announcer + add music
    titleScrollThree.removeAttribute("hidden");
    titleScrollTwo.style.visibility = 'hidden';
    musicButtonTwo.style.visibility = 'hidden';

    announcer.style.visibility = 'hidden';
    mainEnemy.style.visibility = 'hidden';
    mainTalkTwo.style.visibility = 'hidden';

    announcerMusic.pause();
    titleMusic.currentTime = 0;

    battleTheme.play();


//? Game design options
    yesStart.style.display = "none";
    noStart.style.display = "none";
    mainGameScores.style.visibility = "visible";
    bgImageBl.style.visibility = 'hidden';
    document.getElementById("cardGame").removeAttribute('hidden');
    movieTop.style.visibility = "hidden";
    movieBottom.style.visibility = "hidden";

//? Audio pause section
    musicButtonThree.removeAttribute("hidden");

    musicButtonThree.removeEventListener("click", audioPauseThree);
    musicButtonThree.addEventListener("click", audioPauseThree);
    function audioPauseThree() {
        if(battleTheme.paused) {
            battleTheme.play();
            musicButtonThree.textContent = "PAUSE";
        } else {
            battleTheme.pause();
            musicButtonThree.textContent = "🎵";
        }
    }

//! TIME Section
    playerScore = 0;
    opponentScore = 0;
    alligatorUsedAt = [];

   updateScoreDisplays();
    resultText.innerText = "";

    let timeLeft = 120; // 2 minutes in seconds

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.innerText = "Game Over!";
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
// #endregion




//* SMALL SECTION 
//#region SMALL Section

//* "TUTORIAL" section
// #region "Learn the game"
const tutorialSm = document.getElementById("tutorialBtnSm");
tutorialSm.addEventListener("click", smallLearn);

function smallLearn() {
const tutorialDrop = document.getElementById("dropTutorialSm");
const isHiddenSm = tutorialDrop.style.display === "none" || tutorialDrop.style.display === "";
    
    tutorialDrop.style.display = isHiddenSm ? "block" : "none";

    if (isHiddenSm) {
        tutorialDrop.style.border = "4px solid #cb738289";
        const learnSpanSm = tutorialDrop.querySelectorAll(".rulesSm");
        learnSpanSm[0].innerText = "R-P-S is Rock Paper Scissors; just like the classic game!";
        learnSpanSm[1].innerText = "The rules are simple, rock beats scissors, scissors beat paper, paper beats rock. However, there might be something special within the game as well. Will this secret appear in your game?";
    }
}
// #endregion

//* "CREDITS" section
// #region "Give thanks"
const smallThanks = document.getElementById("creditsBtnSm");
smallThanks.addEventListener("click", theHelp);

function theHelp() {
    const creditDrop = document.getElementById("dropCredits");
    const isHiddenC = creditDrop.style.display === "none" || creditDrop.style.display === "";
    creditDrop.style.display = isHiddenC ? "block" : "none";

    if (isHiddenC) {
        creditDrop.style.border = "4px solid #cb738289";
        const creditSpansSm = creditDrop.querySelectorAll(".staffSm");
        creditSpansSm[0].innerText = "Music: Natasha E. || Mattias Häggström Gerdt";
        creditSpansSm[1].innerText = "Game Design: Natasha E.";
        creditSpansSm[2].innerText = "Art: Natasha E. || Madeline E. || Alexander E.";
        creditSpansSm[3].innerText = "Extra Credits: Google Fonts || Bootstrap || Pixabay.com || ChatGPT";
    }
}
// #endregion

//* Clicking the "START" button on the menu
// #region 
const mainMenuButtonsSm = document.getElementById("mainButtonsSm");
const sparkles = document.querySelector("#sparkles"); //* Background for small screen
const titleOfGameSm = document.getElementById("gameTitleSm");
const startGameSm = document.getElementById("mainStartBtnSm");
const topBarSm = document.getElementById("movieTopSm");
const bottomBarSm = document.getElementById("movieBottomSm");

startGameSm.addEventListener("click", startSm);
function startSm() {
    titleMusic.pause();
    titleMusic.currentTime = 0;

    topBarSm.removeAttribute("hidden");
    bottomBarSm.removeAttribute("hidden");

    mainMenuButtonsSm.classList.add("fadeOut");
    flowerImage.classList.add("fadeOut");    
    audioButtonOne.classList.add("fadeOut");
    titleScroll.classList.add("fadeOut");
    //? The sparkles is for the smaller screen
    sparkles.classList.add("fadeOut"); 
    
    setTimeout(theAnnouncementSm, 4000);
}
// #endregion

//* "DIALOG" Section 
// #region Whole Dialog Section
// #region TOXTILL + CRAZPICC Lines
function theAnnouncementSm() {
    let speechStop = false;
    announcerMusic.play();

    // *From Main Menu (hiding)
    titleOfGameSm.style.visibility = 'hidden';
    mainMenuButtonsSm.style.visibility = 'hidden';
    flowerImage.style.visibility = 'hidden';    
    musicButtonOne.style.visibility = 'hidden';
    titleScroll.style.visibility = 'hidden';
    sparkles.style.visibility = 'hidden';
    
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

    nextBtnSm.removeAttribute("hidden");

    //! Toxtill Section
    const announcerDialogLinesSm = [
        "Welcome to the final round of R-P-S!",
        "Everyone give them a round of applause!",
        "*audience cheers*",
        "I am your announcer, Toxtill, coming to you live with the action!",
        "Today we have an amazing game that will keep you on your toes!",
        "So we have--OH! It that the reigning champion I see?",
        "I DON'T BELIVE IT FOLKS! THIS R-P-S BEGINNER IS UP AGAINST CRAZPICC, THE REIGNING CHAMPION FOR THE PAST 15 YEARS!"
    ]

    let currentLineSm = 0;

    //! Toxtill Buttons / Section
    announcerSm.removeAttribute('hidden');
    announcerSm.classList.add("announcerSlide");
    mainTalkSm.innerText = announcerDialogLinesSm[currentLineSm];

    nextBtnSm.addEventListener("click", announcerSpeech);
    function announcerSpeech() {
        currentLineSm++;
        if(currentLineSm < announcerDialogLinesSm.length) {
            mainTalkSm.textContent = announcerDialogLinesSm[currentLineSm];
        } else {
            currentLineSm = 0;
            speechStop = true;
            mainTalkSm.style.visibility = 'hidden';
            nextBtnSm.style.visibility ='hidden';
            nextBtnTwoSm.removeAttribute("hidden");
            document.querySelector("#crazpiccLinesSm").removeAttribute("hidden");
            crazpiccSpeech();
        }
    }
    
    //! CRAZPICC Section
    const crazpiccDialogLinesSm = [
        "Well, well well...",
        "*stares judgingly*",
        "I see that you are my opponent?",
        "Pathetic.",
        "Let's just get this over with so I can go home to my dog.",
        "You ready to be beaten?"
    ]

    let currentLineTwoSm = 0;

    //! CRAZPICC Buttons / Section
    mainEnemySm.classList.add("enemySlide");
    
    nextBtnTwoSm.addEventListener("click", crazpiccSpeech);
    function crazpiccSpeech() {
        mainEnemySm.removeAttribute("hidden");
        mainTalkTwoSm.innerText = crazpiccDialogLinesSm[currentLineTwoSm];
        currentLineTwoSm++;
        if(currentLineTwoSm < crazpiccDialogLinesSm.length) {
            mainTalkTwoSm.innerText = crazpiccDialogLinesSm[currentLineTwoSm];
        } else {
            speechStop = true;
            currentLineTwoSm = 0;
            timerStartSm.removeAttribute("hidden");
            nextBtnTwoSm.style.visibility = 'hidden';
        }
    }
    // #endregion

     //! Click "NO" to CRAZPICC
    // #region Button "NO"
    //? If you say "NO" to CRAZPICC, this stuff happens
    const crazpiccDialogLinesNoSm = [
        "Didn't expect you to be such a coward."
    ]
    let currentLineTwoBSm = 0;
    
    noGameStartSm.addEventListener("click", battleOver);
    function battleOver() {
        nextBtnTwo.removeAttribute("hidden");
        mainTalkTwoSm.innerText = crazpiccDialogLinesNoSm[currentLineTwoBSm]
        currentLineTwoBSm++;
        if(currentLineTwoBSm < crazpiccDialogLinesNoSm.length) {
            mainTalkTwoSm.innerText = crazpiccDialogLinesNoSm[currentLineTwoBSm];   
        } else {
            speechStop = true;
            currentLineTwoBSm = 0;
            spaceImgSm.style.visibility = 'hidden',
            timerStartSm.style.visibility = 'hidden';

            setTimeout(theCloseSm, 4000)
        }
    }
    // #endregion

    //! "GAME OVER" Section
    // #region GAME OVER functions
    //? Everything basically fades away and closes
    function theCloseSm() {
        mainTalkTwoSm.classList.add("fadeOut");
        bgImageBlSm.classList.add("fadeOut");

        //* Removing old animation// replace with new
        announcerSm.classList.remove("announcerSlide");
        announcerSm.classList.add("fadeOut");

        //* Removing old animation// replace with new
        mainEnemySm.classList.remove("enemySlide");
        mainEnemySm.classList.add("fadeOut");

        setTimeout(theEnd, 3000)
    }

    //* Announcer and Crazpicc leave; new title appears 
    function theEnd() {
        announcerSm.style.visibility = 'hidden';
        mainEnemySm.style.visibility = 'hidden';
        mainTalkTwoSm.style.visibility = 'hidden';
        bgImageBlSm.style.visibility = 'hidden';
      
        gameOverSm.removeAttribute("hidden");

        setTimeout(revivalSm, 2000)

        //? Two choices: Leave or Try again 
        document.addEventListener("click", revivalSm);
        function revivalSm() {
            cowardBtnSm.removeAttribute("hidden");
            comebackBtnSm.removeAttribute("hidden");
        }
        // TODO MUST FIGURE OUT SOMETHING ELSE FOR THIS SECTION
        //! If you click "COWARD" button
        cowardBtnSm.addEventListener("click", goodbyeSm);
        function goodbyeSm() {
            window.close();
        }
        //! If you click "COMEBACK" button
        comebackBtnSm.addEventListener("click", startAnewSm);
        function startAnewSm() {
            window.location.reload();
        }
    }
}
    // #endregion
    
    // #endregion

// #endregion




// TODO MUST WORK ON THIS SECTION BELOW!
// * RPS Small Section 

// #region R-P-S GAMEPLAY
//! Main Game Section
//? This section includes a "COUNTDOWN TIMER", "CARDS" and "MISC"
let playerScore = 0;
let opponentScore = 0;
let alligatorUsedAt = [];
let gameActive = false;
let timerInterval;

const titleScrollThree = document.getElementById("titleScrollThree");
const musicButtonThree = document.getElementById("audioButtonThree");

const timerDisplay = document.getElementById('clockDisplay');
const playerScoreBoards = document.querySelectorAll('#playerPoints, #playerScore');
const opponentScoreBoards = document.querySelectorAll('#opponentPoints, #opponentScore');

function updateScoreDisplays() {
  playerScoreBoards.forEach(el => el.innerText = playerScore);
  opponentScoreBoards.forEach(el => el.innerText = opponentScore);
}
// console.log(playerScoreBoards, opponentScoreBoards);


const tieResults = document.getElementById('tieBreaker');
const resultText = document.getElementById("trueWinner");


//? Button choices 
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');
const alligatorBtn = document.getElementById('alligator');
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
   updateScoreDisplays();
    tieResults.innerText = "GATOR POWER! +5 POINTS!";
    tieResults.classList.add("alligatorSurprise");
    const usedTrigger = alligatorAppearance.find(trigger => playerScore - 5 < trigger && playerScore >= trigger);
    if (usedTrigger !== undefined) {
    alligatorUsedAt.push(usedTrigger);
}

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
            (player === 'paper' && opponent === 'rock')
        ) {
            playerScore++;
           updateScoreDisplays();
            tieResults.innerText = "+1 POINT!";
            tieResults.classList.add("plusOne");
        } else {
            opponentScore++;
        updateScoreDisplays();
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

function audioPauseThree() {
    if(battleTheme.paused) {
        battleTheme.play();
        musicButtonThree.textContent = "PAUSE";
    } else {
        battleTheme.pause();
        musicButtonThree.textContent = "🎵";
    }
}

//! R-P-S BATTLE BEGINS HERE 
yesGameStart.addEventListener("click", beginBattle);
function beginBattle() {
    gameActive = true;
    console.log("Battle started — gameActive is now", gameActive);

//? Remove announcer + add music
    titleScrollThree.removeAttribute("hidden");
    titleScrollTwo.style.visibility = 'hidden';
    musicButtonTwo.style.visibility = 'hidden';

    announcer.style.visibility = 'hidden';
    mainEnemy.style.visibility = 'hidden';
    mainTalkTwo.style.visibility = 'hidden';

    announcerMusic.pause();
    titleMusic.currentTime = 0;

    battleTheme.play();


//? Game design options
    yesStart.style.display = "none";
    noStart.style.display = "none";
    mainGameScores.style.visibility = "visible";
    bgImageBl.style.visibility = 'hidden';
    document.getElementById("cardGame").removeAttribute('hidden');
    movieTop.style.visibility = "hidden";
    movieBottom.style.visibility = "hidden";

//? Audio pause section
    musicButtonThree.removeAttribute("hidden");

    musicButtonThree.removeEventListener("click", audioPauseThree);
    musicButtonThree.addEventListener("click", audioPauseThree);
    function audioPauseThree() {
        if(battleTheme.paused) {
            battleTheme.play();
            musicButtonThree.textContent = "PAUSE";
        } else {
            battleTheme.pause();
            musicButtonThree.textContent = "🎵";
        }
    }

//! TIME Section
    playerScore = 0;
    opponentScore = 0;
    alligatorUsedAt = [];

   updateScoreDisplays();
    resultText.innerText = "";

    let timeLeft = 120; // 2 minutes in seconds

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.innerText = "Game Over!";
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

