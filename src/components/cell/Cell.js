import { placeShip, handleHover } from '../../utilities';

import { StyledDiv } from './Cell.styles';

const Cell = ({
    col,
    i,
    j,
    board,
    selectedShip,
    vertical,
    setBoard,
    setSelectedShip,
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
            onClick={() =>
                placeShip(i, j, board, selectedShip, vertical, setBoard, setSelectedShip, playerShipLocations)
            }
            onMouseEnter={() => handleHover(i, j, board, vertical, readyToPlay, selectedShip, setBoard)}
        >
            {col.status === 3 ? 'X' : ''}
        </StyledDiv>
    );
};

export default Cell;
