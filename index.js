

document.getElementById("my-btn").onclick = function() {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);

    let imgArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",];

    document.querySelector(".img1").setAttribute("src",imgArray[randomNumber1]);

    document.querySelector(".img2").setAttribute("src",imgArray[randomNumber2]);

    checkWinner(randomNumber1,randomNumber2);
}

function checkWinner(a,b)
{
    let element = document.querySelector("h1");
    if(a > b)
    {
        element.innerHTML = "🏁 Player 1 Wins";
    }
    else if(a < b)
    {
        element.innerHTML = "Player 2 Wins 🏁";
    }
    else
    {
        element.innerHTML = "Draw!"
    }
}