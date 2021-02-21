import { RowLabels, ColLabels } from './grid-labels/GridLabels';

import { copyBoard, detectSink, computersTurn } from '../utilities';

const ComputerBoard = (props) => {
    const handlePlayerTurn = (row, col) => {
        if (
            props.isPlaying &&
            props.playersTurn &&
            !props.computerBoard[row][col].clicked &&
            props.playerShipsLeft > 0 &&
            props.computerShipsLeft > 0
        ) {
            const copy = copyBoard(props.computerBoard);
            copy[row][col].clicked = true;

            if (copy[row][col].status === 1) {
                copy[row][col].status = 2;
                if (detectSink(row, col, props.computerShipLocations, copy)) {
                    props.setComputerShipsLeft(props.computerShipsLeft - 1);
                }
            }
            if (props.computerShipsLeft - 1 === 0) {
                props.setIsPlaying(false);
                props.setPlayerWins(props.playerWins + 1);
                return;
            }
            props.setComputerBoard(copy);
            props.setPlayersTurn(false);
            setTimeout(() => {
                handleComputerTurn();
            }, 300);
        }
    };

    const handleComputerTurn = () => {
        const playerCopy = copyBoard(props.playerBoard);
        const [x, y] = computersTurn(playerCopy, props.prevComputerMove, props.wasPrevMoveAHit);

        if (playerCopy[x][y].status === 1) {
            playerCopy[x][y].status = 2;
            if (detectSink(x, y, props.playerShipLocations, playerCopy)) {
                props.setPlayerShipsLeft(props.playerShipsLeft - 1);
                if (props.playerShipsLeft - 1 === 0) {
                    props.setIsPlaying(false);
                    props.setComputerWins(props.computerWins + 1);
                }
            }
        }
        props.setPlayerBoard(playerCopy);
        props.setPlayersTurn(true);
    };

    return (
        <div>
            <ColLabels />
            <div style={{ display: 'flex' }}>
                <RowLabels />

                {props.computerBoard.map((row, i) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'column' }} key={i}>
                            {row.map((col, j) => {
                                return (
                                    <div
                                        onClick={() => handlePlayerTurn(i, j)}
                                        key={j}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            border: '1px solid white',
                                            background: '#006994',
                                            fontSize: '4rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color:
                                                col.status === 0
                                                    ? 'white'
                                                    : col.status >= 1 && col.alive
                                                    ? '#f44336'
                                                    : 'black',
                                        }}
                                    >
                                        {col.clicked && 'X'}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ComputerBoard;
