import styled from 'styled-components';

export const StyledRowLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    div {
        width: 40px;
        height: 40px;
        font-size: 2rem;

        @media (max-width: 600px) {
            width: 34px;
            height: 34px;
        }

        @media (max-width: 500px) {
            width: 30px;
            height: 30px;
        }
    }
`;

export const StyledColLabelContainer = styled.div`
    display: flex;
    margin-left: 35px;

    div {
        width: 40px;
        height: 40px;
        font-size: 2rem;

        @media (max-width: 600px) {
            width: 34px;
            height: 34px;
        }

        @media (max-width: 500px) {
            width: 30px;
            height: 30px;
        }
    }
`;
