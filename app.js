const spanP1 = document.querySelector("#spanPlayer1");
const spanP2 = document.querySelector("#spanPlayer2");
const inputScore = document.getElementById("winScore");
const btnP1 = document.getElementById("btnPlayer1");
const btnP2 = document.getElementById("btnPlayer2");
const btnReset = document.getElementById("btnReset");

let scoreP1 = 0;
let scoreP2 = 0;
let winScore = 5;

const endGame = (winner) => {
  btnP1.disabled = true;
  btnP2.disabled = true;
  if (winner === "Player1") {
    spanP1.style.color = "green";
    spanP2.style.color = "red";
  } else if (winner === "Player2") {
    spanP1.style.color = "red";
    spanP2.style.color = "green";
  }
};

const resetScore = () => {
  scoreP1 = 0;
  scoreP2 = 0;
  spanP1.innerHTML = scoreP1;
  spanP2.innerHTML = scoreP2;
  spanP1.style.color = "black";
  spanP2.style.color = "black";
  btnP1.removeAttribute("disabled");
  btnP2.removeAttribute("disabled");
};

btnP1.addEventListener("click", () => {
  scoreP1++;
  if (scoreP1 === winScore) {
    endGame("Player1");
  }
  spanP1.textContent = scoreP1;
});

btnP2.addEventListener("click", () => {
  scoreP2++;
  spanP2.textContent = scoreP2;
  if (scoreP2 === winScore) {
    endGame("Player2");
  }
});

inputScore.addEventListener("change", function (event) {
  winScore = Number(event.target.value);
  resetScore();
});

btnReset.addEventListener("click", resetScore);
