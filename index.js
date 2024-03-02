// player 1 Dice

var randomNumber1= Math.floor(Math.random()*6)+1; // 1-6 

var randomDieceImage = "dice" + randomNumber1 + ".png"; //dicel1.png- dicel6.png
var randomInageSource = "images/"+ randomDieceImage; //images/dicel.png-images/dicel6.png


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomInageSource);




// player 2 Dice 

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomDieceImage2 = "dice" + randomNumber2 + ".png";

var randomInageSource2 = "images/" + randomDieceImage2;

var image1 = document.querySelectorAll("img")[1].setAttribute("src" , randomInageSource2);


//Other segments 

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🔥Player 1 Wins";
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins🔥";
}
else if(randomNumber1 = randomNumber2){
    document.querySelector("h1").innerHTML="😶Draws";
}
