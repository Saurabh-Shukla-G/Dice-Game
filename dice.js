var player1 = 1 + Math.floor(Math.random()*6);
var player2 = 1 + Math.floor(Math.random()*6);

switch(player1)
{
    case 1:
    {
        document.querySelector(".img1").src="images/dice1.png";
        break;
    }
    case 2:
    {
        document.querySelector(".img1").src="images/dice2.png";
        break;
    }
    case 3:
    {
        document.querySelector(".img1").src="images/dice3.png";
        break;
    }
    case 4:
    {
        document.querySelector(".img1").src="images/dice4.png";
        break;
    }
    case 5:
    {
        document.querySelector(".img1").src="images/dice5.png";
        break;
    }
    case 6:
        document.querySelector(".img1").src="images/dice6.png";
}
switch(player2)
{
    case 1:
    {
        document.querySelector(".img2").src="images/dice1.png";
        break;
    }
    case 2:
    {
        document.querySelector(".img2").src="images/dice2.png";
        break;
    }
    case 3:
    {
        document.querySelector(".img2").src="images/dice3.png";
        break;
    }
    case 4:
    {
        document.querySelector(".img2").src="images/dice4.png";
        break;
    }
    case 5:
    {
        document.querySelector(".img2").src="images/dice5.png";
        break;
    }
    case 6:
        document.querySelector(".img2").src="images/dice6.png";
}

if(player1>player2)
{
    document.querySelector("h3").innerHTML="🚩👇 Player 1 win";
}
else if(player2>player1)
{
    document.querySelector("h3").innerHTML="Player 2 win 👇🚩";
}
else
{
    document.querySelector("h3").innerHTML="🚩👇 Match draw 👇🚩";
}