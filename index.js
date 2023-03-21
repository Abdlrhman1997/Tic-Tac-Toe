let gameBoard = {
  // gameBoard: ["", "", "", "", "", "", "", "", ""],
  gameBoard: ["X", "O", "o", "x", "o", "x", "o", "", ""],
};

let Player = (name) => {
  const getName = () => name;
  return { getName };
};

const displayGameBoard = (() => {
  let gameBoardDivs = document.querySelectorAll(".square");

  let playerTurn = "x";
  for (let i = 0; i < gameBoardDivs.length; i++) {
    gameBoardDivs[i].addEventListener("click", (e) => {
      if (playerTurn == "x" && e.target.textContent === "") {
        e.target.textContent = "x";
        playerTurn = "o";
      } else {
        if (e.target.textContent == "") {
          e.target.textContent = "o";
          playerTurn = "x";
        }
      }
    });
  }
})();
