function coinToss() {
  let userCount = 0;
  let compCount = 0;
  for (let i = 0; i < 6; i++) {
    function lop() {
      //   while (i < 6) {
      // user choice
      document.getElementById("head").addEventListener("click", (e) => {
        document.getElementById("userChoice").innerHTML =
          document.getElementById("head").innerHTML;
      });
      document.getElementById("tail").addEventListener("click", (e) => {
        document.getElementById("userChoice").innerHTML =
          document.getElementById("tail").innerHTML;
      });
      useranswer = document.getElementById("userChoice").innerHTML;
      // Computer Choice
      function compChoice(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let cChoice = compChoice(1, 3);
      switch (cChoice) {
        case 1:
          comp = "Head";
          break;
        case 2:
          comp = "Tail";
          break;
      }
      document.getElementById("compChoice").innerHTML = comp;
      // Correct Answer
      function theAnswer(head, tail) {
        return Math.floor(Math.random() * (tail - head)) + head;
      }
      let ans = theAnswer(5, 7);
      switch (ans) {
        case 5:
          answer = "Head";
          break;
        case 6:
          answer = "Tail";
          break;
      }
      document.getElementById("answer").innerHTML = answer;
      //   calculate winner
      if (useranswer === answer) {
        userCount += 1;
      }
      if (comp === answer) {
        compCount += 1;
      }
      console.log(userCount, compCount);
      return userCount, compCount;
    }
    // return lop();
  }
  if (lop.userCount > lop.compCount) {
    document.getElementById("winner").innerHTML = "You win!";
  } else if (lop.userCount < lop.compCount) {
    document.getElementById("winner").innerHTML = "You loose!";
  } else {
    document.getElementById("winner").innerHTML = "A tie";
  }
  return lop();
}
// }
