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
    color: ${({ cell }) => (cell.status === 0 ? 'white' : cell.status >= 1 && cell.alive ? '#f44336' : 'black')};
`;