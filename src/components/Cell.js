import { placeShip, handleHover } from '../utilities';

const Cell = ({ col, i, j, board, selectedShip, vertical, setBoard, setSelectedShip, readyToPlay }) => {
    return (
        <div
            style={{
                width: '40px',
                height: '40px',
                border: '1px solid white',
                background: col.hover
                    ? 'orange'
                    : col.status === 0
                    ? '#006994'
                    : col.status === 1
                    ? '#848482'
                    : 'black',
                color: 'white',
                fontSize: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            key={j}
            onClick={() => placeShip(i, j, board, selectedShip, vertical, setBoard, setSelectedShip)}
            onMouseEnter={() => handleHover(i, j, board, vertical, readyToPlay, selectedShip, setBoard)}
        >
            {col.status === 3 ? 'X' : ''}
        </div>
    );
};

export default Cell;
