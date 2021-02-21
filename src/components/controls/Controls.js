import Button from '../other/Button';

import { computersTurn, generateComputerBoard } from '../../utilities';

const Controls = ({
    playersTurn,
    setVertical,
    setIsPlaying,
    vertical,
    computerBoard,
    setComputerBoard,
    computerShipLocations,
    readyToPlay,
    isPlaying,
    playerShipsLeft,
    computerShipsLeft,
    resetBoard,
    playerWins,
    computerWins,
}) => {
    return (
        <div style={{ marginTop: '15px' }}>
            {!readyToPlay && !isPlaying && <Button onClick={() => setVertical(!vertical)}>Change Direction</Button>}
            {readyToPlay && !isPlaying && (
                <Button
                    onClick={() => {
                        setIsPlaying(true);
                        setComputerBoard(generateComputerBoard(computerShipLocations));
                    }}
                >
                    {playerWins > 0 || computerWins > 0 ? 'Play Again' : 'Start'}
                </Button>
            )}
            <Button onClick={resetBoard}>Reset</Button>
        </div>
    );
};

export default Controls;
