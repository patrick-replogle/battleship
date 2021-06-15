import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color:#121212;
        color: white;
    }
    
    html, body {
        font-family: sofia-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        text-align: center;
        height: 100%;
        position: relative;
        overflow-x: hidden;
    }
`;

export const GameContainer = styled.div`
    min-height: 100vh;
`;
