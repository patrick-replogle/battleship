import styled from 'styled-components';

export const StyledRowLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    div {
        width: 50px;
        height: 50px;
        font-size: 2.6rem;

        @media (max-width: 1400px) {
            width: 40px;
            height: 40px;
            font-size: 2rem;
        }

        @media (max-width: 500px) {
            width: 34px;
            height: 34px;
        }

        @media (max-width: 400px) {
            width: 28px;
            height: 28px;
        }
    }
`;

export const StyledColLabelContainer = styled.div`
    display: flex;
    margin-left: 45px;

    @media (max-width: 1400px) {
        margin-left: 37px;
    }

    div {
        width: 50px;
        height: 50px;
        font-size: 2.6rem;

        @media (max-width: 1400px) {
            width: 40px;
            height: 40px;
            font-size: 2rem;
        }

        @media (max-width: 500px) {
            width: 34px;
            height: 34px;
        }

        @media (max-width: 400px) {
            width: 28px;
            height: 28px;
        }
    }
`;
