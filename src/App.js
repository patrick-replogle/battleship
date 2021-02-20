import React, { useState } from 'react';

import GlobalStyles from './components/global-styles';
import PlayerBoard from './components/PlayerBoard';
import Footer from './components/footer/Footer';
import ComputerBoard from './components/ComputerBoard';
import Controls from './components/controls/Controls';

import { buildBoard } from './utilities';

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playersTurn, setPlayersTurn] = useState(true);
    const [playerShips, setPlayerShips] = useState({});
    const [playerBoard, setPlayerBoard] = useState(buildBoard());
    const [playerWins, setPlayerWins] = useState(0);
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
    const [computerWins, setComputerWins] = useState(0);
    const [computerShipLocations, setComputerShipLocations] = useState({
        Carrier: [],
        Battleship: [],
        Cruiser: [],
        Submarine: [],
        Destroyer: [],
    });
    const [computerBoard, setComputerBoard] = useState(buildBoard());

    const resetBoard = () => {
        setPlayerBoard(buildBoard());
        setShipIdx(0);
        setIsPlaying();
        setComputerBoard(buildBoard());
        setReadyToPlay(false);
        setIsPlaying(false);
        setPlayerShipsLeft(5);
        setComputerShipsLeft(5);
        setComputerShipLocations({
            Carrier: [],
            Battleship: [],
            Cruiser: [],
            Submarine: [],
            Destroyer: [],
        });
        setComputerShipLocations({
            Carrier: [],
            Battleship: [],
            Cruiser: [],
            Submarine: [],
            Destroyer: [],
        });
    };
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
                            setReadyToPlay={setReadyToPlay}
                        />
                        <ComputerBoard
                            isPlaying={isPlaying}
                            playersTurn={playersTurn}
                            setPlayersTurn={setPlayersTurn}
                            computerShipLocations={computerShipLocations}
                            computerShipsLeft={computerShipsLeft}
                            setComputerShipsLeft={setComputerShipsLeft}
                            computerBoard={computerBoard}
                            setComputerBoard={setComputerBoard}
                            resetBoard={resetBoard}
                        />
                    </div>
                </div>
                <Controls
                    vertical={vertical}
                    setVertical={setVertical}
                    playersTurn={playersTurn}
                    setPlayerBoard={setPlayerBoard}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    computerBoard={computerBoard}
                    setComputerBoard={setComputerBoard}
                    computerShipLocations={computerShipLocations}
                    setComputerShipLocations={setComputerShipLocations}
                    play
                    readyToPlay={readyToPlay}
                    setReadyToPlay={setReadyToPlay}
                    playerShipsLeft={playerShipsLeft}
                    setPlayerShipsLeft={setPlayerShipsLeft}
                    computerShipsLeft={computerShipsLeft}
                    setComputerShipsLeft={setComputerShipsLeft}
                    resetBoard={resetBoard}
                />
            </div>
            <Footer />
        </>
    );
};

export default App;
