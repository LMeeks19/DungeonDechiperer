import { Tile } from "../enums/Tile";

export interface Combination {
    firstTile: Tile
    secondTile: Tile;
    thirdTile: Tile;
    isTruth: boolean,
}