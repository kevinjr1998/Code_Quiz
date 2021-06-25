var gameStart = document.getElementById("gameStart");
var game = document.getElementById("game");
var timer = document.getElementById("timer");
var scoreCounter = document.getElementById("score");
var highScore = document.getElementById("highScore");

var questionsArray = [];

question1 = {
    question: "How do you write an 'if' statement for when i is equal to 5?",
    correct: "if(i==5) then",
    incorrect1: "if i = 5 then",
    incorrect2: "if i == 5 then",
    incorrect3: "i = 5 then",
    correctIndex: 2,
    incorrect1Index: 3,
    incorrect2index: 1,
    incorrect3Index: 0,
    optionOrder: [1, 2, 0, 3]
}

questionsArray.push(question1);


question2 = {
    question: "What type of variable 'numberOfFruits' is the following: var numberOfFruits = 3; ?",
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

question3 = {
    question: "Which method will set a HTML element as a variable.?",
    correct: "getAttribute()",
    incorrect1: "setAttribute()",
    incorrect2: "createElement()",
    incorrect3: "appendChild()",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [1,0,3,2]
}

questionsArray.push(question3);

question4 = {
    question: "What is the method to write 'Hello World' to an alert box?",
    correct: "alert('Hello World')",
    incorrect1: "prompt('Hello World')",
    incorrect2: "text('Hello World')",
    incorrect3: "console.log('Hello World')",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [2,3,1,0]
}

questionsArray.push(question4);

question5 = {
    question: "How do you add a comment in JavaScript?",
    correct: "//this is a comment",
    incorrect1: "<!-- this is a comment -->",
    incorrect2: "'this is a comment'",
    incorrect3: "(this is a comment)",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [2,0,1,3]
}

questionsArray.push(question5);

question6 = {
    question: "Which event occurs when the user clicks on an HTML element?",
    correct: "onclick",
    incorrect1: "onfocus",
    incorrect2: "onchange",
    incorrect3: "onmousehover",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [2,1,0,3]
}

questionsArray.push(question6);

question7 = {
    question: "Which values is used to assign a variable a value?",
    correct: "=",
    incorrect1: "-",
    incorrect2: "+",
    incorrect3: "*",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [0,2,3,1]
}

questionsArray.push(question7);

question8 = {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    correct: "<script src='script.js'>",
    incorrect1: "<script is script.js>",
    incorrect2: "<script = 'script.js'>",
    incorrect3: "<script src == script.js>",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [2,1,3,0]
}

questionsArray.push(question8);

question9 = {
    question: "What type will 'test' be in the following?: var test ",
    correct: "undefined",
    incorrect1: "string",
    incorrect2: "boolean",
    incorrect3: "number",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [1,0,2,3]
}

questionsArray.push(question9);

question10 = {
    question: " How do you add data items to local storage?",
    correct: "localStorage.setItem('petName','Whiskers')",
    incorrect1: "localStorage.setItem(petName Whiskers)",
    incorrect2: "localStorage.getItem('petName','Whiskers')",
    incorrect3: "localStorage.removeItem('petName')",
    correctIndex: 0,
    incorrect1Index: 2,
    incorrect2index: 1,
    incorrect3Index: 3,
    optionOrder: [1,3,0,2]
}

questionsArray.push(question10);



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

var secondsLeft = 41;

function runGame(event){

    gameStart.remove();

    event.stopPropagation();
    document.removeEventListener("click", gameStart);

    if (questionIndex == questionsArray.length){
        gameOver();
        return;
    }

    if(questionIndex == 0){
        scoreCounter.textContent = "Score: " + score;
    }

    var questionText = document.createElement("section");
    questionText.setAttribute("class", "question");
    questionText.textContent = questionsArray[questionIndex].question;
    game.appendChild(questionText);

   
    var option1 = questionsArray[questionIndex].correctIndex;
    option1 = document.createElement("button");
    option1.setAttribute("class", "answer");
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
    option4.setAttribute("class", "answer");
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
    secondsLeft = 0;
    game.textContent = "";
    var gameOverEl = document.createElement("section");
    gameOverEl.setAttribute("id", "Game_Over");
    gameOverEl.textContent = "Game Over";

    var playerName = document.createElement("input");
    playerName.setAttribute("type", "text");
    playerName.setAttribute("value", "");
    playerName.setAttribute("id", "Player_Name");

    var yourScore = document.createElement("section");
    yourScore.setAttribute("id", "yourScore");
    yourScore.textContent = "Your Score: " + score;

    
    
    var playerNameLabel = document.createElement("label");
    playerNameLabel.innerHTML = "Enter Your Name:";

    var submitScore = document.createElement("button");
    submitScore.setAttribute("id", "submit_score");
    submitScore.textContent = "Submit";

    var replayGame = document.createElement("button");
    replayGame.setAttribute("id", "replayGame");
    replayGame.textContent = "Press to Play Again";

    game.appendChild(gameOverEl);
    game.appendChild(yourScore);

    if (score > localStorage.getItem("score")){


    
         game.appendChild(playerNameLabel);
         game.appendChild(playerName);
         game.appendChild(submitScore);

        submitScore.addEventListener("click", function(event){
            event.preventDefault();
            event.stopPropagation();

            localStorage.setItem("playerName", playerName.value);
            localStorage.setItem("Score", score);
            playerName.textContent = "";
            highScoreName.textContent = "Player: " + localStorage.getItem("playerName");
            highScoreStored.textContent = "High Score: " + localStorage.getItem("Score");

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
