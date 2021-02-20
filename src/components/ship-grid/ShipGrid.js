import Cell from '../cell/Cell';

const ShipGrid = ({
    board,
    setBoard,
    vertical,
    selectedShip,
    setSelectedShip,
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
                                    selectedShip={selectedShip}
                                    setSelectedShip={setSelectedShip}
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
