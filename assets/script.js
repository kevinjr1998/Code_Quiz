var gameStart = document.getElementById("gameStart");
var game = document.getElementById("game");
var timer = document.getElementById("timer");
var scoreCounter = document.getElementById("score");
var highScore = document.getElementById("highScore");

var questionsArray = [];

question1 = {
    question: "How do you write an if statement in JavaScript?",
    correct: "if(condition){Code to exectute if condition met}",
    incorrect1: "if(code to execute if condition met){ condition }",
    incorrect2: "if({code to execute if conditon met} condition)",
    incorrect3: "if{condition(code to execute if condition met)}",
    correctIndex: 2,
    incorrect1Index: 3,
    incorrect2index: 1,
    incorrect3Index: 0,
    optionOrder: [1, 2, 0, 3]
}

questionsArray.push(question1);


question2 = {
    question: "What type of variable numberOfFruits is the following: var numberofFruits = 3; ?",
    correct: "number",
    incorrect1: "string",
    incorrect2: "boolean",
    incorrect3: "undefined",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [0,1,2,3]
}

questionsArray.push(question2);




var highScoreStored = document.createElement("section");
highScoreStored.setAttribute("id", "highScoreStored");
highScoreStored.textContent = "High Score: " + localStorage.getItem("Score");
highScore.appendChild(highScoreStored);

var highScoreName = document.createElement("section");
highScoreName.setAttribute("id", "highScoreName");
highScoreName.textContent = "Player: " + localStorage.getItem("playerName");
highScore.appendChild(highScoreName);


var score = 0;

function gameScore(){
    score++;
    scoreCounter.textContent = "Score: " + score;
}
var questionIndex = 0;

var secondsLeft = 2;

function runGame(event){

    gameStart.remove();

    event.stopPropagation();
    document.removeEventListener("click", gameStart);

    if (questionIndex == questionsArray.length){
        gameOver();
        return;
    }

  

    var questionAnswersArray = [0, 1, 2, 3];

    
    questionAnswersArray[questionsArray[questionIndex].correctIndex] = questionsArray[questionIndex].correct;
    questionAnswersArray[questionsArray[questionIndex].incorrect1Index] = questionsArray[questionIndex].incorrect1;
    questionAnswersArray[questionsArray[questionIndex].incorrect2index] = questionsArray[questionIndex].incorrect2;
    questionAnswersArray[questionsArray[questionIndex].incorrect3Index] = questionsArray[questionIndex].incorrect3;


    var questionText = document.createElement("section");
    questionText.setAttribute("class", "answer");
    questionText.textContent = questionsArray[questionIndex].question;
    game.appendChild(questionText);

   
    var option1 = questionsArray[questionIndex].correctIndex;


    option1 = document.createElement("button");
    option1.setAttribute("class", "correct");
    option1.textContent = questionsArray[questionIndex].correct;


    var option2 = questionsArray[questionIndex].incorrect1Index;

    option2 = document.createElement("button");
    option2.setAttribute("class", "answer");
    option2.textContent = questionsArray[questionIndex].incorrect1;

    var option3 = questionsArray[questionIndex].incorrect2Index;
    option3 = document.createElement("button");
    option3.setAttribute("class", "answer");
    option3.textContent = questionsArray[questionIndex].incorrect2;

    var option4 = questionsArray[questionIndex].incorrect3Index;

    option4 = document.createElement("button");
    option4.setAttribute("class", "");
    option4.textContent = questionsArray[questionIndex].incorrect3;


    var answerOrder = [option1, option2, option3, option4];


   

    for (var i = 0; i < 4; i++){
        game.appendChild(answerOrder[questionsArray[questionIndex].optionOrder[i]]);
    }
  

    option1.addEventListener("click", function(event){
        event.stopPropagation();
        gameScore();
        game.textContent = "";
        questionIndex++;
        runGame(event);

    });

    option2.addEventListener("click", function(event){ 
        event.stopPropagation();
        secondsLeft = secondsLeft - 2;
        game.textContent = "";
        runGame(event);
    });

    option3.addEventListener("click", function(event){ 
        event.stopPropagation();
        secondsLeft = secondsLeft - 2;
        game.textContent = "";
        runGame(event);
    });

   option4.addEventListener("click", function(event){ 
        event.stopPropagation();
        secondsLeft = secondsLeft - 2;
        game.textContent = "";
        runGame(event);
    });

}

function gameOver(){
    game.textContent = "";
    var gameOverEl = document.createElement("section");
    gameOverEl.setAttribute("id", "Game_Over");
    gameOverEl.textContent = "Game Over";

    var playerName = document.createElement("input");
    playerName.setAttribute("type", "text");
    playerName.setAttribute("value", "");
    playerName.setAttribute("id", "Player_Name");
    
    var playerNameLabel = document.createElement("label");
    playerNameLabel.innerHTML = "Enter Your Name:";

    var submitScore = document.createElement("button");
    submitScore.setAttribute("id", "submit_score");
    submitScore.textContent = "Submit";

    var replayGame = document.createElement("button");
    replayGame.setAttribute("id", "replayGame");
    replayGame.textContent = "Press to Play Again";

    game.appendChild(gameOverEl);


    if (score >= localStorage.getItem("score")){


    
         game.appendChild(playerNameLabel);
         game.appendChild(playerName);
         game.appendChild(submitScore);

        submitScore.addEventListener("click", function(event){
            event.preventDefault();
            event.stopPropagation();

            localStorage.setItem("playerName", playerName.value);
            localStorage.setItem("Score", score);
            playerName.textContent = "";


        })

    }

    game.appendChild(replayGame);

    replayGame.addEventListener("click", function(){
        location.reload();
    })
}


function gameTimer(){
    if (secondsLeft == 0){
        return;
    } else {
        var timerInterval = setInterval(function(){
           secondsLeft--;
          timer.textContent = secondsLeft + " seconds left ";

           if(secondsLeft < 1) {
              clearInterval(timerInterval);
              gameOver();
           }
      }, 1000)
    }
}

gameStart.addEventListener("click", runGame);
gameStart.addEventListener("click", gameTimer);
