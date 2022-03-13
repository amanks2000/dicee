// Generating Random variables for the two Dices
var rand1 = Math.random();
rand1 = Math.floor(rand1*6) + 1;
var rand2 = Math.random();
rand2 = Math.floor(rand2*6) + 1;

// Selecting the img1 and img2 class to make changes in it
var p1 = document.querySelector(".dice .img1");
var p2 = document.querySelector(".dice .img2");

// Storing address of our random dice image in a string
var p1_dice = "images/dice" + rand1 + ".png";
var p2_dice = "images/dice" + rand2 + ".png";

// Changing Attribute of classes img1 and img2
p1.setAttribute("src", p1_dice);
p2.setAttribute("src", p2_dice);

if(rand1 > rand2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins🚩";
}

else if(rand1 < rand2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins🚩";
}

else {
  document.querySelector("h1").innerHTML = "It's a Draw!!";
}
