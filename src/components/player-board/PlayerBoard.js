import { StyledGrid, StyledCell } from './PlayerBoard.styles';
import { RowLabels, ColLabels } from '../other/grid-labels/GridLabels';
import { placeShip, handleHover } from '../../utilities/functions';

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
                                            cell={cell}
                                            onClick={() => {
                                                if (shipIdx < 5)
                                                    placeShip(
                                                        i,
                                                        j,
                                                        playerBoard,
                                                        shipIdx,
                                                        vertical,
                                                        setPlayerBoard,
                                                        setShipIdx,
                                                        playerShipLocations,
                                                    );
                                                if (shipIdx >= 4) setReadyToPlay(true);
                                            }}
                                            onMouseEnter={() => {
                                                if (shipIdx < 5)
                                                    handleHover(
                                                        i,
                                                        j,
                                                        playerBoard,
                                                        vertical,
                                                        readyToPlay,
                                                        shipIdx,
                                                        setPlayerBoard,
                                                    );
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
