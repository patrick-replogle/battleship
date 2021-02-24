import { ships } from './data';

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

export const placeShip = (row, col, board, shipIdx, vertical, dict) => {
    if (shipIdx < ships.length) {
        const newBoard = copyBoard(board);
        const shipLen = ships[shipIdx].length;

        if (!vertical) {
            const diff = newBoard[0].length - (col + shipLen);

            if (diff < 0) col += diff;
            if (!checkIfVacant(row, col, shipLen, board, vertical)) return false;

            for (let k = 0; k < shipLen; k++) {
                dict[ships[shipIdx].name].push([row, col]);
                newBoard[row][col].status = 'ship';
                col++;
            }
        } else {
            const diff = newBoard.length - (row + shipLen);

            if (diff < 0) row += diff;
            if (!checkIfVacant(row, col, shipLen, board, vertical)) return false;

            for (let k = 0; k < shipLen; k++) {
                newBoard[row][col].status = 'ship';
                dict[ships[shipIdx].name].push([row, col]);
                row++;
            }
        }
        return newBoard;
    }
};

export const handleHover = (row, col, board, vertical, readyToPlay, shipIdx) => {
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
        return newBoard;
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
                let logicalNextMoveAfterHit = findNextMoveAfterHit(playerBoard, row, col);
                if (logicalNextMoveAfterHit) return logicalNextMoveAfterHit; // found a pattern that lead to a logical next move

                let nextMoves = getValidMoves(playerBoard, row, col); // ship has only been hit once so select a valid neighbor cell at random
                if (nextMoves.length) {
                    let randomIdx = Math.floor(Math.random() * nextMoves.length);
                    let [x, y] = nextMoves[randomIdx];
                    return updateBoardAfterMove(playerBoard, x, y);
                }
            }
        }
    }
    return generateRandomMove(playerBoard); // no active ships are hit so choose at random
};

const findNextMoveAfterHit = (playerBoard, row, col) => {
    if (
        col > 0 &&
        col < 9 &&
        playerBoard[row][col + 1].status === 'hit' &&
        playerBoard[row][col + 1].alive &&
        !playerBoard[row][col - 1].clicked
    ) {
        return updateBoardAfterMove(playerBoard, row, col - 1);
    }
    if (col < 9 && playerBoard[row][col + 1].status === 'hit' && playerBoard[row][col + 1].alive) {
        let j = col + 1;

        while (j < 10 && playerBoard[row][j].clicked && playerBoard[row][j].alive) j++;

        if (j < 10 && !playerBoard[row][j].clicked) {
            return updateBoardAfterMove(playerBoard, row, j);
        }
    }
    if (
        row > 0 &&
        row < 9 &&
        playerBoard[row + 1][col].status === 'hit' &&
        playerBoard[row + 1][col].alive &&
        !playerBoard[row - 1][col].clicked
    ) {
        return updateBoardAfterMove(playerBoard, row - 1, col);
    }
    if (row < 9 && playerBoard[row + 1][col].status === 'hit' && playerBoard[row + 1][col].alive) {
        let i = row + 1;

        while (i < 10 && playerBoard[i][col].clicked && playerBoard[i][col].alive) i++;

        if (i < 10 && !playerBoard[i][col].clicked) {
            return updateBoardAfterMove(playerBoard, i, col);
        }
    }
    return false;
};

const updateBoardAfterMove = (board, row, col) => {
    board[row][col].clicked = true;
    if (board[row][col].status === 'ship') {
        board[row][col].status = 'hit';
    }
    return [row, col];
};

const generateRandomMove = (playerBoard) => {
    let rows = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let cols = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    playerBoard.forEach((row, i) => {
        row.forEach((col, j) => {
            if (playerBoard[i][j].clicked) {
                rows[i]++;
                cols[j]++;
            }
        });
    });

    let minRow = Math.min(...rows);
    let minRowIdx = rows.indexOf(minRow);
    let minCol = Math.min(...cols);
    let minColIdx = cols.indexOf(minCol);

    if (minRow < minCol) {
        console.log('minRow');
        for (let j = 0; j < 10; j++) {
            if (!playerBoard[minRowIdx][j].clicked) {
                return updateBoardAfterMove(playerBoard, minRowIdx, j);
            }
        }
    } else if (minCol < minRow) {
        console.log('minCol');
        for (let i = 0; i < 10; i++) {
            if (!playerBoard[i][minColIdx].clicked) {
                return updateBoardAfterMove(playerBoard, i, minColIdx);
            }
        }
    } else {
        console.log('random');
        while (true) {
            let row = Math.floor(Math.random() * 10);
            let col = Math.floor(Math.random() * 10);

            if (playerBoard[row][col].clicked) continue;
            return updateBoardAfterMove(playerBoard, row, col);
        }
    }
};

const getValidMoves = (playerBoard, row, col) => {
    let neighbors = [];
    let moves = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ];

    function DFS(i, j) {
        if (i < 0 || i >= playerBoard.length || j < 0 || j >= playerBoard[0].length) return; // out of bounds
        if (!playerBoard[i][j].alive || playerBoard[i][j].clicked) return; // doesn't meet criteria
        neighbors.push([i, j]); // found a potential nextMove
    }
    moves.forEach((move) => DFS(row + move[0], col + move[1]));

    return neighbors;
};
