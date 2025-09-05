import React, { useState } from 'react';
import './TicTacToe.css';


function checkWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function onClick(i) {
        if (squares[i] || checkWinner(squares))
            return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    const winner = checkWinner(squares);
    let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;
    
    return (
        <div className="ttt-container">
            <h2> Tic Tac Toe</h2>
            <div className="ttt-status">{status}</div>
            <div className="ttt-board">
                {squares.map((square, i) => (
                    <button className="ttt-square" key={i} onClick={() => onClick(i)}>
                        {square}
                    </button>
                ))}
            </div>
            <button className="tt-reset" onClick={() => { setSquares(Array(9).fill(null)); setXIsNext(true); }}>
                Reset
            </button>
        </div>
    )
}

export default TicTacToe;