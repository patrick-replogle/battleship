import React from 'react';

import { buildBoard, copyBoard } from '../utilities';

class ComputerBoard extends React.Component {
    state = {
        board: buildBoard(),
        guesses: [],
        hits: [],
    };

    copyBoard = () => {
        const newBoard = this.buildBoard();

        this.state.board.forEach((row, i) => {
            row.forEach((col, j) => {
                newBoard[i][j] = this.state.board[i][j];
            });
        });
        return this.setState({
            board: newBoard,
        });
    };

    updateBoard(row, col, cb) {
        if (this.board[row][col] === 0) {
            this.board[row][col] = 1;
        } else {
            this.board[row][col] = 0;
        }
        this.copyBoard(col, cb);
    }

    render() {
        return <></>;
    }
}

export default ComputerBoard;