import React, { useState } from 'react';

import ShipGrid from './ship-grid/ShipGrid';
import Button from './other/Button';

import { rowLabels, colLabels, buildBoard } from '../utilities';

const initialShipLocationState = {
    Carrier: [],
    Battleship: [],
    Cruiser: [],
    Submarine: [],
    Destroyer: [],
};

const PlayerBoard = ({ isPlaying, setIsPlaying }) => {
    const [playerBoard, setPlayerBoard] = useState(buildBoard());
    const [playerShips, setPlayerShips] = useState(5);
    const [playerShipLocations, setPlayerShipLocations] = useState(initialShipLocationState);
    const [selectedShip, setSelectedShip] = useState(0);
    const [vertical, setVertical] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);

    const resetBoard = () => {
        setPlayerBoard(buildBoard);
        setSelectedShip(0);
        setIsPlaying();
    };

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
                    selectedShip={selectedShip}
                    setSelectedShip={setSelectedShip}
                    readyToPlay={readyToPlay}
                    playerShipLocations={playerShipLocations}
                    setPlayerShipLocations={setPlayerShipLocations}
                />
            </div>
            <Button onClick={() => setVertical(!vertical)}>Change Direction</Button>
            <Button onClick={resetBoard}>Reset</Button>
            <Button disables={selectedShip < 5} onClick={() => setIsPlaying(true)}>
                Start
            </Button>
        </div>
    );
};

export default PlayerBoard;
