export const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const colLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const ships = [
    {
        name: 'Carrier',
        length: 5,
        ship: [0, 0, 0, 0, 0],
    },
    {
        name: 'Battleship',
        length: 4,
        ship: [0, 0, 0, 0],
    },
    {
        name: 'Cruiser',
        length: 3,
        ship: [0, 0, 0],
    },
    {
        name: 'Submarine',
        length: 3,
        ship: [0, 0, 0],
    },
    {
        name: 'Destroyer',
        length: 2,
        ship: [0, 0, 0],
    },
];

export const initialPlayerShipState = {
    Carrier: [],
    Battleship: [],
    Cruiser: [],
    Submarine: [],
    Destroyer: [],
};

export const initialComputerShipState = {
    Carrier: [],
    Battleship: [],
    Cruiser: [],
    Submarine: [],
    Destroyer: [],
};
