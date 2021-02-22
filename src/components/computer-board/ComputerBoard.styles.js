import styled from 'styled-components';

export const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledCell = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid white;
    background: #006994;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ cell }) => pickFontColor(cell)};
`;

const pickFontColor = (cell) => {
    if (cell.status === 'ocean') {
        return 'white';
    } else if (cell.status === 'hit' && cell.alive) {
        return '#f44336';
    }
    return 'black';
};
