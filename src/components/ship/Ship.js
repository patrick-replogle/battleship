import { ships } from '../../utilities/data';
import { Container, StyledDiv, Cell, StyledP } from './Ship.styles';

const Ship = ({ shipIdx }) => {
    return (
        <Container>
            <StyledP>{ships[shipIdx].name}</StyledP>
            <StyledDiv>
                {ships[shipIdx].ship.map((col, index) => {
                    return <Cell key={index}></Cell>;
                })}
            </StyledDiv>
        </Container>
    );
};

export default Ship;
