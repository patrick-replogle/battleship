import Cell from '../cell/Cell';

const ShipGrid = ({
    board,
    setBoard,
    vertical,
    shipIdx,
    setShipIdx,
    readyToPlay,
    playerShipLocations,
    setPlayerShipLocations,
}) => {
    return (
        <div>
            {board.map((row, i) => {
                return (
                    <div style={{ display: 'flex' }} key={i}>
                        {row.map((col, j) => {
                            return (
                                <Cell
                                    i={i}
                                    j={j}
                                    board={board}
                                    setBoard={setBoard}
                                    vertical={vertical}
                                    shipIdx={shipIdx}
                                    setShipIdx={setShipIdx}
                                    readyToPlay={readyToPlay}
                                    col={col}
                                    key={j}
                                    playerShipLocations={playerShipLocations}
                                    setPlayerShipLocations={setPlayerShipLocations}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default ShipGrid;
