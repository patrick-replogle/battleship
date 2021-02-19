import React, { useState } from 'react';

import GlobalStyles from './components/global-styles';
import PlayerBoard from './components/PlayerBoard';
import PlayerMovesBoard from './components/PlayerMovesBoard';
import Footer from './components/footer/Footer';

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playersTurn, setPlayersTurn] = useState(true);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [gameover, setGameover] = useState(false);

    return (
        <>
            <GlobalStyles />
            <h1>battleship</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <PlayerBoard isPlaying={isPlaying} />
                {/* <PlayerMovesBoard /> */}
            </div>
            <Footer />
        </>
    );
};

export default App;
