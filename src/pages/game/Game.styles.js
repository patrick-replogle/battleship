import styled from 'styled-components';

export const GameContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;
