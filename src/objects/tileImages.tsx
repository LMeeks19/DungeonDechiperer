import { Tile } from "../enums/Tile";
import WitnessGlyph from "../images/WitnessGlyph.jpg";
import HiveGlyph from "../images/HiveGlyph.jpg";
import GuardianGlyph from "../images/GuardianGlyph.jpg";
import PyramidGlyph from "../images/PyramidGlyph.jpg";
import TravellerGlyph from "../images/TravellerGlyph.jpg";
import DrinkGlyph from "../images/DrinkGlyph.jpg";
import StopGlyph from "../images/StopGlyph.jpg";
import GiveGlyph from "../images/GiveGlyph.jpg";
import WorshipGlyph from "../images/WorshipGlyph.jpg";
import KillGlyph from "../images/KillGlyph.jpg";
import WormGlyph from "../images/WormGlyph.jpg";
import SavathunGlyph from "../images/SavathunGlyph.jpg";
import DarknessGlyph from "../images/DarknessGlyph.jpg";
import LightGlyph from "../images/LightGlyph.jpg";

const tileImages = [
  {
    tile: Tile.WITNESS,
    image: WitnessGlyph,
  },
  {
    tile: Tile.HIVE,
    image: HiveGlyph,
  },
  {
    tile: Tile.GUARDIAN,
    image: GuardianGlyph,
  },
  {
    tile: Tile.PYRAMID,
    image: PyramidGlyph,
  },
  {
    tile: Tile.TRAVELLER,
    image: TravellerGlyph,
  },
  {
    tile: Tile.WORSHIP,
    image: WorshipGlyph,
  },
  {
    tile: Tile.KILL,
    image: KillGlyph,
  },
  {
    tile: Tile.STOP,
    image: StopGlyph,
  },
  {
    tile: Tile.GIVE,
    image: GiveGlyph,
  },
  {
    tile: Tile.DRINK,
    image: DrinkGlyph,
  },
  {
    tile: Tile.WORM,
    image: WormGlyph,
  },
  {
    tile: Tile.SAVATHÛN,
    image: SavathunGlyph,
  },
  {
    tile: Tile.DARKNESS,
    image: DarknessGlyph,
  },
  {
    tile: Tile.LIGHT,
    image: LightGlyph,
  },
];

export function getTileImage(tile: Tile): string {
  return tileImages.find(t => t.tile === tile)!.image;
}
