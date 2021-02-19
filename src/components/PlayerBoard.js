import React, { useState } from 'react';

import Cell from './Cell';

import { rowLabels, colLabels, ships, buildBoard } from '../utilities';

const PlayerBoard = ({ isPlaying }) => {
    const [board, setBoard] = useState(buildBoard());
    const [playerShips, setPlayerShips] = useState(ships);
    const [selectedShip, setSelectedShip] = useState(0);
    const [vertical, setVertical] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);

    return (
        <div>
            <button onClick={() => setVertical(!vertical)}>Change Direction</button>
            {readyToPlay && <p>start!</p>}
            {playerShips.map((ship, index) => (
                <div key={index} onClick={() => setSelectedShip(ship)}>
                    {ship.name}
                </div>
            ))}

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
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlayerBoard;
