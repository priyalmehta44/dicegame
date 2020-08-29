alert("Welcome to Dice Game!");
var playerName1 = prompt("First Player Name");
var playerName2 = prompt("Second Player Name");
document.querySelectorAll("p")[0].innerHTML = playerName1;
document.querySelectorAll("p")[1].innerHTML = playerName2;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = playerName1 + " won :)";
}else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = playerName2 + " won :)";
}else {
  document.querySelector("h1").innerHTML = "ooops! Try again :)";
}
