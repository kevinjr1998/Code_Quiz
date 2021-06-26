var gameStart = document.getElementById("gameStart"); //these lines grab the elements from the HTML                                           
var game = document.getElementById("game");           // Document that will be ammended and appended to
var timer = document.getElementById("timer");
var scoreCounter = document.getElementById("score");
var highScore = document.getElementById("highScore");
var questResult = document.getElementById("questResult");

var questionsArray = [];//declares and empty array that will hold the question items

//below are the objects that will hold the question, correct and incorrect andwers, the indexes that these answers are at, and the order that they will appear on the web page
//There are 10 of these objects
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

questionsArray.push(question1); //each of these will append the objects to the questions array.

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


// below is the code that creates the high score and player name and displays these at the side of the game.
// the high score is grabbed from local storage, written to an element and then appended to the webpage.

var highScoreStored = document.createElement("section");
highScoreStored.setAttribute("id", "highScoreStored");
highScoreStored.textContent = "High Score: " + localStorage.getItem("Score");
highScore.appendChild(highScoreStored);

var highScoreName = document.createElement("section");
highScoreName.setAttribute("id", "highScoreName");
highScoreName.textContent = "Player: " + localStorage.getItem("playerName");
highScore.appendChild(highScoreName);

// this global variable holds the score, 
var score = 0;

// this function increases the score and displays it on the web page
function gameScore(){
    score++;
    scoreCounter.textContent = "Score: " + score;
}

var questionIndex = 0; //this holds the index that a given question is at. This is used to loop through the questions.



var secondsLeft = 61; // this sets the time limit of the game.

//this is the main function that handles the functionality of the game. this will show the question on page, the buttons with the options, and determine whether the selected option is correct or not.

function runGame(event){

    gameStart.remove(); //removes the game start button when game runs
    event.preventDefault();
    event.stopPropagation();//prevens defauls and stops propogation of the event passed.

    if (questionIndex == questionsArray.length){ //this function runs game over function when the questions have all been answered.
        gameOver();
        return;
    }

    if(questionIndex == 0){
        scoreCounter.textContent = "Score: " + score; //shows the score at the pooint of begining to to play the game.
    }

    //the below 5 similar block of code each read in the questions and potential answers and append them to the document.
    //in particular the element with id 'game'

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




    var answerOrder = [option1, option2, option3, option4]; //this adds the elements containing the buttons, to an array to be sorted into appripriate order by function below. 

    
    for (var i = 0; i < 4; i++){// this function appends the buttons to the element in the order specified by the option order property of the question object
        game.appendChild(answerOrder[questionsArray[questionIndex].optionOrder[i]]);
    }
  

    option1.addEventListener("click", function(event){ //adds the event listener to the correct choice that will increase game score
        event.stopPropagation();                       // display correct in  an element and will move on to the next question
        gameScore();
        questResult.textContent = "Correct!";
        game.textContent = "";
        questionIndex++;
        runGame(event);
    });

    option2.addEventListener("click", incorrectAns); //calls back the incorrect ans function, passing it the click event.

    option3.addEventListener("click", incorrectAns);

   option4.addEventListener("click", incorrectAns);

}

function gameOver(){ //game over function
    secondsLeft = 0; //sets timer to 0
    game.textContent = ""; //clears the game element.
    var gameOverEl = document.createElement("section");
    gameOverEl.setAttribute("id", "Game_Over");
    gameOverEl.textContent = "Game Over!"; //appends game over 

    var playerName = document.createElement("input"); //sets up submit name text box
    playerName.setAttribute("type", "text");
    playerName.setAttribute("value", ""); 
    playerName.setAttribute("id", "Player_Name");

    var yourScore = document.createElement("section");
    yourScore.setAttribute("id", "yourScore");
    yourScore.textContent = "Your Score: " + score; //sets text content of the yourScore element to show score.


    var playerNameLabel = document.createElement("label");
    playerNameLabel.innerHTML = "Enter Your Name: "; //creates a label for the text box

    var submitScore = document.createElement("button");
    submitScore.setAttribute("id", "submit_score");
    submitScore.textContent = "Submit"; //creates submit button to submit name and high score

    var replayGame = document.createElement("button");
    replayGame.setAttribute("id", "replayGame");
    replayGame.textContent = "Press to Play Again"; //creates play again button.

    game.appendChild(gameOverEl); //appends game over element and score element to the game element
    game.appendChild(yourScore);

    if (score > localStorage.getItem("Score")){ // functions gives option to submit high score only if score greater than stored high score.


    
         game.appendChild(playerNameLabel);
         game.appendChild(playerName);
         game.appendChild(submitScore); //appends elements that allow to submit high score

         submitScore.addEventListener("click", function(event){ //this function allows you to submit your high score and writes it to local storage
            event.preventDefault();
            event.stopPropagation();

            localStorage.setItem("playerName", playerName.value); //sets text content of playerName element to local storage
            localStorage.setItem("Score", score);
            playerName.textContent = "";
            highScoreName.textContent = "Player: " + localStorage.getItem("playerName");
            highScoreStored.textContent = "High Score: " + localStorage.getItem("Score");

        })

    }

    game.appendChild(replayGame); //adds replay game button to game element

    replayGame.addEventListener("click", function(){ //simply reloads the page upon clicking button.
        location.reload();
    })
}

function incorrectAns(event){ //runs incorrect answer event, deducts time from timer and reloads question, not increasing index of question array
    event.stopPropagation();
    questResult.textContent = "Incorrect!";
    secondsLeft = secondsLeft - 2;
    game.textContent = "";
    runGame(event);
}

function gameTimer(){ //this is the game timer function, 
    if (secondsLeft == 0){//runs game over function when timer reaches 0
        clearInterval(timerInterval); 
        gameOver();
    } else {
        var timerInterval = setInterval(function(){ //each second, it will update the seconds left with the current amount of time left.
           secondsLeft--;
          timer.textContent = secondsLeft + " seconds left";

           if(secondsLeft < 1) {
              clearInterval(timerInterval);
              gameOver();
           }
      }, 1000)
    }
}

gameStart.addEventListener("click", runGame); //runs game on click
gameStart.addEventListener("click", gameTimer);//begins timer on click
