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
   var questionText = document.createElement("section");
   questionText.textContent = questionsArray[0].question;
   game.appendChild(questionText);

   var option1 = document.createElement("section")
   var option1button = document.createElement("input");
   option1button.setAttribute("type", "radio");
   option1button.setAttribute("name", "option 1");


   var option2 = document.createElement("input");
   option2.setAttribute("type", "radio");
   option1.setAttribute("name", "option 2")

   var option3 = document.createElement("input");
   option3.setAttribute("type", "radio");
   option3.setAttribute("name", "option 3");

   
   var option4 = document.createElement("input");
   option4.setAttribute("type", "radio");
   option3.setAttribute("name", "option 4");




}

gameStart.addEventListener("click", runGame);