// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4"
dodger.style.bottom = "100px"

console.log(dodger.style.left)
console.log(dodger.style.bottom)

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0 ) {
        dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    // let gameBoard = document.getElementById('game');
    
    let leftNumbers = dodger.style.left.replace("px", "");
    
    // let dodgerWidth = getComputedStyle(dodger)["width"].replace("px", ""); 
    // let gameBoardWidth = getComputedStyle(gameBoard)["width"].replace("px", "");

    let left = parseInt(leftNumbers, 10);
    // let dWidth = parseInt(dodgerWidth, 10);
    // let gbWidth = parseInt(gameBoardWidth, 10);
    
    if (left < 400 ) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft" ) {
        moveDodgerLeft()
    } else if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})