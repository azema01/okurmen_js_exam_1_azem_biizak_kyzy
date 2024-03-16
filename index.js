const chessboard = document.querySelector('.chessboard');

for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add(i % 2 === Math.floor(i / 8) % 2 ? 'white' : 'black');
    chessboard.appendChild(square);
}

console.log('chessboard');


