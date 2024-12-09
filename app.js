// Import Chess.js and Chessboard.js dependencies

const board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'snapback',
    position: 'start',
    onDrop: onDrop
});

const chess = new Chessboard();

// Custom 15x15 board initialization
function initializeBoard() {
    // Extend the board and add extra pieces
    const newBoard = [];
    for (let rank = 1; rank <= 15; rank++) {
        for (let file = 1; file <= 15; file++) {
            newBoard.push({ position: `${file}${rank}`, piece: null });
        }
    }
    return newBoard;
}

// Handle piece moves
function onDrop(source, target) {
    const move = chess.move({
        from: source,
        to: target,
        promotion: 'q' // Promote to queen by default
    });

    if (move === null) return 'snapback'; // Invalid move
    updateGameStatus();
}

// Update game status
function updateGameStatus() {
    if (chess.in_checkmate()) {
        alert('Checkmate!');
    } else if (chess.in_stalemate()) {
        alert('Stalemate!');
    }
}
