import { colLabels, rowLabels, copyBoard, detectSink, computersTurn } from '../utilities';

const ComputerBoard = ({
    isPlaying,
    setIsPlaying,
    playersTurn,
    setPlayersTurn,
    computerShipLocations,
    setComputerShipLocations,
    computerBoard,
    setComputerBoard,
    computerShipsLeft,
    setComputerShipsLeft,
    resetBoard,
    playerWins,
    setPlayerWins,
    playerBoard,
    setPlayerBoard,
    playerShipsLeft,
    setPlayerShipsLeft,
    computerWins,
    setComputerWins,
    playerShipLocations,
}) => {
    const handleClick = (row, col) => {
        if (isPlaying && playersTurn && !computerBoard[row][col].clicked) {
            // player moves
            const copy = copyBoard(computerBoard);
            copy[row][col].clicked = true;

            if (copy[row][col].status === 1) {
                copy[row][col].status = 2;
                if (detectSink(row, col, computerShipLocations, copy)) {
                    setComputerShipsLeft(computerShipsLeft - 1);
                    if (computerShipsLeft - 1 === 0) {
                        setIsPlaying(false);
                        setPlayerWins(playerWins + 1);
                    }
                }
            }
            setPlayersTurn(false);
            setComputerBoard(copy);
            // then computer moves
            const playerCopy = copyBoard(playerBoard);
            const [x, y] = computersTurn(playerCopy);

            if (playerCopy[x][y].status === 1) {
                playerCopy[x][y].status = 2;
                if (detectSink(x, y, playerShipLocations, playerCopy)) {
                    setPlayerShipsLeft(playerShipsLeft - 1);
                    if (playerShipsLeft - 1 === 0) {
                        setIsPlaying(false);
                        setComputerWins(computerWins + 1);
                    }
                }
            }
            setPlayerBoard(playerCopy);
            setPlayersTurn(true);
        }
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

                {computerBoard.map((row, i) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'column' }} key={i}>
                            {row.map((col, j) => {
                                return (
                                    <div
                                        onClick={() => handleClick(i, j)}
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
