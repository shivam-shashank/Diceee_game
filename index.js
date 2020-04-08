var random_number1 = Math.floor((Math.random()*6)+1);
var random_number2 = Math.floor((Math.random()*6)+1);




document.querySelectorAll("img")[0].setAttribute("src" , "images/dice"+random_number1+".png");
document.querySelectorAll("img")[1].setAttribute("src" , "images/dice"+random_number2+".png");


if (random_number1>random_number2){
	document.querySelector("h1").textContent = "🎈Player1 Wins"
}
else if(random_number2>random_number1){
	document.querySelector("h1").textContent = "Player2 Wins🎈"
}
else{
	document.querySelector("h1").textContent = "Draw"
}