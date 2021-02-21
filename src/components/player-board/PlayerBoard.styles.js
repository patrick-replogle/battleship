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
    color: ${({ cell }) => (cell.status === 0 ? 'white' : cell.status >= 1 && cell.alive ? '#f44336' : 'black')};
    background: ${({ cell }) =>
        cell.hover && cell.status === 1
            ? '#f44336'
            : cell.hover
            ? '#ffea00'
            : cell.status === 0
            ? '#006994'
            : cell.status >= 1
            ? '#848482'
            : ''};
`;
