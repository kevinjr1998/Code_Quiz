var gameStart = document.getElementById("gameStart");
var game = document.getElementById("game");
var timer = document.getElementById("timer");

var questionsArray = [];

question1 = {
    question: "How do you write an if statement in JavaScript?",
    correct: "if(condition){Code to exectute if condition met}",
    incorrect1: "if(code to execute if condition met){ condition }",
    incorrect2: "if({code to execute if conditon met} condition)",
    incorrect3: "if{condition(code to execute if condition met)}"
}

questionsArray.push(question1);


function runGame(event){
    event.stopPropagation();

   var questionText = document.createElement("section");
   questionText.textContent = questionsArray[0].question;
   game.appendChild(questionText);

   var option1 = document.createElement("button");
   option1.setAttribute("id", "incorrect2");
   option1.textContent = questionsArray[0].incorrect2;
   game.appendChild(option1);
   

   var option2 = document.createElement("button");
   option2.setAttribute("id", "incorrect1");
   option2.textContent = questionsArray[0].incorrect1;
   game.appendChild(option2);

   var option3 = document.createElement("button");
   option3.setAttribute("id", "correct");
   option3.textContent = questionsArray[0].correct;
   game.appendChild(option3);

   
   var option4 = document.createElement("button");
   option4.setAttribute("id", "incorrect3");
   option4.textContent = questionsArray[0].incorrect3;
   game.appendChild(option4);
}

gameStart.addEventListener("click", runGame);