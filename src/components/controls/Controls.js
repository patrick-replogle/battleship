import Button from '../other/Button';

import { buildBoard, generateComputerBoard } from '../../utilities';

const Controls = ({
    playersTurn,
    setVertical,
    setPlayerBoard,
    setShipIdx,
    setIsPlaying,
    vertical,
    shipIdx,
    setComputerBoard,
    computerShipLocations,
}) => {
    const resetBoard = () => {
        setPlayerBoard(buildBoard);
        setShipIdx(0);
        setIsPlaying();
        setComputerBoard(generateComputerBoard(computerShipLocations));
    };
    return (
        <div>
            {playersTurn ? <h1>Your turn</h1> : <h1>Computer's Turn</h1>}
            <Button onClick={() => setVertical(!vertical)}>Change Direction</Button>
            <Button onClick={resetBoard}>Reset</Button>
            <Button disabled={shipIdx < 5} onClick={() => setIsPlaying(true)}>
                Start
            </Button>
        </div>
    );
};

export default Controls;
