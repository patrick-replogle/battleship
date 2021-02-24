import styled from 'styled-components';

export const StyledRowLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    div {
        width: 40px;
        height: 40px;
        font-size: 2rem;

        @media (max-width: 500px) {
            width: 32px;
            height: 32px;
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

        @media (max-width: 500px) {
            width: 32px;
            height: 32px;
        }
    }
`;
