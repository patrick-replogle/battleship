import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: white;
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

export default GlobalStyles;
