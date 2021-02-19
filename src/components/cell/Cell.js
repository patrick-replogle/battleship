import { placeShip, handleHover } from '../../utilities';

import { StyledDiv } from './Cell.styles';

const Cell = ({ col, i, j, board, selectedShip, vertical, setBoard, setSelectedShip, readyToPlay }) => {
    return (
        <StyledDiv
            style={{
                background:
                    col.hover && col.status === 1
                        ? 'crimson'
                        : col.hover
                        ? 'orange'
                        : col.status === 0
                        ? '#006994'
                        : col.status === 1
                        ? '#848482'
                        : 'black',
            }}
            key={j}
            onClick={() => placeShip(i, j, board, selectedShip, vertical, setBoard, setSelectedShip)}
            onMouseEnter={() => handleHover(i, j, board, vertical, readyToPlay, selectedShip, setBoard)}
        >
            {col.status === 3 ? 'X' : ''}
        </StyledDiv>
    );
};

export default Cell;
