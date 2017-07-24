var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");


function askQuestion() {
  var card;

}

console.log("================ Basic Card ================")
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log("--------------------firstPresident.front--------------------")
console.log(firstPresident.front);

// "George Washington"
console.log("--------------------firstPresident.back--------------------")
console.log(firstPresident.back);

console.log("================ Cloze Card ================")

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
// "George Washington"
console.log("--------------------firstPresidentCloze.cloze--------------------")

console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log("--------------------firstPresidentCloze.partial--------------------")
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log("--------------------firstPresidentCloze.fullText--------------------")
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
console.log("--------------------firstPresidentCloze error test--------------------")
var brokenCloze = new ClozeCard("This doesn't work", "oops");



console.log("================ Basic Card ================")
var secondPresident = new BasicCard(
    "Who was the second president of the United States?", "John Adams");

// "Who was the first president of the United States?"
console.log("--------------------firstPresident.front--------------------")
console.log(secondPresident.front);

// "George Washington"
console.log("--------------------firstPresident.back--------------------")
console.log(secondPresident.back);

console.log("================ Cloze Card ================")

var secondPresidentCloze = new ClozeCard(
    "john adams was the second president of the United States.", "john adams");
// "George Washington"
console.log("--------------------firstPresidentCloze.cloze--------------------")

console.log(secondPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log("--------------------firstPresidentCloze.partial--------------------")
console.log(secondPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log("--------------------firstPresidentCloze.fullText--------------------")
console.log(secondPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
console.log("--------------------firstPresidentCloze error test--------------------")
var brokenCloze = new ClozeCard("This doesn't work", "oops");
