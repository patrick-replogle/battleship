import { Icon } from '@iconify/react';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import portfolioIcon from '@iconify/icons-bytesize/portfolio';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';

import { FooterContainer, StyledLink } from './Footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <StyledLink href="https://github.com/patrick-replogle/battleship" target="blank">
                <Icon icon={githubFilled} style={{ fontSize: '45px' }} />
            </StyledLink>

            <StyledLink href="https://patrick-replogle.com/" target="blank">
                <Icon icon={portfolioIcon} style={{ fontSize: '40px' }} />
            </StyledLink>

            <StyledLink href="https://www.linkedin.com/in/patrick-replogle/" target="blank">
                <Icon icon={linkedinFilled} style={{ fontSize: '45px' }} />
            </StyledLink>
        </FooterContainer>
    );
};

export default Footer;
