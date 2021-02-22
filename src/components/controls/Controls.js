import Button from '../other/button/Button';

import { generateComputerBoard } from '../../utilities/functions';

const Controls = ({
    setVertical,
    setIsPlaying,
    vertical,
    setComputerBoard,
    computerShipLocations,
    readyToPlay,
    isPlaying,
    resetBoard,
    gameover,
    playerShipsLeft,
}) => {
    return (
        <div style={{ marginTop: '15px' }}>
            {!gameover && !readyToPlay && !isPlaying && (
                <Button onClick={() => setVertical(!vertical)}>Change Direction</Button>
            )}
            {!gameover && readyToPlay && !isPlaying && (
                <Button
                    onClick={() => {
                        setIsPlaying(true);
                        setComputerBoard(generateComputerBoard(computerShipLocations));
                    }}
                >
                    Start
                </Button>
            )}
            {!gameover && <Button onClick={resetBoard}>Reset</Button>}
            {gameover && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button onClick={resetBoard}>Play Again?</Button>
                    <h2 style={{ fontSize: '3rem' }}>{playerShipsLeft > 0 ? 'You Won!' : 'You Lost!'}</h2>
                </div>
            )}
        </div>
    );
};

export default Controls;
