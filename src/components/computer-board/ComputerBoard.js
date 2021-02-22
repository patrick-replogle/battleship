import { RowLabels, ColLabels } from '../other/grid-labels/GridLabels';
import { StyledGrid, StyledCell } from './ComputerBoard.styles';

import { copyBoard, detectSink, generateMove } from '../../utilities/functions';

const ComputerBoard = (props) => {
    const handlePlayerTurn = (row, col) => {
        if (props.isPlaying && props.playersTurn && !props.computerBoard[row][col].clicked) {
            const copy = copyBoard(props.computerBoard);
            copy[row][col].clicked = true;

            if (copy[row][col].status === 1) {
                copy[row][col].status = 2;
                if (detectSink(row, col, props.computerShipLocations, copy)) {
                    let nextState = props.computerShipsLeft - 1;
                    props.setComputerShipsLeft(nextState);
                    if (nextState === 0) {
                        props.setGameover(true);
                        props.setComputerBoard(copy);
                        props.setIsPlaying(false);
                        props.setPlayerWins(props.playerWins + 1);
                        return;
                    }
                }
            }
            props.setComputerBoard(copy);
            props.setPlayersTurn(false);
            handleComputerTurn();
        }
    };

    const handleComputerTurn = () => {
        const playerCopy = copyBoard(props.playerBoard);
        const [x, y] = generateMove(playerCopy);

        if (playerCopy[x][y].status === 2) {
            if (detectSink(x, y, props.playerShipLocations, playerCopy)) {
                let nextState = props.playerShipsLeft - 1;
                props.setPlayerShipsLeft(nextState);
                if (nextState === 0) {
                    props.setGameover(true);
                    props.setPlayerBoard(playerCopy);
                    props.setIsPlaying(false);
                    props.setComputerWins(props.computerWins + 1);
                    return;
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
