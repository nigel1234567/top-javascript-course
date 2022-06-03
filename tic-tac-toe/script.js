// Gameboard module
const gameBoard = (() => {
    // Create new game
    newGame = function() {
        const rows = 3;
        const cols = 3;
        let container = document.querySelector('.game-grid')
        for (c = 0; c < (rows * cols); c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
            container.appendChild(cell).id = c;
        }
    }
    // Delete current game
    deleteGame = function() {
        gameGrid = document.querySelector('.game-grid')
        while (gameGrid.lastElementChild) {
            gameGrid.removeChild(gameGrid.lastElementChild);
        }
    }
    // Gameplay
    gamePlay = function() {
        // Get clicked cell
        chosenCell = document.getElementsByClassName('grid-item')
        // Click on cell to place symbol
            for (i = 0; i < 9; i++) {
                chosenCell[i].addEventListener('click', function(e) {
                    e.target.innerHTML = "X"
                    e.target.style.color = "red"
                    // Update class of opened cells
                    e.target.classList.add('test')
                    console.log(e.target.parentNode.childNodes[0])
                })
            }
        }
    // Return functions in module
    return {
        newGame,
        deleteGame,
        gamePlay
    };
})();

// Initial instance of game
gameBoard.newGame();
gameBoard.gamePlay();

// New game button
btnNew = document.getElementById("new")

// New game on click
btnNew.addEventListener('click', () => {
    gameBoard.deleteGame();
    gameBoard.newGame();
    gameBoard.gamePlay();
})



