import React, { useState } from 'react';

import GlobalStyles from './components/global-styles';
import PlayerBoard from './components/PlayerBoard';
import Footer from './components/footer/Footer';
import ComputerBoard from './components/ComputerBoard';
import Controls from './components/controls/Controls';

import { buildBoard, initialPlayerShipState, initialComputerShipState } from './utilities';

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playersTurn, setPlayersTurn] = useState(true);
    const [playerShips, setPlayerShips] = useState({});
    const [playerBoard, setPlayerBoard] = useState(buildBoard());
    const [playerWins, setPlayerWins] = useState(0);
    const [playerShipsLeft, setPlayerShipsLeft] = useState(5);
    const [playerShipLocations, setPlayerShipLocations] = useState(initialPlayerShipState);
    const [shipIdx, setShipIdx] = useState(0);
    const [vertical, setVertical] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);
    const [computerShipsLeft, setComputerShipsLeft] = useState(5);
    const [computerWins, setComputerWins] = useState(0);
    const [computerShipLocations, setComputerShipLocations] = useState(initialComputerShipState);
    const [computerBoard, setComputerBoard] = useState(buildBoard());
    const [prevComputerMove, setPrevComputerMove] = useState(null);
    const [wasPrevMoveAHit, setWasPrevMoveAHit] = useState(false);

    const resetBoard = () => {
        setPlayerBoard(buildBoard());
        setShipIdx(0);
        setIsPlaying();
        setComputerBoard(buildBoard());
        setReadyToPlay(false);
        setIsPlaying(false);
        setPlayerShipsLeft(5);
        setComputerShipsLeft(5);
        setComputerShipLocations(initialComputerShipState);
        setComputerShipLocations(initialPlayerShipState);
    };
    return (
        <>
            <GlobalStyles />
            <div>
                <h1 style={{ fontSize: '3rem' }}>BATTLESHIP</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'left', fontSize: '1rem' }}>
                    <div>
                        <h1>Player Ships: {playerShipsLeft}</h1>
                        <h1>Player Wins: {playerWins}</h1>
                    </div>
                    <div>
                        <h1>Computer Ships: {computerShipsLeft}</h1>
                        <h1>Computer Wins: {computerWins}</h1>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
                            setIsPlaying={setIsPlaying}
                            playersTurn={playersTurn}
                            setPlayersTurn={setPlayersTurn}
                            computerShipLocations={computerShipLocations}
                            computerShipsLeft={computerShipsLeft}
                            setComputerShipsLeft={setComputerShipsLeft}
                            computerBoard={computerBoard}
                            setComputerBoard={setComputerBoard}
                            resetBoard={resetBoard}
                            playerWins={playerWins}
                            setPlayerWins={setPlayerWins}
                            playerBoard={playerBoard}
                            setPlayerBoard={setPlayerBoard}
                            playerShipsLeft={playerShipsLeft}
                            setPlayerShipsLeft={setPlayerShipsLeft}
                            computerWins={computerWins}
                            setComputerWins={setComputerWins}
                            playerShipLocations={playerShipLocations}
                            prevComputerMove={prevComputerMove}
                            setPrevComputerMove={setPrevComputerMove}
                            wasPrevMoveAHit={wasPrevMoveAHit}
                            setWasPrevMoveAHit={setWasPrevMoveAHit}
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
                    playerWins={playerWins}
                    computerWins={computerWins}
                />
            </div>
            <Footer />
        </>
    );
};

export default App;
