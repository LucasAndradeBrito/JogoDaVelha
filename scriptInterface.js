//Variáveis
let squares = document.querySelectorAll(".square");
let buttonContinuar = document.querySelector("#buttonContinuar");
let apresentation = document.querySelector(".apresentation");
let playerConfiguration = document.querySelector(".playerConfiguration");
let alertMsg = document.querySelector(".alertMsg");
let game = document.querySelector(".game");
let buttonReset = document.querySelector("#buttonReset");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let msg = document.querySelector(".msg");

//Buttons

buttonReset.addEventListener("click", reset);
buttonContinuar.addEventListener("click", continuar);

function continuar() {
  apresentation.style.display = "none";
  playerConfiguration.style.display = "inline";
}

function entendi() {
  alertMsg.innerHTML = null;
  alertMsg.style.display = "none";
  playerConfiguration.style.display = "inline";
}

function começar() {
  if (player1.value != "" && player2.value != "") {
    playerConfiguration.style.display = "none";
    game.style.display = "flex";
  } else if (player1.value == "" && player2.value == "") {
    alertMsg.innerHTML = `<h1>Atenção!</h1>
    <h3>Informe os nomes dos jogadores</h3>
    <button class="alertButton" onclick="entendi()">Entendi</button>`;
    alertMsg.style.display = "inline";
    playerConfiguration.style.display = "none";
  } else if (player1.value == "") {
    alertMsg.innerHTML = `
      <h1>Atenção!</h1>
      <h3>Informe o nome do jogador 1</h3>
      <button class="alertButton" onclick="entendi()">Entendi</button>`;
    alertMsg.style.display = "inline";
    playerConfiguration.style.display = "none";
  } else {
    alertMsg.innerHTML = `
      <h1>Atenção!</h1>
      <h3>Informe o nome do jogador 2</h3>
      <button class="alertButton" onclick="entendi()">Entendi</button>`;
    alertMsg.style.display = "inline";
    playerConfiguration.style.display = "none";
  }

  console.log(player1.value);
  console.log(player2.value);
}

//Código do placar

//Código do jogo

document.addEventListener("DOMContentLoaded", () => {
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  // Em caso de vitória
  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime == 1) {
        msg.innerHTML = `<h1>Vitória!</h1>
            <h3>${player1.value} foi o(a) vencedor(a). Com a sequência: ${winSeq}</h3>
            <button id="buttonRestart" onclick="restart()">Restart</button>`;
        msg.style.display = "inline";
      } else {
        msg.innerHTML = `<h1>Vitória!</h1>
            <h3>${player2.value} foi o(a) vencedor(a). Com a sequência: ${winSeq}</h3>
            <button id="buttonRestart" onclick="restart()">Restart</button>`;
        msg.style.display = "inline";
      }
    }, 10);
  }

  // Em caso de empate
  else if (draw()) {
    setTimeout(() => {
      msg.innerHTML = `<h1>Empate!</h1>
        <h3>Não houve vencedores nesse round, vamos tentar novamente!</h3>
        <button id="buttonRestart" onclick="restart()">Restart</button>`;
      msg.style.display = "inline";
    }, 10);
  }

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class=${symbol}></div>`;
}

// Botões do jogo

function restart() {
  msg.innerHTML = null;
  msg.style.display = "none";
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  position = 0;

  for (let square of squares) {
    square.innerHTML = "";
  }
}

function reset() {
  document.location.reload(true);
}
