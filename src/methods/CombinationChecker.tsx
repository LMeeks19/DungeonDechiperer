import { Combination, CombinationWheelObject } from "../models/Combination";
import { combinations } from "../objects/combinations";

export function isValidCombination(combination: Combination): boolean {
  return combinations.some(
    (c) =>
      c.firstTile === combination.firstTile &&
      c.secondTile === combination.secondTile &&
      c.thirdTile === combination.thirdTile
  );
}

export function CalculateSolution(
  combinationWheelObject: CombinationWheelObject
): CombinationWheelObject | null {
  if (
    !isValidCombination(combinationWheelObject.left) ||
    !isValidCombination(combinationWheelObject.right)
  )
    return null;

  var leftCombination = combinations.find(
    (c) =>
      c.firstTile === combinationWheelObject.left.firstTile &&
      c.secondTile === combinationWheelObject.left.secondTile &&
      c.thirdTile === combinationWheelObject.left.thirdTile
  );

  var rightCombination = combinations.find(
    (c) =>
      c.firstTile === combinationWheelObject.right.firstTile &&
      c.secondTile === combinationWheelObject.right.secondTile &&
      c.thirdTile === combinationWheelObject.right.thirdTile
  );

  if (leftCombination!.isTruth === rightCombination!.isTruth)
    return null;

  return {
    left: leftCombination,
    right: rightCombination,
  } as CombinationWheelObject;
}
