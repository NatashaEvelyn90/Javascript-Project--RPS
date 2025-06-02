//! Name of the game? R-P-S.
//TODO Must have an interactive menu screen
//TODO Once selecting the "START" must animate into storyline
//TODO Must have a "Tutorial"
//TODO Must have a way to Win/Lose the game
//TODO Must have a way to keep track fo the score
//TODO Once selecting the "Credits" it should just show my name and everything used.
//! Make sure that there is a back button to go back to the main menu
//? Figure out how the dialogue will be
//? Figure out if it is possible for you to "Select your opponent" 
//* Add a secret card "Alligator" as that would be an instant win. Figure out how to add it into the game.

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("no");
const titleMusic = document.getElementById("titleMusic");
const startGame = document.getElementById("mainStart");
const battleTheme = document.getElementById("battleMusic");

yesBtn.addEventListener("click", gameMenu);

function gameMenu() {
    titleMusic.play();
    document.querySelector("header").style.display = "none";
}