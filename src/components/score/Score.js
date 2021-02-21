import { Icon } from '@iconify/react';
import classicComputer from '@iconify-icons/entypo/classic-computer';
import userAvatarFilled from '@iconify-icons/carbon/user-avatar-filled';
import mineIcon from '@iconify-icons/mdi/mine';

import { StyledContainer, StyledDiv, StyledScoreContainer, StyledTitleContainer } from './Score.styles';

const Score = ({ playerShipsLeft, playerWins, computerShipsLeft, computerWins }) => {
    return (
        <StyledContainer>
            <StyledDiv>
                <StyledScoreContainer direction="flex-start">
                    <Icon icon={userAvatarFilled} style={{ fontSize: '8rem' }} />
                    <div>
                        <h2>Ships: {playerShipsLeft}</h2>
                        <h2>Wins: {playerWins}</h2>
                    </div>
                </StyledScoreContainer>
                <StyledTitleContainer>
                    <Icon icon={mineIcon} style={{ fontSize: '6rem', color: '#f44336' }} />
                    <h1 style={{ fontSize: '3rem' }}>BATTLESHIP</h1>
                    <Icon icon={mineIcon} style={{ fontSize: '6rem', color: '#f44336' }} />
                </StyledTitleContainer>
                <StyledScoreContainer direction="flex-end">
                    <Icon icon={classicComputer} style={{ fontSize: '7rem' }} />
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
