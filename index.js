var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");


function askQuestion() {
  var card;

}

console.log("================ Basic Card ================")
var HipHop = new BasicCard(
    "When did Outkast win Album of the Year at the Grammy's?", "2004");


console.log("--------------------HipHop.front--------------------")
console.log(HipHop.front);


console.log("--------------------HopHop.back--------------------")
console.log(HipHop.back);


console.log("================ Cloze Card ================")

var HipHopCloze = new ClozeCard(
    "Outkast Won Album of the Year at the Grammy's in 2004", "2004");

console.log("--------------------HipHopCloze.cloze--------------------")

console.log(HipHopCloze.cloze);


console.log("--------------------HipHopCloze.partial--------------------")
console.log(HipHopCloze.partial);


console.log("--------------------HipHopCloze.fullText--------------------")
console.log(HipHopCloze.fullText);


console.log("--------------------HipHopCloze error test--------------------")
var brokenCloze = new ClozeCard("This doesn't work", "oops");



// ----------------------------New Item-----------------------------------------


console.log("================ Basic Card ================")
var Falcons = new BasicCard(
    "Why did the Falcons lose the Superbowl in 2017?", "Poor 4th Quarter Defense");


console.log("--------------------Falcons.front--------------------")
console.log(Falcons.front);


console.log("--------------------Falcons.back--------------------")
console.log(Falcons.back);

console.log("================ Cloze Card ================")

var FalconsCloze = new ClozeCard(
    "Falcons Lost the Superbowl because of Poor 4th Quarter Defense", "Poor 4th Quarter Defense");

console.log("--------------------FalconsCloze.cloze--------------------")

console.log(FalconsCloze.cloze);


console.log("--------------------FalconsCloze.partial--------------------")
console.log(FalconsCloze.partial);


console.log("--------------------FalconsCloze.fullText--------------------")
console.log(FalconsCloze.fullText);


console.log("--------------------FalconsCloze error test--------------------")
var brokenCloze = new ClozeCard("This doesn't work", "oops");


// -----------------------------New Item-------------------------------------------


console.log("================ Basic Card ================")
var Malcolm = new BasicCard(
    "Why is Malcolm Strong so dang cool?", "Because he is Danggit");


console.log("--------------------Malcolm.front--------------------")
console.log(Malcolm.front);


console.log("--------------------Malcolm.back--------------------")
console.log(Malcolm.back);

console.log("================ Cloze Card ================")

var MalcolmCloze = new ClozeCard(
    "Malcolm Strong so dang cool Because he is Danggit", "Because he is Danggit");

console.log("--------------------MalcolmCloze.cloze--------------------")

console.log(MalcolmCloze.cloze);


console.log("--------------------MalcolmCloze.partial--------------------")
console.log(MalcolmCloze.partial);


console.log("--------------------MalcolmCloze.fullText--------------------")
console.log(MalcolmCloze.fullText);


console.log("--------------------MalcolmCloze error test--------------------")
var brokenCloze = new ClozeCard("This doesn't work", "oops");
