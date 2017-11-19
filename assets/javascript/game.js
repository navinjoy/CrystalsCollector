var scoreToWin;
var userScore = 0;
var randNum1, randNum2, randNum3, randNum4;
var wins = 0;
var losses = 0;
var isGameOver=false;
var audio1 = new Audio('assets/images/sound1.mp3');
var audio2 = new Audio('assets/images/sound2.wav');
var audio3 = new Audio('assets/images/sound3.wav');
var audio4 = new Audio('assets/images/sound4.wav');
var claps = new Audio('assets/images/claps.wav');
var loose = new Audio('assets/images/loose.wav');

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetGame() {
	$('#randomNum h2').empty();
	$('#userscore h2').empty();
	$('#winloose').empty();
	$('#wins').empty();
	$('#losses').empty();
	
	gameStart();
	displayUserScore();
	displayScoreToWin();
	displayWinsLosses();
}

function displayScoreToWin() {
    $('#randomNum h2').text(scoreToWin);

}

function displayWinsLosses() {
    // wins = 0, losses = 0;
    $('#wins').append('Wins : ').append(wins);
    $('#losses').append('Losses : ').append(losses);
}

function gameStart() {
	isGameOver=false;
	userScore = 0;
    scoreToWin = getRandomNum(19, 120);
    randNum1 = getRandomNum(1, 12);
    randNum2 = getRandomNum(1, 12);
    randNum3 = getRandomNum(1, 12);
    randNum4 = getRandomNum(1, 12);
    console.log('scoreToWin : ', scoreToWin, 'Num1: ', randNum1, 'Num2: ', randNum2, 'Num3: ', randNum3, 'Num4: ', randNum4)
}

function displayUserScore() {

    $('#currentscore h2').text(userScore);
}

function gameContinue() {
    $('li img').on('click', function() {
    	$(this).toggleClass('spinEffect');
    	// $(this).css({animation: 'shake 0.5s', 'animation-iteration-count': '5s'})
        switch (this.id) {
            case 'crystal1':
            	audio1.play();
                userScore = userScore + randNum1;
                break;
            case 'crystal2':
            	audio2.play();
                userScore = userScore + randNum2;
                break;
            case 'crystal3':
            	audio3.play();
                userScore = userScore + randNum3;
                break;
            case 'crystal4':
            	audio4.play();
                userScore = userScore + randNum4;                       
        }
        displayUserScore();

        if (userScore === scoreToWin) {
        	wins++;
        	isGameOver = true;
        	claps.play();
        	$('#winloose').append("Hurray...You Won !!").css({'color': 'white'});

        } else if (userScore > scoreToWin) {
        	losses++;
			isGameOver = true;
			loose.play();
			$('#winloose').append("You Lost it !!");
			
        }

        if (isGameOver) {
        	setTimeout(resetGame, 2000);
        }
    })
}

resetGame();
gameContinue();
