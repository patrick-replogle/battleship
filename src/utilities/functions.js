import { ships } from './data';

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

export const isSpaceOccupied = (row, col, shipLen, vertical, board) => {
    if (vertical) {
        for (let k = 0; k < shipLen; k++) {
            if (board[row][col].status === 'ship') return true;
            row++;
        }
    } else {
        for (let k = 0; k < shipLen; k++) {
            if (board[row][col].status === 'ship') return true;
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
                newBoard[row][col].status = 'ship';
                col++;
            }
        } else {
            const diff = newBoard.length - (row + shipLen);

            if (diff < 0) row += diff;
            if (isSpaceOccupied(row, col, shipLen, vertical, board)) return;

            for (let k = 0; k < shipLen; k++) {
                newBoard[row][col].status = 'ship';
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
            let diff = 10 - (row + shipLen);

            if (diff < 0) row += diff;
            if (!checkIfVacant(row, col, shipLen, board, true)) continue; // ship is already placed here

            copy = copyBoard(board);

            for (let i = 0; i < shipLen; i++) {
                shipCoordinates.push([row, col]);
                copy[row][col].status = 'ship';
                row++;
            }
            dict[ships[shipIdx].name] = shipCoordinates;
        } else {
            let diff = 10 - (col + shipLen);

            if (diff < 0) col += diff;
            if (!checkIfVacant(row, col, shipLen, board, false)) continue; // ship is already placed here

            copy = copyBoard(board);

            for (let i = 0; i < shipLen; i++) {
                shipCoordinates.push([row, col]);
                copy[row][col].status = 'ship';
                col++;
            }
            dict[ships[shipIdx].name] = shipCoordinates;
        }
        board = copyBoard(copy);
        shipIdx++;
    }
    return board;
};

const checkIfVacant = (row, col, shipLen, board, vertical) => {
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

export const generateMove = (playerBoard) => {
    for (let row = 0; row < playerBoard.length; row++) {
        for (let col = 0; col < playerBoard[0].length; col++) {
            if (
                playerBoard[row][col].clicked &&
                playerBoard[row][col].status === 'hit' &&
                playerBoard[row][col].alive
            ) {
                let nextMoves = getValidMoves(playerBoard, row, col); // there is an active ship that has been struck so run dfs to determine a next move
                if (nextMoves.length) {
                    let [x, y] = nextMoves.pop();
                    playerBoard[x][y].clicked = true;
                    playerBoard[x][y].status = 'hit';
                    return [x, y];
                }
            }
        }
    }
    return generateRandomMove(playerBoard); // no active ships are hit so choose at random
};

const generateRandomMove = (playerBoard) => {
    while (true) {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);

        if (playerBoard[row][col].clicked) continue;

        playerBoard[row][col].clicked = true;
        if (playerBoard[row][col].status === 'ship') {
            playerBoard[row][col].status = 'hit';
        }
        return [row, col];
    }
};

const getValidMoves = (playerBoard, row, col) => {
    let neighbors = [];
    let moves = [
        [-1, 0], // North
        [0, -1], // West
        [1, 0], // South
        [0, 1], // East
    ];

    function DFS(i, j) {
        if (i < 0 || i >= playerBoard.length || j < 0 || j >= playerBoard[0].length) return; // out of bounds
        if (playerBoard[i][j].status !== 'ship' || !playerBoard[i][j].alive || playerBoard[i][j].clicked) return; // doesn't meet criteria
        neighbors.push([i, j]); // found a potential nextMove
    }
    moves.forEach((move) => DFS(row + move[0], col + move[1]));

    return neighbors;
};
