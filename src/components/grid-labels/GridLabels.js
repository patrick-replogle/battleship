import { StyledRowLabelContainer, StyledColLabelContainer } from './GridLabel.styles';

import { rowLabels, colLabels } from '../../utilities/data';

export const RowLabels = () => {
    return (
        <StyledRowLabelContainer>
            {rowLabels.map((row, index) => (
                <div key={index}>{row}</div>
            ))}
        </StyledRowLabelContainer>
    );
};

export const ColLabels = () => {
    return (
        <StyledColLabelContainer>
            {colLabels.map((row, index) => (
                <div key={index}>{row}</div>
            ))}
        </StyledColLabelContainer>
    );
};
