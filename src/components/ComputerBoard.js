import { colLabels, rowLabels, copyBoard } from '../utilities';

const ComputerBoard = ({
    playersTurn,
    setPlayersTurn,
    computerShipLocations,
    setComputerShipLocations,
    computerBoard,
    setComputerBoard,
}) => {
    const handleClick = (e, row, col) => {
        const copy = copyBoard(computerBoard);
        copy[row][col].clicked = true;
        setComputerBoard(copy);
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
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            border: '1px solid white',
                                            background: '#006994',
                                            fontSize: '4rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: col.status === 0 ? 'white' : col.status === 1 ? '#f44336' : 'black',
                                        }}
                                        key={j}
                                        onClick={(e) => handleClick(e, i, j)}
                                    >
                                        {col.clicked ? 'X' : ''}
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
