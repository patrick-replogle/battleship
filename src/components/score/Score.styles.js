import styled from 'styled-components';
import { Icon } from '@iconify/react';

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

    h1 {
        font-size: 4rem;
        margin: 0 5%;

        @media (max-width: 700px) {
            display: none;
        }
    }
`;

export const StyledAvatarIcon = styled(Icon)`
    font-size: ${({ size }) => size};

    @media (max-width: 500px) {
        font-size: 6rem;
    }
`;

export const StyledIcon = styled(Icon)`
    font-size: 8rem;
    color: #f44336;

    @media (max-width: 900px) {
        display: none;
    }
`;
