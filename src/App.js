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
    // player state
    const [playerBoard, setPlayerBoard] = useState(buildBoard());
    const [playerWins, setPlayerWins] = useState(0);
    const [playerShipsLeft, setPlayerShipsLeft] = useState(5);
    const [playerShipLocations, setPlayerShipLocations] = useState(initialPlayerShipState());
    // computer state
    const [computerShipsLeft, setComputerShipsLeft] = useState(5);
    const [computerWins, setComputerWins] = useState(0);
    const [computerShipLocations, setComputerShipLocations] = useState(initialComputerShipState());
    const [computerBoard, setComputerBoard] = useState(buildBoard());
    // game state
    const [playersTurn, setPlayersTurn] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameover, setGameover] = useState(false);
    const [shipIdx, setShipIdx] = useState(0);
    const [vertical, setVertical] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);

    const resetBoard = () => {
        setPlayerBoard(buildBoard());
        setShipIdx(0);
        setIsPlaying(false);
        setPlayersTurn(true);
        setComputerBoard(buildBoard());
        setReadyToPlay(false);
        setIsPlaying(false);
        setPlayerShipsLeft(5);
        setComputerShipsLeft(5);
        setComputerShipLocations(initialComputerShipState());
        setPlayerShipLocations(initialPlayerShipState());
        setGameover(false);
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
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '15px' }}>
                        <PlayerBoard
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            playerBoard={playerBoard}
                            setPlayerBoard={setPlayerBoard}
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
                            playerWins={playerWins}
                            setPlayerWins={setPlayerWins}
                            playerBoard={playerBoard}
                            setPlayerBoard={setPlayerBoard}
                            playerShipsLeft={playerShipsLeft}
                            setPlayerShipsLeft={setPlayerShipsLeft}
                            computerWins={computerWins}
                            setComputerWins={setComputerWins}
                            playerShipLocations={playerShipLocations}
                            setReadyToPlay={setReadyToPlay}
                            setGameover={setGameover}
                        />
                    </div>
                </div>
                <Controls
                    vertical={vertical}
                    setVertical={setVertical}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    setComputerBoard={setComputerBoard}
                    readyToPlay={readyToPlay}
                    computerShipLocations={computerShipLocations}
                    resetBoard={resetBoard}
                    gameover={gameover}
                    playerShipsLeft={playerShipsLeft}
                />
            </div>
            <Footer />
        </>
    );
};

export default App;
