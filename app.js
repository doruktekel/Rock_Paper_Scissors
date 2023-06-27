const pcChooseDisplay = document.getElementById("pcguess");
const yourChooseDisplay = document.getElementById("yourguess");
const resultDisplay = document.getElementById("result");

const yourChoose = document.querySelectorAll("button");
let choosen;
let randomNumber;
let pcChoosen;
let result;

yourChoose.forEach((x) =>
  x.addEventListener("click", (e) => {
    choosen = e.target.id;
    yourChooseDisplay.innerHTML = choosen;
    random();
    Result();
  })
);

function random() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    pcChoosen = "Rock";
  }
  if (randomNumber == 2) {
    pcChoosen = "Paper";
  }
  if (randomNumber == 3) {
    pcChoosen = "Scissors";
  }
  pcChooseDisplay.innerHTML = pcChoosen;
}

function Result() {
  if (pcChoosen === choosen) {
    result = " Draw ";
  }
  if (choosen == "Rock" && pcChoosen == "Paper") {
    result = " Loose ;( ";
  }
  if (choosen == "Rock" && pcChoosen == "Scissors") {
    result = " Winn :) ";
  }
  if (choosen == "Paper" && pcChoosen == "Rock") {
    result = " Winn :) ";
  }
  if (choosen == "Paper" && pcChoosen == "Scissors") {
    result = " Loose ;( ";
  }
  if (choosen == "Scissors" && pcChoosen == "Rock") {
    result = " Loose ;( ";
  }
  if (choosen == "Scissors" && pcChoosen == "Paper") {
    result = " Winn :) ";
  }
  resultDisplay.innerHTML = result;
}
