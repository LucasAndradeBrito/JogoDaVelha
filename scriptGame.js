//Variáveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;
let symbols = ["o", "x"];
let peaces = 0;
let winSeq = [];
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Funções do jogo

function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = winner();

    playerTime = playerTime == 0 ? 1 : 0;
  }
  return gameOver;
}

// Em caso de vitória

function winner() {
  for (let i = 0; i < winStates.length; i++) {
    let sequence = winStates[i];

    let pos1 = sequence[0];
    let pos2 = sequence[1];
    let pos3 = sequence[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      winSeq = [pos1, pos2, pos3];
      return true;
    }
  }
}

// Em caso de empate

function draw() {
  let peaces = 0;

  for (let i = 0; i < board.length; i++) {
    if (board[i] != "") {
      peaces += 1;

      if (peaces == board.length) {
        return true;
      }
    }
  }
}
