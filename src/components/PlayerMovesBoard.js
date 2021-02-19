import React, { useState } from 'react';

const PlayerMovesBoard = ({ moves }) => {
    const buildBoard = () => {
        return new Array(10).fill().map(() => new Array(10).fill(0));
    };

    const copyBoard = () => {
        const newBoard = buildBoard();

        board.forEach((row, i) => {
            row.forEach((col, j) => {
                newBoard[i][j] = board[i][j];
            });
        });
        return setBoard(newBoard);
    };

    function updateBoard(row, col, cb) {
        if (board[row][col] === 0) {
            board[row][col] = 1;
        } else {
            board[row][col] = 0;
        }
        copyBoard(col, cb);
    }

    const [board, setBoard] = useState(buildBoard());

    return (
        <div>
            {board.map((row, i) => {
                return (
                    <div style={{ display: 'flex' }} key={i}>
                        {row.map((col, j) => {
                            return (
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        border: '1px solid #424242',
                                        background: 'gray',
                                        fontSize: '4rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: col === 1 ? 'white' : col === 2 ? 'red' : '',
                                    }}
                                    key={j}
                                    onClick={() => updateBoard(i, j)}
                                >
                                    {col > 0 ? 'X' : ''}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default PlayerMovesBoard;
