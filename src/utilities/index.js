export const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const colLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const ships = [
    {
        name: 'Carrier',
        length: 5,
    },
    {
        name: 'Battleship',
        length: 4,
    },
    {
        name: 'Cruiser',
        length: 3,
    },
    {
        name: 'Submarine',
        length: 3,
    },
    {
        name: 'Destroyer',
        length: 2,
    },
];

export const buildBoard = () => {
    let newBoard = [];

    for (let i = 0; i < 10; i++) {
        let row = [];
        for (let j = 0; j < 10; j++) {
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

export const isSpaceOccupied = (i, j, shipLen, vertical, board) => {
    if (vertical) {
        for (let k = 0; k < shipLen; k++) {
            if (board[i][j].status === 1) return true;
            i++;
        }
    } else {
        for (let k = 0; k < shipLen; k++) {
            if (board[i][j].status === 1) return true;
            j++;
        }
    }
    return false;
};

export const placeShip = (i, j, board, selectedShip, vertical, cb1, cb2) => {
    if (selectedShip < ships.length) {
        const newBoard = copyBoard(board);
        const shipLen = ships[selectedShip].length;

        if (!vertical) {
            const diff = newBoard[0].length - (j + shipLen);

            if (diff < 0) j += diff;

            if (isSpaceOccupied(i, j, shipLen, vertical, board)) return;

            for (let k = 0; k < shipLen; k++) {
                newBoard[i][j].status = 1;
                j++;
            }
        } else {
            const diff = newBoard.length - (i + shipLen);
            if (diff < 0) i += diff;

            if (isSpaceOccupied(i, j, shipLen, vertical, board)) return;

            for (let k = 0; k < shipLen; k++) {
                newBoard[i][j].status = 1;
                i++;
            }
        }
        cb1(newBoard);
        cb2(selectedShip + 1);
    }
};

export const handleHover = (i, j, board, vertical, readyToPlay, selectedShip, cb) => {
    if (!readyToPlay && selectedShip < ships.length) {
        const shipLen = ships[selectedShip].length;
        const newBoard = copyBoard(board);

        if (!vertical) {
            const diff = 10 - (j + shipLen);
            if (diff < 0) j += diff;

            for (let k = 0; k < shipLen; k++) {
                newBoard[i][j].hover = true;
                j++;
            }
        } else {
            const diff = 10 - (i + shipLen);
            if (diff < 0) i += diff;

            for (let k = 0; k < shipLen; k++) {
                newBoard[i][j].hover = true;
                i++;
            }
        }
        cb(newBoard);
    }
};
