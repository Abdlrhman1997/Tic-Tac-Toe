let gameBoard = {
  // gameBoard: ["", "", "", "", "", "", "", "", ""],
  gameBoard: ["", "", "", "", "", "", "", "", ""],
};

let Player = (name) => {
  const getName = () => name;
  return { getName };
};

const displayGameBoard = (() => {
  let gameBoardDivs = document.querySelectorAll(".square");

  let playerTitleParag = document.querySelector("#player");

  let playerTurn = "x";
  for (let i = 0; i < gameBoardDivs.length; i++) {
    gameBoardDivs[i].addEventListener("click", (e) => {
      if (playerTurn == "x" && e.target.textContent === "") {
        e.target.textContent = "x";
        playerTurn = "o";
        playerTitleParag.textContent = "Player O's turn";
      } else {
        if (e.target.textContent == "") {
          e.target.textContent = "o";
          playerTurn = "x";
          playerTitleParag.textContent = "Player X's turn";
        }
      }
    });
  }
})();
