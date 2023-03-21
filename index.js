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
      let divId = e.target.id;

      if (playerTurn == "x" && e.target.textContent === "") {
        e.target.textContent = "x";
        gameBoard.gameBoard[divId - 1] = e.target.textContent;
        playerTurn = "o";
        playerTitleParag.textContent = "Player O's turn";
        console.log(gameBoard.gameBoard);
      } else {
        if (e.target.textContent == "") {
          e.target.textContent = "o";
          gameBoard.gameBoard[divId - 1] = e.target.textContent;
          playerTurn = "x";
          playerTitleParag.textContent = "Player X's turn";
          console.log(gameBoard.gameBoard);
        }
      }
    });
  }
})();
