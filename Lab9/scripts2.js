var todayDate = new Date(); //set new date

var todayFullYear = todayDate.getFullYear(); //gives year

myPrompt = prompt("What is your age?");

var birthYear = todayFullYear - myPrompt;

console.log(todayFullYear); //logs year

console.log(myPrompt); //logs user input

console.log(birthYear); //logs birth year

function displayText() {
    document.getElementById("showYear").innerHTML = birthYear;
}
