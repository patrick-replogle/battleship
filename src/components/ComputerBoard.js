import { colLabels, rowLabels, copyBoard, detectSink, computersTurn } from '../utilities';

const ComputerBoard = (props) => {
    const handlePlayerTurn = (row, col) => {
        if (props.isPlaying && props.playersTurn && !props.computerBoard[row][col].clicked) {
            const copy = copyBoard(props.computerBoard);
            copy[row][col].clicked = true;

            if (copy[row][col].status === 1) {
                copy[row][col].status = 2;
                if (detectSink(row, col, props.computerShipLocations, copy)) {
                    props.setComputerShipsLeft(props.computerShipsLeft - 1);
                    if (props.computerShipsLeft - 1 === 0) {
                        props.setIsPlaying(false);
                        props.setPlayerWins(props.playerWins + 1);
                    }
                }
            }
            props.setPlayersTurn(false);
            props.setComputerBoard(copy);
            setTimeout(() => {
                handleComputerTurn(); // trigger the computer's turn
            }, 200);
        }
    };

    const handleComputerTurn = () => {
        const playerCopy = copyBoard(props.playerBoard);
        const [x, y] = computersTurn(playerCopy, props.prevComputerMove, props.wasPrevMoveAHit);

        if (playerCopy[x][y].status === 1) {
            playerCopy[x][y].status = 2;
            if (detectSink(x, y, props.playerShipLocations, playerCopy)) {
                props.setPlayerShipsLeft(props.playerShipsLeft - 1);
                if (props.playerShipsLeft - 1 === 0) {
                    props.setIsPlaying(false);
                    props.setComputerWins(props.computerWins + 1);
                }
            }
        }
        props.setPlayerBoard(playerCopy);
        props.setPlayersTurn(true);
    };

    return (
        <div>
            <div style={{ display: 'flex', marginLeft: '35px' }}>
                {colLabels.map((row, index) => (
                    <div key={index} style={{ width: '40px', height: '40px', fontSize: '2rem' }}>
                        {row}
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                    {rowLabels.map((row, index) => (
                        <div key={index} style={{ width: '40px', height: '40px', fontSize: '2rem' }}>
                            {row}
                        </div>
                    ))}
                </div>

                {props.computerBoard.map((row, i) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'column' }} key={i}>
                            {row.map((col, j) => {
                                return (
                                    <div
                                        onClick={() => handlePlayerTurn(i, j)}
                                        key={j}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            border: '1px solid white',
                                            background: '#006994',
                                            fontSize: '4rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color:
                                                col.status === 0
                                                    ? 'white'
                                                    : col.status >= 1 && col.alive
                                                    ? '#f44336'
                                                    : 'black',
                                        }}
                                    >
                                        {col.clicked && 'X'}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ComputerBoard;
