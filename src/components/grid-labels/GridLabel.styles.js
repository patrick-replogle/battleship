import styled from 'styled-components';

export const StyledRowLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    div {
        width: 55px;
        height: 55px;
        font-size: 2.5rem;

        @media (max-width: 1280px) {
            width: 40px;
            height: 40px;
            font-size: 2rem;
        }

        @media (max-width: 600px) {
            width: 34px;
            height: 34px;
        }

        @media (max-width: 500px) {
            width: 28px;
            height: 28px;
        }
    }
`;

export const StyledColLabelContainer = styled.div`
    display: flex;
    margin-left: 35px;

    div {
        width: 55px;
        height: 55px;
        font-size: 2.5rem;

        @media (max-width: 1280px) {
            width: 40px;
            height: 40px;
            font-size: 2rem;
        }

        @media (max-width: 600px) {
            width: 34px;
            height: 34px;
        }

        @media (max-width: 500px) {
            width: 28px;
            height: 28px;
        }
    }
`;
