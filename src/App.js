import React, { useState } from 'react';

import GlobalStyles from './components/global-styles';
import PlayerBoard from './components/PlayerBoard';
import Footer from './components/footer/Footer';
import ComputerBoard from './components/ComputerBoard';

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playersTurn, setPlayersTurn] = useState(true);
    const [playerScore, setPlayerScore] = useState(0);
    const [playerShips, setPlayerShits] = useState({});
    const [computerScore, setComputerScore] = useState(0);
    const [gameover, setGameover] = useState(false);

    return (
        <>
            <GlobalStyles />
            <h1 style={{ fontSize: '4rem' }}>Battleship</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <PlayerBoard isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                    <ComputerBoard playersTurn={playersTurn} setPlayersTurn={setPlayersTurn} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;
