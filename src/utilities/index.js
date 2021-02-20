export const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const colLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const ships = [
    {
        name: 'Carrier',
        length: 5,
        ship: [0, 0, 0, 0, 0],
    },
    {
        name: 'Battleship',
        length: 4,
        ship: [0, 0, 0, 0],
    },
    {
        name: 'Cruiser',
        length: 3,
        ship: [0, 0, 0],
    },
    {
        name: 'Submarine',
        length: 3,
        ship: [0, 0, 0],
    },
    {
        name: 'Destroyer',
        length: 2,
        ship: [0, 0, 0],
    },
];

export const buildBoard = () => {
    let newBoard = [];

    for (let row = 0; row < 10; row++) {
        let row = [];
        for (let col = 0; col < 10; col++) {
            row.push({ status: 0, hover: false });
        }
        newBoard.push(row);
    }
    return newBoard;
};

export const copyBoard = (currBoard) => {
    const newBoard = buildBoard();

    currBoard.forEach((row, i) => {
        row.forEach((col, j) => {
            newBoard[i][j].status = currBoard[i][j].status;
        });
    });
    return newBoard;
};

export const isSpaceOccupied = (row, col, shipLen, vertical, board) => {
    if (vertical) {
        for (let k = 0; k < shipLen; k++) {
            if (board[row][col].status === 1) return true;
            row++;
        }
    } else {
        for (let k = 0; k < shipLen; k++) {
            if (board[row][col].status === 1) return true;
            col++;
        }
    }
    return false;
};

export const placeShip = (row, col, board, shipIdx, vertical, cb1, cb2, dict) => {
    if (shipIdx < ships.length) {
        const newBoard = copyBoard(board);
        const shipLen = ships[shipIdx].length;

        if (!vertical) {
            const diff = newBoard[0].length - (col + shipLen);

            if (diff < 0) col += diff;
            if (isSpaceOccupied(row, col, shipLen, vertical, board)) return;

            for (let k = 0; k < shipLen; k++) {
                dict[ships[shipIdx].name].push([row, col]);
                newBoard[row][col].status = 1;
                col++;
            }
        } else {
            const diff = newBoard.length - (row + shipLen);

            if (diff < 0) row += diff;
            if (isSpaceOccupied(row, col, shipLen, vertical, board)) return;

            for (let k = 0; k < shipLen; k++) {
                newBoard[row][col].status = 1;
                dict[ships[shipIdx].name].push([row, col]);
                row++;
            }
        }
        cb1(newBoard);
        cb2(shipIdx + 1);
    }
};

export const handleHover = (row, col, board, vertical, readyToPlay, shipIdx, cb) => {
    if (!readyToPlay && shipIdx < ships.length) {
        const shipLen = ships[shipIdx].length;
        const newBoard = copyBoard(board);

        if (!vertical) {
            const diff = 10 - (col + shipLen);
            if (diff < 0) col += diff;

            for (let k = 0; k < shipLen; k++) {
                newBoard[row][col].hover = true;
                col++;
            }
        } else {
            const diff = 10 - (row + shipLen);
            if (diff < 0) row += diff;

            for (let k = 0; k < shipLen; k++) {
                newBoard[row][col].hover = true;
                row++;
            }
        }
        cb(newBoard);
    }
};

export const generateComputerBoard = (dict) => {
    let board = buildBoard();
    let shipIdx = 0;

    while (shipIdx < 5) {
        let shipLen = ships[shipIdx].length;
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let vertical = Math.floor(Math.random() * 2);
        let shipCoordinates = [];
        let copy;

        if (vertical) {
            const diff = 10 - (row + shipLen);

            if (diff < 0) row += diff;
            if (!checkIfVacant(row, col, shipLen, board, true)) continue;

            copy = copyBoard(board);

            for (let i = 0; i < shipLen; i++) {
                shipCoordinates.push([row, col]);
                copy[row][col].status = 1;
                row++;
            }
            dict[ships[shipIdx].name] = shipCoordinates;
        } else {
            const diff = 10 - (col + shipLen);

            if (diff < 0) col += diff;
            if (!checkIfVacant(row, col, shipLen, board, false)) continue;

            copy = copyBoard(board);

            for (let i = 0; i < shipLen; i++) {
                shipCoordinates.push([row, col]);
                copy[row][col].status = 1;
                col++;
            }
            dict[ships[shipIdx].name] = shipCoordinates;
        }
        board = copyBoard(copy);
        shipIdx++;
    }
    //console.log(dict);
    return board;
};

const checkIfVacant = (row, col, shipLen, board, vertical) => {
    if (vertical) {
        for (let i = 0; i < shipLen; i++) {
            if (board[row][col].status === 1) {
                return false;
            }
            row++;
        }
    } else {
        for (let i = 0; i < shipLen; i++) {
            if (board[row][col].status === 1) {
                return false;
            }
            col++;
        }
    }
    return true;
};
