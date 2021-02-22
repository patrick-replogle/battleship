import styled from 'styled-components';

export const StyledGrid = styled.div`
    display: flex;
`;

export const StyledCell = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid white;
    color: white;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ cell }) => pickFontColor(cell)};
    background: ${({ cell }) => pickBackgroundColor(cell)};
`;

const pickFontColor = (cell) => {
    if (cell.status === 'ocean') {
        return 'white';
    } else if (cell.status === 'hit' && cell.alive) {
        return '#f44336';
    }
    return 'black';
};

const pickBackgroundColor = (cell) => {
    if (cell.hover && cell.status === 'ship') {
        return '#f44336';
    } else if (cell.hover) {
        return '#ffea00';
    } else if (cell.status === 'ocean') {
        return '#006994';
    } else if (cell.status === 'ship' || cell.status === 'hit') {
        return '#848482';
    }
};
