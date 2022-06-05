// Players
const Player = (number, symbol) => {
    var array = []
    return { number, symbol, array }
}

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
    gamePlay = function(player_one, player_two) {
        // Initialize player, gameover and winner (new game)
        var currentPlayer = player_one;
        var gameover = false;
        var winner = ""
        // When cell is clicked
        chosenCell = document.getElementsByClassName('grid-item')
        // Click on cell to place symbol
            for (i = 0; i < 9; i++) {
                // Display current player name
                playerName = document.querySelector('.player')
                playerName.innerHTML = `Player ${currentPlayer.number}'s turn (${currentPlayer.symbol}')`
                if (currentPlayer.number == 1) {
                    playerName.style.color = "blue"
                }
                else {
                    playerName.style.color = "red"
                }

                // When cell is clicked
                chosenCell[i].addEventListener('click', function(e) {
                    // Check if cell already has a value
                    if (e.target.innerHTML != "") {
                        alert("Invalid selection!")
                    }
                    else if (gameover == true) {
                        alert(`The game is over! Please start a new game!`)
                    }
                    // Valid selection
                    else {
                        e.target.innerHTML = currentPlayer.symbol
                        if (currentPlayer.number == 1) {
                            e.target.style.color = "blue"
                        }
                        else {
                            e.target.style.color = "red"
                        }

                        // Update class of opened cells
                        e.target.classList.add(currentPlayer.number)

                        // Create cell constants
                        const cell_1 = e.target.parentNode.childNodes[0]
                        const cell_2 = e.target.parentNode.childNodes[1]
                        const cell_3 = e.target.parentNode.childNodes[2]
                        const cell_4 = e.target.parentNode.childNodes[3]
                        const cell_5 = e.target.parentNode.childNodes[4]
                        const cell_6 = e.target.parentNode.childNodes[5]
                        const cell_7 = e.target.parentNode.childNodes[6]
                        const cell_8 = e.target.parentNode.childNodes[7]
                        const cell_9 = e.target.parentNode.childNodes[8]

                        // Add current cell to player array
                        currentPlayer.array.push(parseInt(e.target.id))

                        // Winning combinations
                        winning_combos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]

                        var win = false; // Check if player wins
                        // Check win conditions
                        for (let x = 0; x < winning_combos.length; x++) {
                            combo = winning_combos[x]
                            win = combo.every(val => currentPlayer.array.includes(val))
                            console.log(win)
                            if (win == true) {
                                gameover = true;
                                winner = `Player ${currentPlayer.number}`
                                alert(`Game over! ${winner} won!`)
                            }
                        }

                        // Check if tie
                        if ((player_one.array.length + player_two.array.length) == 9 && winner == "") {
                            gameover = true;
                            alert(`It's a tie!`)
                        }

                        // Switch players
                        if (currentPlayer == player_one) {
                            currentPlayer = player_two
                        }
                        else {
                            currentPlayer = player_one
                        }
                        // Display current player name
                        playerName = document.querySelector('.player')
                        if (gameover == false) {
                            playerName.innerHTML = `Player ${currentPlayer.number}'s turn (${currentPlayer.symbol}')`
                            if (currentPlayer.number == 1) {
                                playerName.style.color = "blue"
                            }
                            else {
                                playerName.style.color = "red"
                            }
                        }
                        else {
                            // Tie
                            if (winner == "") {
                                playerName.innerHTML = `It's a tie!`
                            }
                            else {
                                playerName.innerHTML = `The winner is ${winner}!`
                            }
                        }
                    }
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

function main() {
    // Initialize players
    const playerOne = Player(1, "O") 
    const playerTwo = Player(2, "X")
    
    // Initial instance of game
    gameBoard.newGame();
    gameBoard.gamePlay(playerOne, playerTwo)
}

// New game button
btnNew = document.getElementById("new")

// New game on click
btnNew.addEventListener('click', () => {
    gameBoard.deleteGame();
    main();
})

main();