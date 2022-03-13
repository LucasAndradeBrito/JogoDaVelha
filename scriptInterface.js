//Variáveis
let squares = document.querySelectorAll(".square");
let buttonContinuar = document.querySelector("#buttonContinuar");
let apresentation = document.querySelector(".apresentation");
let playerConfiguration = document.querySelector(".playerConfiguration");
let alertMsg = document.querySelector(".alertMsg");
let game = document.querySelector(".game");
let buttonMainMenu = document.querySelector("#buttonMainMenu");
let inputPlayer1 = document.querySelector("#inputPlayer1");
let inputPlayer2 = document.querySelector("#inputPlayer2");
let inputRound = document.querySelector("#inputRound");
let msg = document.querySelector(".msg");
let plateRound = document.querySelector("#round");
let msgVictory = document.querySelector(".msgVictory");
let platePlayer1 = document.querySelector("#platePlayer1");
let platePlayer2 = document.querySelector("#platePlayer2");
let plate1 = 0;
let plate2 = 0;
let round = 1;

//Botões do Menu de seleção

buttonMainMenu.addEventListener("click", mainMenu);
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
  if (
    inputPlayer1.value != "" &&
    inputPlayer2.value != "" &&
    inputRound.value != 0
  ) {
    //

    game.classList = "openGame";
    playerConfiguration.classList = "closeEffectRest";

    setTimeout(() => {
      game.style.display = "flex";
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  } else if (
    inputPlayer1.value == "" &&
    inputPlayer2.value == "" &&
    inputRound.value == 0
  ) {
    //

    playerConfiguration.classList = "closeEffectRest";
    alertMsg.classList = "ReOpenEffectRest";

    setTimeout(() => {
      alertMsg.style.display = "flex";
      alertMsg.innerHTML = `<h1>Atenção!</h1>
    <h2>Informe os nomes dos jogadores e o nº de rodadas</h2>
    <button id="alertButton" style="margin-top: 30px" onclick="entendi()">Entendi</button>`;
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  } else if (inputPlayer1.value == "" && inputRound.value == 0) {
    //

    playerConfiguration.classList = "closeEffectRest";
    alertMsg.classList = "ReOpenEffectRest";

    setTimeout(() => {
      alertMsg.style.display = "flex";
      alertMsg.innerHTML = `
      <h1>Atenção!</h1>
      <h2>Informe o nome do jogador 1 e o nº de rodadas</h2>
      <button id="alertButton" style="margin-top: 30px" onclick="entendi()">Entendi</button>`;
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  } else if (inputPlayer2.value == "" && inputRound.value == 0) {
    //

    playerConfiguration.classList = "closeEffectRest";
    alertMsg.classList = "ReOpenEffectRest";

    setTimeout(() => {
      alertMsg.style.display = "flex";
      alertMsg.innerHTML = `
      <h1>Atenção!</h1>
      <h2>Informe o nome do jogador 2 e o nº de rodadas</h2>
      <button id="alertButton" style="margin-top: 30px" onclick="entendi()">Entendi</button>`;
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  } else if (inputPlayer2.value == "") {
    //

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
  } else {
    //

    playerConfiguration.classList = "closeEffectRest";
    alertMsg.classList = "ReOpenEffectRest";

    setTimeout(() => {
      alertMsg.style.display = "flex";
      alertMsg.innerHTML = `
      <h1>Atenção!</h1>
      <h2>Informe o nº de rodadas</h2>
      <button id="alertButton" style="margin-top: 30px" onclick="entendi()">Entendi</button>`;
    }, 250);

    setTimeout(() => {
      playerConfiguration.style.display = "none";
    }, 500);

    //
  }

  //Código dos placares

  platePlayer1.innerHTML = `<img src="./assets/o-redimencionado.png" alt="symbolO">
  <h1>${inputPlayer1.value}: ${plate1}</h1>`;
  platePlayer2.innerHTML = `<img src="./assets/x-redimencionado.png" alt="symbolX">
  <h1>${inputPlayer2.value}: ${plate2}</h1>`;
  plateRound.innerHTML = `<h1>Round ${round}/${inputRound.value}</h1>`;
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
    //

    setTimeout(() => {
      //

      if (playerTime == 1) {
        //

        msg.classList = "openMSG";

        msg.innerHTML = `<h1>Vitória!</h1> 
          <h2>${inputPlayer1.value} foi o(a) Vencedor(a)</h2>
          <h2>Sequência Vencedora: ${winSeq}</h2>
          <button id="buttonRestart" onclick="restart()">Restart</button>`;

        msg.style.display = "flex";

        plate1 = plate1 + 1;

        platePlayer1.innerHTML = `<img src="./assets/o-redimencionado.png" alt="symbolO">
                                  <h1>${inputPlayer1.value}: ${plate1}</h1>`;

        drawRound();

        //
      } else {
        //

        msg.classList = "openMSG";

        msg.innerHTML = `<h1>Vitória!</h1>
          <h2>${inputPlayer2.value} foi o(a) Vencedor(a)</h2>
          <h2>Sequência Vencedora: ${winSeq}</h2>
          <button id="buttonRestart" onclick="restart()">Restart</button>`;

        msg.style.display = "flex";

        plate2 = plate2 + 1;

        platePlayer2.innerHTML = `<img src="./assets/x-redimencionado.png" alt="symbolX">
                                  <h1>${inputPlayer2.value}: ${plate2}</h1>`;

        drawRound();

        //
      }
    }, 10);
  }

  //
  else if (draw()) {
    //

    setTimeout(() => {
      msg.classList = "openMSG";

      msg.innerHTML = `<h1>Empate!</h1>
        <h2>Não houve vencedor!</h2>
        <button id="buttonRestart" onclick="restart()">Restart</button>`;

      msg.style.display = "flex";

      drawRound();

      //
    }, 10);
  }

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class=${symbol}></div>`;
}

//Em caso de empate no placar final

function drawRound() {
  //

  if (round == inputRound.value) {
    //

    if (plate1 == plate2) {
      //

      msg.classList = "openMSG";

      msg.innerHTML = `<h1>Sem vencedores!</h1>
                     <h2>O que desejam fazer?</h2>
                     <div>
                     <button id="buttonOneMoreRound" onclick="oneMoreRound()">+1 Rodada</button>
                     <button id="buttonRestartOneMoreRound" onclick="mainMenu()">Voltar ao Menu</button>
                     </div>`;

      msg.style.display = "flex";

      //
    } else if (plate1 > plate2) {
      //

      msg.classList = "openMSG";

      msg.innerHTML = `<h1>Parabéns ${inputPlayer1.value}!</h1>
                     <h2>Você venceu a disputa!</h2>
                     <button id="buttonRestart" onclick="mainMenu()">Mudar jogadores</button>`;

      msg.style.display = "flex";

      //
    } else {
      //

      msg.classList = "openMSG";

      msg.innerHTML = `<h1>Parabéns ${inputPlayer2.value}!</h1>
                     <h2>Você venceu a disputa!</h2>
                     <button id="buttonRestart" onclick="mainMenu()">Mudar jogadores</button>`;

      msg.style.display = "flex";

      //
    }
  }
}

// Botões do jogo

function restart() {
  msg.classList = "closeMSG";

  setTimeout(() => {
    msg.style.display = "none";
  }, 500);

  round = round + 1;

  plateRound.innerHTML = `<h1>Round ${round}/${inputRound.value}</h1>`;

  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  position = 0;

  for (let square of squares) {
    square.innerHTML = "";
  }
}

function oneMoreRound() {
  //

  msg.classList = "closeMSG";

  setTimeout(() => {
    msg.style.display = "none";
  }, 500);

  inputRound.value = Number(inputRound.value) + 1;

  console.log(inputRound.value);

  round += 1;

  plateRound.innerHTML = `<h1>Round ${round}/${inputRound.value}</h1>`;

  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  position = 0;

  for (let square of squares) {
    square.innerHTML = "";
  }

  //
}

function mainMenu() {
  //

  playerConfiguration.classList = "ReOpenEffectRest";
  game.classList = "closeGame";

  setTimeout(() => {
    playerConfiguration.style.display = "flex";
  }, 250);

  setTimeout(() => {
    game.style.display = "none";
    msg.style.display = "none";
    msgVictory.style.display = "none";
  }, 500);

  inputRound.value = "";
  inputPlayer1.value = "";
  inputPlayer2.value = "";
  plate1 = 0;
  plate2 = 0;
  round = 1;

  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;
  position = 0;

  for (let square of squares) {
    square.innerHTML = "";
  }
}
