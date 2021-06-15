import { RowLabels, ColLabels } from '../grid-labels/GridLabels';
import { StyledGrid, StyledCell } from './ComputerBoard.styles';

import { copyBoard, detectSink } from '../../utilities/sharedFunctions';
import { generateMove } from '../../utilities/computerBoardFunctions';

const ComputerBoard = (props) => {
    const handlePlayerTurn = (row, col) => {
        if (
            !props.clicked &&
            !props.gameover &&
            props.isPlaying &&
            props.playersTurn &&
            !props.computerBoard[row][col].clicked
        ) {
            props.setClicked(true);
            const copy = copyBoard(props.computerBoard);
            copy[row][col].clicked = true;

            if (copy[row][col].status === 'ship') {
                copy[row][col].status = 'hit';
                if (detectSink(row, col, props.computerShipLocations, copy)) {
                    let nextState = props.computerShipsLeft - 1;
                    props.setComputerShipsLeft(nextState);
                    if (nextState === 0) {
                        props.setGameover(true);
                        props.setComputerBoard(copy);
                        props.setPlayerWins(props.playerWins + 1);
                        return;
                    }
                }
            }
            props.setComputerBoard(copy);
            setTimeout(() => {
                props.setPlayersTurn(false);
                handleComputerTurn();
            }, 500);
        }
    };

    const handleComputerTurn = () => {
        setTimeout(() => {
            const playerCopy = copyBoard(props.playerBoard);
            const [x, y] = generateMove(playerCopy, props.playerShipLocations);

            if (playerCopy[x][y].status === 'hit') {
                if (detectSink(x, y, props.playerShipLocations, playerCopy)) {
                    let nextState = props.playerShipsLeft - 1;
                    props.setPlayerShipsLeft(nextState);
                    if (nextState === 0) {
                        props.setGameover(true);
                        props.setPlayerBoard(playerCopy);
                        props.setComputerWins(props.computerWins + 1);
                        return;
                    }
                }
            }
            props.setPlayerBoard(playerCopy);
            setTimeout(() => {
                props.setClicked(false);
                props.setPlayersTurn(true);
            }, 500);
        }, 500);
    };

    return (
        <div>
            <ColLabels />
            <div style={{ display: 'flex' }}>
                <RowLabels />
                {props.computerBoard.map((row, i) => {
                    return (
                        <StyledGrid key={i}>
                            {row.map((cell, j) => {
                                return (
                                    <StyledCell cell={cell} onClick={() => handlePlayerTurn(i, j)} key={j}>
                                        {cell.clicked && 'X'}
                                    </StyledCell>
                                );
                            })}
                        </StyledGrid>
                    );
                })}
            </div>
        </div>
    );
};

export default ComputerBoard;
