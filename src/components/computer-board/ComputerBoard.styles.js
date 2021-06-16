import styled from 'styled-components';

import { pickFontColor } from '../../utilities/sharedFunctions';

export const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledCell = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid white;
    background: #006994;
    font-size: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ cell }) => pickFontColor(cell)};

    @media (max-width: 1400px) {
        width: 40px;
        height: 40px;
        font-size: 4rem;
    }

    @media (max-width: 600px) {
        width: 36px;
        height: 36px;
    }

    @media (max-width: 500px) {
        width: 28px;
        height: 28px;
    }
`;
