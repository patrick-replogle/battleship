import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color:#121212;
        color: white;
        min-height: 100vh;
    }
    
    html, body {
        font-family: sofia-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        text-align: center;
    }
`;
