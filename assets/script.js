var gameStart = document.getElementById("gameStart");
var game = document.getElementById("game");
var timer = document.getElementById("timer");
var scoreCounter = document.getElementById("score");

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

// function gameTimer(penalty){
//     var timerInverval = setInterval(function(){


//     })

// }

var score = 0;

function gameScore(){
    score++;
    scoreCounter.textContent = "Score: " + score;
}
var questionIndex = 0;

var secondsLeft = 10;

function runGame(event){

    event.stopPropagation();

  

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
  


//    var option1 = document.createElement("button");
//    option1.setAttribute("class", "answer");
//    option1.textContent = questionsArray[questionIndex].incorrect2;
//    game.appendChild(option1);
   

//    var option2 = document.createElement("button");
//    option2.setAttribute("id", "incorrect1");
//    option2.textContent = questionsArray[0].incorrect1;
//    game.appendChild(option2);

//    var option3 = document.createElement("button");
//    option3.setAttribute("id", "correct");
//    option3.textContent = questionsArray[0].correct;
//    game.appendChild(option3);

//    var option4 = document.createElement("button");
//    option4.setAttribute("id", "incorrect3");
//    option4.textContent = questionsArray[0].incorrect3;
//    game.appendChild(option4);

   


   for (var i = 0; i < 3; i++){
       if (questionAnswersArray[questionsArray.correctIndex] == i)  {
           answerOrder[i].addEventListener("click", function(event){
               event.stopPropagation();
               gameScore();
               game.textContent = "";
               questionIndex++;
               runGame(event);

           })   
        } else {
            answerOrder[i].addEventListener("click", function(event){ 
            event.stopPropagation();
            secondsLeft = secondsLeft - 2;
            game.textContent = "";
            questionIndex++;
            
            runGame(event);
            })       
        }
        
    }

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
              game.textContent = "";
              // sendMessage();
           }
      }, 1000)
    }
}

gameStart.addEventListener("click", runGame);
gameStart.addEventListener("click", gameTimer);