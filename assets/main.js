let userCount = 0;
let compCount = 0;
let gameCount = 0;
let headBtn = document.querySelector("#head_button");
let orStatement = document.querySelector("#or");
let tailBtn = document.querySelector("#tail_button");
let resetBtn = document.querySelector("#reset_button");
let userAnswer = document.querySelector("#user_answer");
let compAnswer = document.querySelector("#comp_answer");
let correctAnswer = document.querySelector("#correct_answer");
let userScore = document.querySelector("#user_count");
let compScore = document.querySelector("#comp_count");
let winner = document.querySelector("#winner_display");
const wrapper = document.querySelector(".game_wrapper");
const alligner = document.querySelector(".row-2");
const uview = document.querySelector("#user_game_view");
const cview = document.querySelector("#comp_game_view");
const aview = document.querySelector("#answer_game_view");

headBtn.addEventListener("click", () => {
  userAnswer.innerHTML = `Head`;
  getCompChoice();
  getCorrectAnswer();
  evaluateScore();
});
tailBtn.addEventListener("click", () => {
  userAnswer.innerHTML = `Tail`;
  getCompChoice();
  getCorrectAnswer();
  evaluateScore();
});
resetBtn.addEventListener("click", () => {
  resetgame();
});

function getCompChoice() {
  let compChoice = Math.floor(Math.random() * 2);
  if (compChoice === 1) {
    compAnswer.innerHTML = `Head`;
  } else {
    compAnswer.innerHTML = `Tail`;
  }
}

function getCorrectAnswer() {
  let correctChoice = Math.floor(Math.random() * 2);
  if (correctChoice === 1) {
    correctAnswer.innerHTML = `Head`;
  } else {
    correctAnswer.innerHTML = `Tail`;
  }
}

function evaluateScore() {
  if (userAnswer.innerHTML === correctAnswer.innerHTML) {
    userCount++;
    if (userAnswer.innerHTML === compAnswer.innerHTML) {
      compCount++;
    } else {
      compCount += 0;
    }
  } else {
    userCount += 0;
    if (userAnswer.innerHTML === compAnswer.innerHTML) {
      compCount += 0;
    } else {
      compCount++;
    }
  }
  gameCount++;
  evaluateWinner(userCount, compCount, gameCount);
}

function evaluateWinner(userCount, compCount, gameCount) {
  userScore.innerHTML = `${userCount}`;
  compScore.innerHTML = `${compCount}`;
  if (gameCount === 5) {
    if (userCount > compCount) {
      winner.innerHTML = `<p class="youwin">You won against the computer!</p>`;
    } else if (userCount === compCount) {
      winner.innerHTML = `<p class="youtie">Its a tie!</p>`;
    } else {
      winner.innerHTML = `<p class="youloose">You lost to the computer</p>`;
    }
    headBtn.style.display = "none";
    orStatement.style.display = "none";
    tailBtn.style.display = "none";
    wrapper.style.height = "26em";
    alligner.style.margin = " 0";
  }
}

function resetgame() {
  userCount = 0;
  compCount = 0;
  gameCount = 0;
  headBtn.style.display = "block";
  orStatement.style.display = "block";
  tailBtn.style.display = "block";
  userAnswer.innerHTML = "";
  compAnswer.innerHTML = "";
  correctAnswer.innerHTML = "";
  userScore.innerHTML = "0";
  compScore.innerHTML = "0";
  winner.innerHTML = "";
  wrapper.style.height = "";
  alligner.style.margin = "10em 0 0 0";
}
