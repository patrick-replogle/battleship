import Button from '../button/Button';
import { MainContainer, GameoverContainer } from './Controls.styles';

import { buildBoard, initialShipState } from '../../utilities/sharedFunctions';
import { generateComputerBoard } from '../../utilities/computerBoardFunctions';

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
        props.setClicked(false);
    };
    return (
        <MainContainer>
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
                <GameoverContainer>
                    <Button onClick={resetBoard}>Play Again?</Button>
                    <h2 style={{ fontSize: '2rem' }}>{props.playerShipsLeft > 0 ? 'You Won!' : 'You Lost!'}</h2>
                </GameoverContainer>
            )}
        </MainContainer>
    );
};

export default Controls;
