import styled from 'styled-components';

export const StyledButton = styled.button`
    color: white;
    padding: 12px 40px;
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 3%;
    border-radius: 8px;
    border: none;
    outline: none;
    border: 1px solid white;
    background-color: #f44336;

    @media (max-width: 500px) {
        padding: 10px 30px;
        margin-right: 2%;
    }

    &:hover {
        opacity: 0.7;
    }
`;
