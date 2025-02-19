import { Tile } from "../enums/Tile";

export interface Combination {
    firstTile: Tile
    firstTileImage: string;
    secondTile: Tile;
    secondTimeImage: string;
    thirdTile: Tile;
    thirdTileImage: string;
    isTruth: boolean,
}

export interface CombinationWheelObject {
    left: Combination;
    right: Combination;
}