$(document).ready(function() {
    const chessboard = $('.chessboard');

    for (let i = 0; i < 64; i++) {
        const cell = $('chessboard').addClass('cell');
        
        if (i % 2 === Math.floor(i / 8) % 2) {
            cell.addClass('black');
        } else {
            cell.addClass('white');
        }
        
        chessboard.append(cell);
    }
});