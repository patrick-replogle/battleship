export const initialShipState = () => ({
    Carrier: [],
    Battleship: [],
    Cruiser: [],
    Submarine: [],
    Destroyer: [],
});

export const pickFontColor = (cell) => {
    if (cell.status === 'ocean') {
        return 'white';
    } else if (cell.status === 'hit' && cell.alive) {
        return '#f44336';
    }
    return 'black';
};

export const pickBackgroundColor = (cell) => {
    if (cell.hover && cell.status === 'ship') {
        return '#f44336';
    } else if (cell.hover) {
        return '#ffea00';
    } else if (cell.status === 'ocean') {
        return '#006994';
    } else if (cell.status === 'ship' || cell.status === 'hit') {
        return '#848482';
    }
};

export const buildBoard = () => {
    let newBoard = [];

    for (let row = 0; row < 10; row++) {
        let row = [];
        for (let col = 0; col < 10; col++) {
            row.push({ status: 'ocean', hover: false, clicked: false, alive: true });
        }
        newBoard.push(row);
    }
    return newBoard;
};

export const copyBoard = (currBoard) => {
    const newBoard = buildBoard();

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            newBoard[row][col].status = currBoard[row][col].status;
            newBoard[row][col].clicked = currBoard[row][col].clicked;
            newBoard[row][col].alive = currBoard[row][col].alive;
        }
    }
    return newBoard;
};

export const checkIfVacant = (row, col, shipLen, board, vertical) => {
    if (vertical) {
        for (let i = 0; i < shipLen; i++) {
            if (board[row][col].status === 'ship') {
                return false; // ship has already been placed here
            }
            row++;
        }
    } else {
        for (let i = 0; i < shipLen; i++) {
            if (board[row][col].status === 'ship') {
                return false; // ship has already been placed here
            }
            col++;
        }
    }
    return true;
};

export const detectSink = (row, col, dict, board) => {
    for (let ship in dict) {
        for (let [i, j] of dict[ship]) {
            if (row === i && col === j) {
                let flag = true;
                for (let [x, y] of dict[ship]) {
                    if (board[x][y].status !== 'hit') {
                        flag = false; // only part of ship has been hit
                        break;
                    }
                }
                if (flag) {
                    for (let [x, y] of dict[ship]) {
                        board[x][y].alive = false; // ship has been sunk
                    }
                    return true;
                }
            }
        }
    }
    return false;
};
