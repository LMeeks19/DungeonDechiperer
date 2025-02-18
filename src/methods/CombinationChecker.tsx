import { Combination } from "../models/Combination";
import { combinations } from "../objects/combinations";

export function isValidCombination(combination: Combination): boolean {
    return combinations.some(c => c.firstTile === combination.firstTile && c.secondTile === combination.secondTile && c.thirdTile === combination.thirdTile) ;
}

export function isTruth(combination: Combination): boolean | null {
    if (!isValidCombination(combination))
        return null;

    return combinations.some(c => c.firstTile === combination.firstTile && c.secondTile === combination.secondTile && c.thirdTile === combination.thirdTile && c.isTruth)
}
