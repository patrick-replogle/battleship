import React, { useState } from 'react';

import GlobalStyles from './components/global-styles';
import PlayerBoard from './components/player-board/PlayerBoard';
import Footer from './components/footer/Footer';
import ComputerBoard from './components/computer-board/ComputerBoard';
import Controls from './components/controls/Controls';
import Score from './components/score/Score';

import { buildBoard, initialShipState } from './utilities/functions';

const App = () => {
    // player state
    const [playerBoard, setPlayerBoard] = useState(buildBoard());
    const [playerWins, setPlayerWins] = useState(0);
    const [playerShipsLeft, setPlayerShipsLeft] = useState(5);
    const [playerShipLocations, setPlayerShipLocations] = useState(initialShipState());
    // computer state
    const [computerShipsLeft, setComputerShipsLeft] = useState(5);
    const [computerWins, setComputerWins] = useState(0);
    const [computerShipLocations, setComputerShipLocations] = useState(initialShipState());
    const [computerBoard, setComputerBoard] = useState(buildBoard());
    // game state
    const [playersTurn, setPlayersTurn] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameover, setGameover] = useState(false);
    const [shipIdx, setShipIdx] = useState(0);
    const [vertical, setVertical] = useState(false);
    const [readyToPlay, setReadyToPlay] = useState(false);

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
                            playerBoard={playerBoard}
                            setPlayerBoard={setPlayerBoard}
                            vertical={vertical}
                            shipIdx={shipIdx}
                            setShipIdx={setShipIdx}
                            playerShipLocations={playerShipLocations}
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
                    gameover={gameover}
                    playerShipsLeft={playerShipsLeft}
                    setPlayerBoard={setPlayerBoard}
                    setShipIdx={setShipIdx}
                    setPlayersTurn={setPlayersTurn}
                    setReadyToPlay={setReadyToPlay}
                    setPlayerShipsLeft={setPlayerShipsLeft}
                    setComputerShipsLeft={setComputerShipsLeft}
                    setComputerShipLocations={setComputerShipLocations}
                    setPlayerShipLocations={setPlayerShipLocations}
                    setGameover={setGameover}
                />
            </div>
            <Footer />
        </>
    );
};

export default App;
