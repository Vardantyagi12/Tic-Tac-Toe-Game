let box = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let trun0 = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

       
//Adding event listeners to each box
box.forEach((e) => {
    e.addEventListener("click", () => {
        if (trun0 === true) { // Player X
            e.innerHTML = "X";
            trun0 = false;
        } else {// Player 0
            e.innerHTML = "O";
            trun0 = true;
        }
        e.disabled = true;
        checkwin();
    })
});

//Function to check if there is a winner 
const checkwin = () => {
    for (let pattern of winPattern) {
        if (box[pattern[0]].innerHTML === box[pattern[1]].innerHTML && box[pattern[1]].innerHTML === box[pattern[2]].innerHTML && box[pattern[0]].innerHTML !== "") {
            alert(`${box[pattern[0]].innerHTML} wins!`);
            resetGame();
            return;
        }   
    }
}

//Function to reset the game


