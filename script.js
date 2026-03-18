let box = document.querySelectorAll('.box');
let newGameBtn = document.querySelector('#new-btn');
let restartBtn = document.querySelector('#restart-btn');
let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;
let gameActive = true;

function handleBoxClick(event) {
    let box = event.target;
}

box.forEach((box) => {
    box.addEventListener('click', handleBoxClick);
});

newGameBtn.addEventListener('click', () => {
    box.forEach((box) => {
        box.textContent = '';
    });
    gameActive = true;
});

restartBtn.addEventListener('click', () => {
    box.forEach((box) => {
        box.textContent = '';
    });

    gameActive = true;
});

