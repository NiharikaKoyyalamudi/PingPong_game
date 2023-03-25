const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const ball = document.getElementById('ball');
const player1score = document.getElementById('player1score');
const player2score = document.getElementById('player2score');
const gameArea = document.getElementById('gameArea');
const ballRadius = 10;
const paddleHeight = 60;
const paddleWidth = 10;

let ballX = 290;
let ballY = 190;
let dx = 5;
let dy = 5;

let player1Y = 170;
let player2Y = 170;
const playerSpeed = 10;

let score1 = 0;
let score2 = 0;

function moveBall() {
  ballX += dx;
  ballY += dy;
  checkCollision();
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
}

function checkCollision() {
  // Check collision with walls
  if (ballX + ballRadius > gameArea.offsetWidth || ballX - ballRadius < 0) {
    dx = -dx;
  }
  if (ballY + ballRadius > gameArea.offsetHeight || ballY - ballRadius < 0) {
    dy = -dy;
  }

  // Check collision with paddles
  if (ballX - ballRadius < player1.offsetWidth && ballY >= player1Y && ballY <= player1Y + paddleHeight) {
    dx = -dx;
    score1++;
    player1score.innerText = score1;
  }
  if (ballX + ballRadius > gameArea.offsetWidth - player2.offsetWidth && ballY >= player2Y && ballY <= player2Y + paddleHeight) {
    dx = -dx;
    score2++;
    player2score.innerText = score2;
}

// Check if game is over
if (score1 === 10) {
alert('Player 1 wins!');
resetGame();
} else if (score2 === 10) {
alert('Player 2 wins!');
resetGame();
}
}

function movePlayer(event) {
switch (event.key) {
case 'w':
if (player1Y - playerSpeed >= 0) {
player1Y -= playerSpeed;
player1.style.top = player1Y + 'px';
}
break;
case 's':
if (player1Y + paddleHeight + playerSpeed <= gameArea.offsetHeight) {
player1Y += playerSpeed;
player1.style.top = player1Y + 'px';
}
break;
case 'ArrowUp':
if (player2Y - playerSpeed >= 0) {
player2Y -= playerSpeed;
player2.style.top = player2Y + 'px';
}
break;
case 'ArrowDown':
if (player2Y + paddleHeight + playerSpeed <= gameArea.offsetHeight) {
player2Y += playerSpeed;
player2.style.top = player2Y + 'px';
}
break;
}
}

function resetGame() {
score1 = 0;
score2 = 0;
player1score.innerText = score1;
player2score.innerText = score2;
ballX = 290;
ballY = 190;
dx = 5;
dy = 5;
}

document.addEventListener('keydown', movePlayer);
setInterval(moveBall, 30);    
