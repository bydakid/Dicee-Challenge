//dice images change
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImgage = "dice" + randomNumber1 + ".png"; //dice images 1 to 6

var randomImageSource = "images/" + randomDiceImgage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//h1 text wich player won or lost
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins woop woop";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins hihi";
}
else {
  document.querySelector("h1").innerHTML= "DRAW !";
}
