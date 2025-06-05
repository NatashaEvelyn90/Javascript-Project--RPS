//! Name of the game? R-P-S.
//TODO Must have an interactive menu screen
//TODO Once selecting the "START" must animate into storyline
//TODO Must have a "Tutorial"
//TODO Must have a way to Win/Lose the game
//TODO Must have a way to keep track of the score
//TODO Once selecting the "Credits" it should just show my name and everything used.
//! Make sure that there is a back button to go back to the main menu
//? Figure out how the dialogue will be
//? Figure out if it is possible for you to "Select your opponent" 
//* Add a secret card "Alligator" as that would be an instant win. Figure out how to add it into the game.

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const titleMusic = document.getElementById("titleMusic");
const ageVerify = document.querySelector("#loadingText");
const noBattle = document.getElementById("noGameStart");
const battleTheme = document.getElementById("battleMusic");


const topBar = document.getElementById("movieTop");
const bottomBar = document.getElementById("movieBottom");
const creditsBtn = document.getElementById("credits");
const bgImage = document.querySelector(".backImg");

//! When the window first opens
//? This code runs and asks an 'Age Verification' question
window.onload = function(){
    const fresh = document.getElementById("refreshBtn").style.display = "none";
    ageVerify.innerText = "Are you over the Age of 18?";
}

//! Clicking the "YES" button
//? This code will go to the main menu of the game
yesBtn.addEventListener("click", gameMenu);
function gameMenu() {
    titleMusic.play();
    document.querySelector("header").style.display = "none";
}

// When pressing "CREDITS" button
// creditsBtn.addEventListener("click", showCredits);
// function showCredits() {
    //     titleMusic.play();
    //     document.getElementById("appreciation").removeAttribute("hidden");
    //     const creditSpans = document.querySelectorAll("#appreciation .staff");
    //     creditSpans[0].innerText = "Natasha E.";
    //     creditSpans[1].innerText = "Natasha E.";
    //     creditSpans[2].innerText = "Natasha E.";
    // }
    
    //! Clicking the "START" button on the menu:
    const startGame = document.getElementById("mainStart");
    startGame.addEventListener("click", start);
    function start() {
        titleMusic.pause();
        titleMusic.currentTime = 0;
        document.querySelector("#movieTop").removeAttribute('hidden');
        document.querySelector("#movieBottom").removeAttribute('hidden');
    }
    
    //! When clicking the "NO" button:
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
    
    //! If you click "NO", "REFRESH" will be there   
    const refreshBtn = document.getElementById("refreshBtn");
    refreshBtn.addEventListener("click", reload)
    function reload() {
        window.location.reload()
    };
    
    //! Countdown TIMER
    
    const yesBattle = document.getElementById("yesGameStart");
    yesBattle.addEventListener("click", beginBattle);
    function beginBattle() {
    battleTheme.play();
    const countdownDisplay = document.getElementById("countdownTime");
    let counter = 0200; // Starting number
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const interval = setInterval(() => {
      counter--;
      countdownDisplay.textContent = counter;
    
      if (counter <= 0) {
        clearInterval(interval);
        countdownDisplay.textContent = "TIME'S UP";
      }
    }, 1000); // Update every 1000 milliseconds (1 second)
}



// //! keeping track of score
// let playerScore = 0;
// let opponentScore = 0;

// function updatingScore(winner) {
//     battleTheme.play();
//     if (winner === 'player') {
//         playerScore++;
//     }else if (winner === 'opponent') {
//         opponentScore++;
//     }
//     document.getElementById("playerScore").innerText = playerScore;
//     document.getElementById("opponentScore").innerText = opponentScore;
// }