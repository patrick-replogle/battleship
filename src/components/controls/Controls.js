import Button from '../button/Button';

import { buildBoard, generateComputerBoard, initialShipState } from '../../utilities/functions';

const Controls = (props) => {
    const resetBoard = () => {
        props.setPlayerBoard(buildBoard());
        props.setShipIdx(0);
        props.setIsPlaying(false);
        props.setPlayersTurn(true);
        props.setComputerBoard(buildBoard());
        props.setReadyToPlay(false);
        props.setIsPlaying(false);
        props.setPlayerShipsLeft(5);
        props.setComputerShipsLeft(5);
        props.setComputerShipLocations(initialShipState());
        props.setPlayerShipLocations(initialShipState());
        props.setGameover(false);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', marginLeft: '4%', width: '100%' }}>
            {!props.gameover && !props.readyToPlay && !props.isPlaying && (
                <Button onClick={() => props.setVertical(!props.vertical)}>Change Direction</Button>
            )}
            {!props.gameover && props.readyToPlay && !props.isPlaying && (
                <Button
                    onClick={() => {
                        props.setIsPlaying(true);
                        props.setComputerBoard(generateComputerBoard(props.computerShipLocations));
                    }}
                >
                    Start
                </Button>
            )}
            {!props.gameover && <Button onClick={resetBoard}>Reset</Button>}
            {props.gameover && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Button onClick={resetBoard}>Play Again?</Button>
                    <h2 style={{ fontSize: '2rem' }}>{props.playerShipsLeft > 0 ? 'You Won!' : 'You Lost!'}</h2>
                </div>
            )}
        </div>
    );
};

export default Controls;
