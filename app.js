const rock = document.querySelector(".borderRock");
const paper = document.querySelector(".borderPaper");
const scissor = document.querySelector(".borderScissors");
const actionSection = document.querySelector(".theResultPage");
const theMainAction = document.querySelector(".theMainSection");
const playerSection = document.querySelector(".playerSection");
const borderPlayer = document.querySelector(".borderPlayer");
const backPlayer = document.querySelector(".backPlayer");
const playerImg = document.querySelector(".player");
const btn = document.querySelector(".replay");
const body = document.querySelector("body");
const borderComputureRock = document.querySelector(".borderComputureRock");
const borderComputurePaper = document.querySelector(".borderComputurePaper");
const borderComputureScissors = document.querySelector(
  ".borderComputureScissors"
);
const resultSentence = document.querySelector(".resultSentence");
const score = document.querySelector(".score");

let counter = 0;
let randomNum = Math.floor(Math.random() * 3);
let randomComputure = [
  borderComputureRock,
  borderComputureScissors,
  borderComputurePaper,
];
btn.addEventListener("click", () => {
  theMainAction.style.display = "block";
  actionSection.style.visibility = "hidden";
  borderComputureScissors.style.display = "none";
  borderComputureRock.style.display = "none";
  borderComputurePaper.style.display = "none";
});
rock.addEventListener("click", () => {
  theMainAction.style.display = "none";
  actionSection.style.visibility = "visible";
  playerImg.style.backgroundImage = "url(./images/icon-rock.svg)";
  playerImg.style.backgroundRepeat = "no-repeat";
  borderPlayer.style.background = "rgb(189, 49, 72)";
  backPlayer.style.background = "white";
  randomComputure[randomNum].style.visibility = "visible";
  randomComputure[randomNum].style.display = "flex";
  checkForWinner();
});
paper.addEventListener("click", () => {
  theMainAction.style.display = "none";
  actionSection.style.visibility = "visible";
  playerImg.style.backgroundImage = "url(./images/icon-paper.svg)";
  playerImg.style.backgroundRepeat = "no-repeat";
  borderPlayer.style.background = "rgb(49, 109, 201)";
  backPlayer.style.background = "white";
  randomComputure[randomNum].style.visibility = "visible";
  randomComputure[randomNum].style.display = "flex";
  checkForWinner();
});
scissor.addEventListener("click", () => {
  theMainAction.style.display = "none";
  actionSection.style.visibility = "visible";
  playerImg.style.backgroundImage = "url(./images/icon-scissors.svg)";
  playerImg.style.backgroundRepeat = "no-repeat";
  borderPlayer.style.background = "yellow";
  backPlayer.style.background = "white";
  randomComputure[randomNum].style.visibility = "visible";
  randomComputure[randomNum].style.display = "flex";
  checkForWinner();
});

function checkForWinner() {
  if (
    randomComputure[0].style.visibility == "visible" &&
    borderPlayer.style.background == "rgb(189, 49, 72)"
  ) {
    resultSentence.innerHTML = "It Tie";
  }
  if (
    randomComputure[1].style.visibility == "visible" &&
    borderPlayer.style.background == "yellow"
  ) {
    resultSentence.innerHTML = "It Tie ";
  }
  if (
    randomComputure[2].style.visibility == "visible" &&
    borderPlayer.style.background == "rgb(49, 109, 201)"
  ) {
    resultSentence.innerHTML = "It Tie";
  }
  if (
    randomComputure[0].style.visibility == "visible" &&
    borderPlayer.style.background == "rgb(49, 109, 201)"
  ) {
    resultSentence.innerHTML = "You Winn";
    resultSentence.style.color = "green";
    counter++;
  }
  if (
    randomComputure[0].style.visibility == "visible" &&
    borderPlayer.style.background == "yellow"
  ) {
    resultSentence.innerHTML = "You Loose";
    resultSentence.style.color = "rgb(219, 63, 84)";
  }
  if (
    randomComputure[2].style.visibility == "visible" &&
    borderPlayer.style.background == "yellow"
  ) {
    resultSentence.innerHTML = "You Winn";
    resultSentence.style.color = "green";
    counter++;
  }
  if (
    randomComputure[2].style.visibility == "visible" &&
    borderPlayer.style.background == "rgb(189, 49, 72)"
  ) {
    resultSentence.innerHTML = "You Loose";
    resultSentence.style.color = "rgb(219, 63, 84)";
  }
  if (
    randomComputure[1].style.visibility == "visible" &&
    borderPlayer.style.background == "rgb(49, 109, 201)"
  ) {
    resultSentence.innerHTML = "You Loose";
    resultSentence.style.color = "rgb(219, 63, 84)";
  }
  if (
    randomComputure[1].style.visibility == "visible" &&
    borderPlayer.style.background == "rgb(189, 49, 72)"
  ) {
    resultSentence.innerHTML = "You Winn";
    resultSentence.style.color = "green";
    counter++;
  }
  score.innerHTML = counter;
}
