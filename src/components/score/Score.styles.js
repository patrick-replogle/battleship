import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    font-size: 1.2rem;
`;

export const StyledScoreContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: ${({ direction }) => (direction ? direction : '')};
    align-items: center;
`;

export const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
`;
