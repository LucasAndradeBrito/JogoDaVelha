//Variáveis
let squares = document.querySelectorAll(".square");
let buttonContinuar = document.querySelector("#buttonContinuar");
let apresentation = document.querySelector(".apresentation");
let playerConfiguration = document.querySelector(".playerConfiguration");
let alertMsg = document.querySelector(".alertMsg");
let game = document.querySelector(".game");
let buttonReset = document.querySelector("#buttonReset");
let inputPlayer1 = document.querySelector("#inputPlayer1");
let inputPlayer2 = document.querySelector("#inputPlayer2");
let msg = document.querySelector(".msg");
let platePlayer1 = document.querySelector(".platePlayer1");
let platePlayer2 = document.querySelector(".platePlayer2");
let plate1 = 0;
let plate2 = 0;

let efeito = false;

//Buttons

buttonReset.addEventListener("click", reset);
buttonContinuar.addEventListener("click", continuar);

//Button 1: Apresentation

function continuar() {
  apresentation.classList = "closeEffectApresentation";

  setTimeout(() => {
    playerConfiguration.style.display = "flex";
  }, 250);

  setTimeout(() => {
    apresentation.style.display = "none";
  }, 500);
}

//Button 3: Alert Mensage

function entendi() {
  //

  // playerConfiguration.style.display = "flex";
  // alertMsg.innerHTML = null;
  // alertMsg.style.display = "none";

  alertMsg.classList = "closeEffectRest";
  playerConfiguration.classList = "ReOpenEffectRest";

  setTimeout(() => {
    playerConfiguration.style.display = "flex";
  }, 250);

  setTimeout(() => {
    alertMsg.innerHTML = null;
    alertMsg.style.display = "none";
  }, 500);

  //
}

//Button 2: Player Configuration

function comecar() {
  if (inputPlayer1.value != "" && inputPlayer2.value != "") {
    //

    // playerConfiguration.style.display = "none";
    // game.style.display = "flex";

    playerConfiguration.classList = "closeEffectRest";
    game.classList = "ReOpenEffectRest";

    setTimeout(() => {
      game.style.display = "flex";
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  } else if (inputPlayer1.value == "" && inputPlayer2.value == "") {
    //

    // alertMsg.innerHTML = `<h1>Atenção!</h1>
    // <h2>Informe os nomes dos jogadores</h2>
    // <button id="alertButton" onclick="entendi()">Entendi</button>`;
    // alertMsg.style.display = "flex";
    // playerConfiguration.style.display = "none";

    playerConfiguration.classList = "closeEffectRest";
    alertMsg.classList = "ReOpenEffectRest";

    setTimeout(() => {
      alertMsg.style.display = "flex";
      alertMsg.innerHTML = `<h1>Atenção!</h1>
    <h2>Informe os nomes dos jogadores</h2>
    <button id="alertButton" style="margin-top: 30px" onclick="entendi()">Entendi</button>`;
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  } else if (inputPlayer1.value == "") {
    //

    // alertMsg.innerHTML = `
    //   <h1>Atenção!</h1>
    //   <h2>Informe o nome do jogador 1</h2>
    //   <button id="alertButton" onclick="entendi()">Entendi</button>`;
    // alertMsg.style.display = "flex";
    // playerConfiguration.style.display = "none";

    playerConfiguration.classList = "closeEffectRest";
    alertMsg.classList = "ReOpenEffectRest";

    setTimeout(() => {
      alertMsg.style.display = "flex";
      alertMsg.innerHTML = `
      <h1>Atenção!</h1>
      <h2>Informe o nome do jogador 1</h2>
      <button id="alertButton" style="margin-top: 30px" onclick="entendi()">Entendi</button>`;
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  } else {
    //

    // alertMsg.innerHTML = `
    //   <h1>Atenção!</h1>
    //   <h2>Informe o nome do jogador 2</h2>
    //   <button id="alertButton" onclick="entendi()">Entendi</button>`;
    // alertMsg.style.display = "flex";
    // playerConfiguration.style.display = "none";

    playerConfiguration.classList = "closeEffectRest";
    alertMsg.classList = "ReOpenEffectRest";

    setTimeout(() => {
      alertMsg.style.display = "flex";
      alertMsg.innerHTML = `
      <h1>Atenção!</h1>
      <h2>Informe o nome do jogador 2</h2>
      <button id="alertButton" style="margin-top: 30px" onclick="entendi()">Entendi</button>`;
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  }

  //Código dos placares

  platePlayer1.innerHTML = `<h1>${inputPlayer1.value}: ${plate1}</h1>`;
  platePlayer2.innerHTML = `<h1>${inputPlayer2.value}: ${plate2}</h1>`;
}

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
            <h2>${inputPlayer1.value} foi o(a) vencedor(a). Com a sequência: ${winSeq}</h2>
            <button id="buttonRestart" onclick="restart()">Restart</button>`;
        msg.style.display = "inline";
        plate1 = plate1 + 1;
        platePlayer1.innerHTML = `<h1>${inputPlayer1.value}: ${plate1}</h1>`;
      } else {
        msg.innerHTML = `<h1>Vitória!</h1>
            <h2>${inputPlayer2.value} foi o(a) vencedor(a). Com a sequência: ${winSeq}</h2>
            <button id="buttonRestart" onclick="restart()">Restart</button>`;
        msg.style.display = "inline";
        plate2 = plate2 + 1;
        platePlayer2.innerHTML = `<h1>${inputPlayer2.value}: ${plate2}</h1>`;
      }
    }, 10);
  }

  // Em caso de empate
  else if (draw()) {
    setTimeout(() => {
      msg.innerHTML = `<h1>Empate!</h1>
        <h2>Não houve vencedores nesse round, vamos tentar novamente!</h2>
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
