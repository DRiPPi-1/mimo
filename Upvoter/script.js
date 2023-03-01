let countingW = 0;
let countingL = 0;
let countingW2 = 0;
let countingL2 = 0;

function like() {
  countingW = countingW + 1;
  document.getElementById("likers").textContent = countingW + " likes";
}

function dislike() {
  countingL = countingL - 1;
  document.getElementById("dislikers").textContent = countingL + " dislikes";
}

function like2() {
  countingW2 = countingW2 + 1;
  document.getElementById("likers2").textContent = countingW2 + " likes";
}

function dislike2() {
  countingL2 = countingL2 - 1;
  document.getElementById("dislikers2").textContent = countingL2 + " dislikes";
}