import ShipGrid from '../ship-grid/ShipGrid';
import { RowLabels, ColLabels } from '../grid-labels/GridLabels';

const PlayerBoard = (props) => {
    return (
        <div>
            <ColLabels />
            <div style={{ display: 'flex' }}>
                <RowLabels />
                <ShipGrid
                    board={props.playerBoard}
                    setBoard={props.setPlayerBoard}
                    vertical={props.vertical}
                    shipIdx={props.shipIdx}
                    setShipIdx={props.setShipIdx}
                    readyToPlay={props.readyToPlay}
                    playerShipLocations={props.playerShipLocations}
                    setPlayerShipLocations={props.setPlayerShipLocations}
                    setReadyToPlay={props.setReadyToPlay}
                />
            </div>
        </div>
    );
};

export default PlayerBoard;
