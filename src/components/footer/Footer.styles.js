import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    background: #303030;
    color: white;
    align-items: center;
    display: flex;
    height: 8rem;
    justify-content: center;
    width: 100vw;
    -webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
    box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);

    @media (max-width: 500px) {
        height: 6rem;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: white;
    margin: 0 5%;
    color: white;
`;

export const StyledIconLarge = styled(Icon)`
    font-size: 55px;

    @media (max-width: 600px) {
        font-size: 45px;
    }
`;

export const StyledIconSmall = styled(Icon)`
    font-size: 50px;

    @media (max-width: 600px) {
        font-size: 40px;
    }
`;
