import { RowLabels, ColLabels } from '../other/grid-labels/GridLabels';
import { StyledGrid, StyledCell } from './ComputerBoard.styles';

import { copyBoard, detectSink, computersTurn } from '../../utilities/functions';

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
        const [x, y] = computersTurn(playerCopy, props.prevComputerHit);

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
