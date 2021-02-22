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
    color: ${({ cell }) =>
        cell.status === 'ocean' ? 'white' : cell.status === 'hit' && cell.alive ? '#f44336' : 'black'};
    background: ${({ cell }) =>
        cell.hover && cell.status === 'ship'
            ? '#f44336'
            : cell.hover
            ? '#ffea00'
            : cell.status === 'ocean'
            ? '#006994'
            : cell.status === 'ship' || cell.status === 'hit'
            ? '#848482'
            : ''};
`;
