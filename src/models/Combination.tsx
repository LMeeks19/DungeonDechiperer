import { Tile } from "../enums/Tile";

export interface Combination {
    firstTile: Tile
    fistTileOn: boolean;
    secondTile: Tile;
    secondTileOn: boolean;
    thirdTile: Tile;
    thirdTileOn: boolean;
    isTruth: boolean,
}

export interface CombinationWheelObject {
    left: Combination;
    right: Combination;
}