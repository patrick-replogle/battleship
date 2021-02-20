import Button from '../other/Button';

import { generateComputerBoard } from '../../utilities';

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
}) => {
    return (
        <div>
            {isPlaying && playersTurn ? (
                <h1 style={{ fontSize: '2rem' }}>Your turn</h1>
            ) : isPlaying && !playersTurn ? (
                <h1 style={{ fontSize: '2rem' }}>Computer's Turn</h1>
            ) : (
                ''
            )}
            {isPlaying && (
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1rem' }}>
                    <h1>{playerShipsLeft} Player Ships Left</h1>
                    <h1 style={{ marginLeft: '3%' }}>{computerShipsLeft} Computer Ships Left</h1>
                </div>
            )}
            {!readyToPlay && !isPlaying && <Button onClick={() => setVertical(!vertical)}>Change Direction</Button>}
            {readyToPlay && !isPlaying && (
                <Button
                    onClick={() => {
                        setIsPlaying(true);
                        setComputerBoard(generateComputerBoard(computerShipLocations));
                    }}
                >
                    Start
                </Button>
            )}

            <Button onClick={resetBoard}>Reset</Button>
        </div>
    );
};

export default Controls;
