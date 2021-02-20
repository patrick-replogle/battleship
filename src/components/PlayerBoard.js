import ShipGrid from './ship-grid/ShipGrid';

import { rowLabels, colLabels } from '../utilities';

const PlayerBoard = ({
    playerBoard,
    setPlayerBoard,
    playerShipsLeft,
    setPlayerShipsLeft,
    playerShipLocations,
    setPlayerShipLocations,
    isPlaying,
    setIsPlaying,
    vertical,
    setVertical,
    readyToPlay,
    setReadyToPlay,
    shipIdx,
    setShipIdx,
}) => {
    return (
        <div>
            <div style={{ display: 'flex', marginLeft: '35px' }}>
                {colLabels.map((row, index) => (
                    <div key={index} style={{ width: '40px', height: '40px', fontSize: '2rem' }}>
                        {row}
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                    {rowLabels.map((row, index) => (
                        <div key={index} style={{ width: '40px', height: '40px', fontSize: '2rem' }}>
                            {row}
                        </div>
                    ))}
                </div>
                <ShipGrid
                    board={playerBoard}
                    setBoard={setPlayerBoard}
                    vertical={vertical}
                    shipIdx={shipIdx}
                    setShipIdx={setShipIdx}
                    readyToPlay={readyToPlay}
                    playerShipLocations={playerShipLocations}
                    setPlayerShipLocations={setPlayerShipLocations}
                />
            </div>
        </div>
    );
};

export default PlayerBoard;
