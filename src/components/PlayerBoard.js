import React, { useState } from 'react';

import ShipGrid from './ship-grid/ShipGrid';
import Ship from './ship/Ship';

import { rowLabels, colLabels, ships, buildBoard } from '../utilities';

const PlayerBoard = ({ isPlaying }) => {
    const [board, setBoard] = useState(buildBoard());
    const [playerShips, setPlayerShips] = useState(ships);
    const [selectedShip, setSelectedShip] = useState(0);
    const [vertical, setVertical] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);

    return (
        <div>
            {selectedShip < ships.length && <Ship shipIdx={selectedShip} />}
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
                    board={board}
                    setBoard={setBoard}
                    vertical={vertical}
                    selectedShip={selectedShip}
                    setSelectedShip={setSelectedShip}
                    readyToPlay={readyToPlay}
                />
            </div>
            <button onClick={() => setVertical(!vertical)}>Change Direction</button>
        </div>
    );
};

export default PlayerBoard;
