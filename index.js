function getrandom(min,max)
{
  return Math.floor(Math.random()*(max-min)) + min;
}

var rannum1 = getrandom(1,7);
var rannum2 = getrandom(1,7);

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+rannum1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+rannum2+".png");

if(rannum1>rannum2)
{
  document.querySelector("h1").innerHtml = "player 1 Wins";
}
else if(rannum1<rannum2)
{
  document.querySelector("h1").textContent = "Player 2 Wins";
}
else{
  document.querySelector("h1").textContent = "Match Ties";
}
