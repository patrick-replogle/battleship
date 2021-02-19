import { ships } from '../../utilities';
import { Container, StyledDiv, Cell, StyledP } from './Ship.styles';

const Ship = ({ shipIdx }) => {
    return (
        <Container>
            <StyledP>{ships[shipIdx].name}</StyledP>
            <StyledDiv>
                {ships[shipIdx].ship.map((col) => {
                    return <Cell></Cell>;
                })}
            </StyledDiv>
        </Container>
    );
};

export default Ship;