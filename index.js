let gameBoard = {
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

  function removeEventSquareDivs(squareDivs) {
    for (let i = 0; i < squareDivs.length; i++) {
      squareDivs[i].removeEventListener("click", addSign);
    }
  }

  function checkXorO(gameBoardValue) {
    if (gameBoardValue === "x") {
      playerTitleParag.textContent = `Player X wins!`;
      removeEventSquareDivs(gameBoardDivs);
    } else if (gameBoardValue === "o") {
      playerTitleParag.textContent = `Player O wins!`;
      removeEventSquareDivs(gameBoardDivs);
    }
  }

  function checkWinner(gameBoard) {
    if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      return checkXorO(gameBoard[0]);
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
      return checkXorO(gameBoard[2]);
    } else if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      return checkXorO(gameBoard[0]);
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      return checkXorO(gameBoard[6]);
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      return checkXorO(gameBoard[0]);
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      return checkXorO(gameBoard[2]);
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      return checkXorO(gameBoard[3]);
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      return checkXorO(gameBoard[1]);
    }
  }

  function addSign(e) {
    let divId = e.target.id;

    if (playerTurn == "x" && e.target.textContent === "") {
      e.target.textContent = "x";
      gameBoard.gameBoard[divId - 1] = e.target.textContent;
      playerTurn = "o";
      playerTitleParag.textContent = "Player O's turn";
      checkWinner(gameBoard.gameBoard);
      console.log(gameBoard.gameBoard);
    } else {
      if (e.target.textContent == "") {
        e.target.textContent = "o";
        gameBoard.gameBoard[divId - 1] = e.target.textContent;
        playerTurn = "x";
        playerTitleParag.textContent = "Player X's turn";
        checkWinner(gameBoard.gameBoard);
        console.log(gameBoard.gameBoard);
      }
    }
  }

  for (let i = 0; i < gameBoardDivs.length; i++) {
    gameBoardDivs[i].addEventListener("click", addSign);
  }
})();
