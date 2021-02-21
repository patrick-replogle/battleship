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
    setReadyToPlay,
}) => {
    return (
        <StyledDiv
            style={{
                color: col.status === 0 ? 'white' : col.status >= 1 && col.alive ? '#f44336' : 'black',
                background:
                    col.hover && col.status === 1
                        ? '#f44336'
                        : col.hover
                        ? '#ffea00'
                        : col.status === 0
                        ? '#006994'
                        : col.status >= 1
                        ? '#848482'
                        : '',
            }}
            onClick={() => {
                if (shipIdx < 5) placeShip(i, j, board, shipIdx, vertical, setBoard, setShipIdx, playerShipLocations);
                if (shipIdx >= 4) setReadyToPlay(true);
            }}
            onMouseEnter={() => {
                if (shipIdx < 5) handleHover(i, j, board, vertical, readyToPlay, shipIdx, setBoard);
            }}
        >
            {col.clicked && 'X'}
        </StyledDiv>
    );
};

export default Cell;
