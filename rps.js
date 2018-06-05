var playerScore=0;
var compScore=0;
var currentLang = null;
var pScore = document.getElementById("playerScore");
var cScore = document.getElementById("compScore");

var languageSet = {
  'ru': ["Камень", "Ножницы", "Бумага", "Начать игру"],
  'en': ["Rock", "Scissors", "Paper", "Start game"],
  'nl': ["Steen", "Schaar", "Papier", "Start het spel"]
};

  function selectLang(code) {
    currentLang = code;
    var subset = languageSet[currentLang];
    document.getElementById("startGame").innerHTML = subset[3];
    document.getElementById("rock").innerHTML= subset[0];
    document.getElementById("scissors").innerHTML = subset[1];
    document.getElementById("paper").innerHTML = subset[2];
  }

  function startGame(){
    pScore.innerHTML = 0;
    cScore.innerHTML = 0;
    playerScore = 0;
    compScore = 0;
    document.getElementById("gameResult").innerHTML = "";
  }

  function game (valueFromPlayer){
    if(playerScore == 9){
      pScore.innerHTML = 10;
      alert("Congrats! You win!");
    }else if(compScore == 9){
      cScore.innerHTML = 10;
      alert("Nope! Try again!");
    }else if(playerScore < 10 && compScore < 10){
      var moved = valueFromPlayer.innerText;
      var randomIndex = Math.floor(Math.random()*3);

      document.getElementById("gameResult").innerHTML = languageSet[currentLang][randomIndex];

      if (valueFromPlayer == randomIndex) {
        return;
      }

      if (valueFromPlayer == 0 && randomIndex == 1) {
        playerScore++;
      } else if (valueFromPlayer == 1 && randomIndex == 2) {
        playerScore++;
      } else if (valueFromPlayer == 2 && randomIndex == 0) {
        playerScore++;
      } else {
        compScore++;
      }
      pScore.innerHTML= playerScore;
      cScore.innerHTML = compScore;

    }
  }
