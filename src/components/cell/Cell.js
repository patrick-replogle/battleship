import { placeShip, handleHover } from '../../utilities';

import { StyledDiv } from './Cell.styles';

const Cell = ({
    col,
    i,
    j,
    board,
    shipIdx,
    vertical,
    setBoard,
    setShipIdx,
    readyToPlay,
    playerShipLocations,
    setPlayerShipLocations,
}) => {
    return (
        <StyledDiv
            style={{
                background:
                    col.hover && col.status === 1
                        ? '#f44336'
                        : col.hover
                        ? '#ff9800'
                        : col.status === 0
                        ? '#006994'
                        : col.status === 1
                        ? '#848482'
                        : 'black',
            }}
            key={j}
            onClick={() => placeShip(i, j, board, shipIdx, vertical, setBoard, setShipIdx, playerShipLocations)}
            onMouseEnter={() => handleHover(i, j, board, vertical, readyToPlay, shipIdx, setBoard)}
        >
            {col.status === 3 ? 'X' : ''}
        </StyledDiv>
    );
};

export default Cell;
