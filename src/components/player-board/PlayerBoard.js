import { StyledGrid, StyledCell } from './PlayerBoard.styles';
import { RowLabels, ColLabels } from '../grid-labels/GridLabels';
import { placeShip, handleHover } from '../../utilities/playerBoardFunctions';

const PlayerBoard = ({
    playerBoard,
    setPlayerBoard,
    vertical,
    shipIdx,
    setShipIdx,
    readyToPlay,
    playerShipLocations,
    setReadyToPlay,
}) => {
    const handleShipPlacement = (row, col) => {
        if (shipIdx < 5) {
            let nextBoard = placeShip(row, col, playerBoard, shipIdx, vertical, playerShipLocations);
            if (nextBoard) {
                setPlayerBoard(nextBoard);
                const nextShipIdx = shipIdx + 1;
                setShipIdx(nextShipIdx);
                if (shipIdx >= 4) setReadyToPlay(true);
            }
        }
    };

    return (
        <div>
            <ColLabels />
            <div style={{ display: 'flex' }}>
                <RowLabels />
                <div>
                    {playerBoard.map((row, i) => {
                        return (
                            <StyledGrid key={i}>
                                {row.map((cell, j) => {
                                    return (
                                        <StyledCell
                                            key={j}
                                            cell={cell}
                                            onClick={() => handleShipPlacement(i, j)}
                                            onMouseEnter={() => {
                                                if (shipIdx < 5) {
                                                    setPlayerBoard(
                                                        handleHover(i, j, playerBoard, vertical, readyToPlay, shipIdx),
                                                    );
                                                }
                                            }}
                                        >
                                            {cell.clicked && 'X'}
                                        </StyledCell>
                                    );
                                })}
                            </StyledGrid>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlayerBoard;
