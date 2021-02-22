import styled from 'styled-components';

import { pickFontColor, pickBackgroundColor } from '../../utilities/functions';

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
`;
