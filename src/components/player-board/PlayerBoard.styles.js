import styled from 'styled-components';

import { pickFontColor, pickBackgroundColor } from '../../utilities/sharedFunctions';

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
    color: ${({ cell }) => pickFontColor(cell)};
    background: ${({ cell }) => pickBackgroundColor(cell)};

    @media (max-width: 600px) {
        width: 34px;
        height: 34px;
    }

    @media (max-width: 500px) {
        width: 30px;
        height: 30px;
    }
`;
