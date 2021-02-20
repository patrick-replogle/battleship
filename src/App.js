import React, { useState } from 'react';

import GlobalStyles from './components/global-styles';
import PlayerBoard from './components/PlayerBoard';
import Footer from './components/footer/Footer';
import ComputerBoard from './components/ComputerBoard';
import Controls from './components/controls/Controls';

import { buildBoard, generateComputerBoard } from './utilities';

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playersTurn, setPlayersTurn] = useState(true);
    const [playerScore, setPlayerScore] = useState(0);
    const [playerShips, setPlayerShips] = useState({});
    const [gameover, setGameover] = useState(false);
    const [playerBoard, setPlayerBoard] = useState(buildBoard());
    const [playerShipsLeft, setPlayerShipsLeft] = useState(5);
    const [playerShipLocations, setPlayerShipLocations] = useState({
        Carrier: [],
        Battleship: [],
        Cruiser: [],
        Submarine: [],
        Destroyer: [],
    });
    const [shipIdx, setShipIdx] = useState(0);
    const [vertical, setVertical] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);

    const [computerShipsLeft, setComputerShipsLeft] = useState(5);
    const [computerShipLocations, setComputerShipLocations] = useState({
        Carrier: [],
        Battleship: [],
        Cruiser: [],
        Submarine: [],
        Destroyer: [],
    });
    const [computerBoard, setComputerBoard] = useState(generateComputerBoard(computerShipLocations));

    return (
        <>
            <GlobalStyles />
            <div>
                <h1 style={{ fontSize: '4rem' }}>Battleship</h1>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <PlayerBoard
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            playerBoard={playerBoard}
                            setPlayerBoard={setPlayerBoard}
                            playerShips={playerShips}
                            setPlayerShips={setPlayerShips}
                            vertical={vertical}
                            setVertical={setVertical}
                            shipIdx={shipIdx}
                            setShipIdx={setShipIdx}
                            playerShipsLeft={playerShipsLeft}
                            setPlayerShipsLeft={setPlayerShipsLeft}
                            playerShipLocations={playerShipLocations}
                            setPlayerShipLocations={setPlayerShipLocations}
                        />
                        <ComputerBoard
                            playersTurn={playersTurn}
                            setPlayersTurn={setPlayersTurn}
                            computerShipLocations={computerShipLocations}
                            setComputerShipsLeft={setComputerShipsLeft}
                            computerBoard={computerBoard}
                            setComputerBoard={setComputerBoard}
                        />
                    </div>
                </div>
                <Controls
                    vertical={vertical}
                    setVertical={setVertical}
                    playersTurn={playersTurn}
                    setPlayerBoard={setPlayerBoard}
                    shipIdx={shipIdx}
                    setShipIdx={setShipIdx}
                    setIsPlaying={setIsPlaying}
                    setComputerBoard={setComputerBoard}
                    computerShipLocations={computerShipLocations}
                />
            </div>
            <Footer />
        </>
    );
};

export default App;
