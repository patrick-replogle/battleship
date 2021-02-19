import React from 'react';

import { buildBoard, generateComputerBoard } from '../utilities';

class Computer extends React.Component {
    state = {
        board: generateComputerBoard(),
        guesses: [],
        hits: [],
    };

    render() {
        return <></>;
    }
}

export default Computer;
