import githubFilled from '@iconify/icons-ant-design/github-filled';
import portfolioIcon from '@iconify/icons-bytesize/portfolio';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';

import { FooterContainer, StyledLink, StyledIconLarge, StyledIconSmall } from './Footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <StyledLink href="https://github.com/patrick-replogle/battleship" target="blank">
                <StyledIconLarge icon={githubFilled} />
            </StyledLink>

            <StyledLink href="https://patrick-replogle.com/" target="blank">
                <StyledIconSmall icon={portfolioIcon} />
            </StyledLink>

            <StyledLink href="https://www.linkedin.com/in/patrick-replogle/" target="blank">
                <StyledIconLarge icon={linkedinFilled} />
            </StyledLink>
        </FooterContainer>
    );
};

export default Footer;
