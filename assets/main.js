document.getElementById("head").addEventListener("click", (e) => {
  document.getElementById("userChoice").innerHTML =
    document.getElementById("head").innerHTML;
});
document.getElementById("tail").addEventListener("click", (e) => {
  document.getElementById("userChoice").innerHTML =
    document.getElementById("tail").innerHTML;
});
let useranswer = document.getElementById("userChoice").innerHTML;
function compChoice(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function theAnswer(head, tail) {
  return Math.floor(Math.random() * (tail - head)) + head;
}

function findWinner() {
  let userCount = 0;
  let compCount = 0;
  if (useranswer === correctAnswer) {
    userCount++;
  }
  if (compAnswer === correctAnswer) {
    compCount++;
  }
  if (useranswer === compAnswer) {
    if (useranswer !== correctAnswer) {
      userCount = 0;
      compCount = 0;
    }
  }
  if (userCount > compCount) {
    document.getElementById("winner").innerHTML = "You Win!";
  }
  if (userCount < compCount) {
    document.getElementById("winner").innerHTML = "You Loose!";
  }
  if (userCount === compCount) {
    document.getElementById("winner").innerHTML = "Its A Tie!";
  }
  return userCount, compCount;
}

// function calcCount(useranswer, compAnswer, correctAnswer) {
//   let userCount = 0;
//   let compCount = 0;
//   if (useranswer === correctAnswer) {
//     userCount++;
//   }
//   if (compAnswer === correctAnswer) {
//     compCount++;
//   }
//   if (useranswer === compAnswer) {
//     if (useranswer !== correctAnswer) {
//       userCount = 0;
//       compCount = 0;
//     }
//   }
//   //   console.log(userCount, compCount);
//   return userCount, compCount;
// }

function guess() {
  // user choice
  useranswer = document.getElementById("userChoice").innerHTML;
  // Computer Choice
  compChoice();
  let cChoice = compChoice(1, 3);
  switch (cChoice) {
    case 1:
      compAnswer = "Head";
      break;
    case 2:
      compAnswer = "Tail";
      break;
  }
  document.getElementById("compChoice").innerHTML = compAnswer;
  // Correct Answer
  theAnswer();
  let ans = theAnswer(5, 7);
  switch (ans) {
    case 5:
      correctAnswer = "Head";
      break;
    case 6:
      correctAnswer = "Tail";
      break;
  }
  document.getElementById("answer").innerHTML = correctAnswer;

  console.log(useranswer, compAnswer, correctAnswer);
  return useranswer, compAnswer, correctAnswer;
}

function coinToss() {
  // guess
  guess();
  //   //   calcCount
  //   calcCount();
  //   calculate winner
  findWinner();
}
// alert("Hello World!");
