function init(score1,score2) {
    this.playerOneScore = score1;
    this.playerTwoScore = score2;



    document.getElementById('player-one-dice').setAttribute("src","assets/dice1.png");
    document.getElementById('player-two-dice').setAttribute("src","assets/dice1.png");

    rollDice();

}

function rollDice() {
    
    let playerOneRandomScore = getRandomInt(6);
    let playerTwoRandomScore = getRandomInt(6);

    document.getElementById('player-one-dice').setAttribute("src","assets/dice"+playerOneRandomScore+".png");
    document.getElementById('player-two-dice').setAttribute("src","assets/dice"+playerTwoRandomScore+".png");

    if(playerOneRandomScore>playerTwoRandomScore){
        document.getElementsByClassName('main-heading')[0].innerHTML = "Player One Wins";
    }
    else{
        document.getElementsByClassName('main-heading')[0].innerHTML = "Player Two Wins";
    }



}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
}


init(1,1);