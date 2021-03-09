import { Icon } from '@iconify/react';
import classicComputer from '@iconify-icons/entypo/classic-computer';
import userAvatarFilled from '@iconify-icons/carbon/user-avatar-filled';
import mineIcon from '@iconify-icons/mdi/mine';

import {
    StyledContainer,
    StyledDiv,
    StyledScoreContainer,
    StyledTitleContainer,
    StyledIcon,
    StyledAvatarIcon,
} from './Score.styles';

const Score = ({ playerShipsLeft, playerWins, computerShipsLeft, computerWins }) => {
    return (
        <StyledContainer>
            <StyledDiv>
                <StyledScoreContainer direction="flex-start">
                    <StyledAvatarIcon icon={userAvatarFilled} size={'8rem'} />
                    <div>
                        <h2>Ships: {playerShipsLeft}</h2>
                        <h2>Wins: {playerWins}</h2>
                    </div>
                </StyledScoreContainer>
                <StyledTitleContainer>
                    <StyledIcon icon={mineIcon} />
                    <h1>BATTLESHIP</h1>
                    <StyledIcon icon={mineIcon} />
                </StyledTitleContainer>
                <StyledScoreContainer direction="flex-end">
                    <StyledAvatarIcon icon={classicComputer} size={'7rem'} />
                    <div>
                        <h2>Ships: {computerShipsLeft}</h2>
                        <h2>Wins: {computerWins}</h2>
                    </div>
                </StyledScoreContainer>
            </StyledDiv>
        </StyledContainer>
    );
};

export default Score;
