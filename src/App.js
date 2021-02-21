import React, { useState } from 'react';

import GlobalStyles from './components/global-styles';
import PlayerBoard from './components/player-board/PlayerBoard';
import Footer from './components/other/footer/Footer';
import ComputerBoard from './components/computer-board/ComputerBoard';
import Controls from './components/controls/Controls';
import Score from './components/score/Score';

import { buildBoard } from './utilities/functions';
import { initialPlayerShipState, initialComputerShipState } from './utilities/data';

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
    const [prevComputerHit, setPrevComputerHit] = useState(null);

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
                <Score
                    playerWins={playerWins}
                    computerWins={computerWins}
                    playerShipsLeft={playerShipsLeft}
                    computerShipsLeft={computerShipsLeft}
                />
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
                            readyToPlay={readyToPlay}
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
                            prevComputerHit={prevComputerHit}
                            setPrevComputerHit={setPrevComputerHit}
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
