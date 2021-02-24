import { ships } from './data';
import { buildBoard, copyBoard, checkIfVacant } from './sharedFunctions';

// randomly place ships onto the computer board
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

// generates a next move for the computer and determines the best course of action
export const generateMove = (playerBoard, dict) => {
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
    return generateRandomMove(playerBoard, dict); // no active ships are hit so choose at random
};

// always look for a pattern if a ship has been hit, but is still alive
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

// no active hits, so select a cell at random
const generateRandomMove = (playerBoard, dict) => {
    let maxLenAliveShip = 0;

    for (let key in dict) {
        let [x, y] = dict[key][0];
        if (playerBoard[x][y].alive) {
            maxLenAliveShip = Math.max(maxLenAliveShip, dict[key].length);
        }
    }

    while (true) {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        if (playerBoard[row][col].clicked) continue;
        if (findMostOpenSpaces(playerBoard, row, col, maxLenAliveShip)) {
            return updateBoardAfterMove(playerBoard, row, col);
        }
    }
};

// find all valid moves if most recent move was a hit, but the attacked ship has only been attacked once
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

// an attempt to optimize a random move by the computer
const findMostOpenSpaces = (playerBoard, row, col, maxLenAliveShip) => {
    let i = row;
    let j = col;
    let k = row;
    let m = col;
    let count = 0;

    while (i - 1 >= 0 && !playerBoard[i - 1][col].clicked) {
        i--;
        count++;
        if (count === maxLenAliveShip - 1) break;
    }

    count = 0;
    while (k + 1 <= 9 && !playerBoard[k + 1][col].clicked) {
        k++;
        count++;
        if (count === maxLenAliveShip - 1) break;
    }

    count = 0;
    while (j - 1 >= 0 && !playerBoard[j - 1][col].clicked) {
        j--;
        count++;
        if (count === maxLenAliveShip - 1) break;
    }

    count = 0;
    while (m + 1 <= 9 && !playerBoard[row][m + 1].clicked) {
        m++;
        count++;
        if (count === maxLenAliveShip - 1) break;
    }

    if (k - i + 1 >= maxLenAliveShip || m - j + 1 >= maxLenAliveShip) {
        return true;
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
