import { MenuItem, Select } from "@mui/material";
import "./App.css";
import NeutralGlyph from "./images/NeutralGlyph.jpg";
import WitnessGlyph from "./images/WitnessGlyph.jpg";
import HiveGlyph from "./images/HiveGlyph.jpg";
import GuardianGlyph from "./images/GuardianGlyph.jpg";
import PyramidGlyph from "./images/PyramidGlyph.jpg";
import TravellerGlyph from "./images/TravellerGlyph.jpg";
import DrinkGlyph from "./images/DrinkGlyph.jpg";
import StopGlyph from "./images/StopGlyph.jpg";
import GiveGlyph from "./images/GiveGlyph.jpg";
import WorshipGlyph from "./images/WorshipGlyph.jpg";
import KillGlyph from "./images/KillGlyph.jpg";
import WormGlyph from "./images/WormGlyph.jpg";
import SavathunGlyph from "./images/SavathunGlyph.jpg";
import DarknessGlyph from "./images/DarknessGlyph.jpg";
import LightGlyph from "./images/LightGlyph.jpg";

import { Tile } from "./enums/Tile";
import { useEffect, useState } from "react";
import { CombinationWheelObject } from "./models/Combination";
import { CalculateSolution } from "./methods/CombinationChecker";

function App() {
  const glyphsMenuItems = [
    <MenuItem key={Tile.NEUTRAL} value={Tile.NEUTRAL}>
      <img src={NeutralGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.WITNESS} value={Tile.WITNESS}>
      <img src={WitnessGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.HIVE} value={Tile.HIVE}>
      <img src={HiveGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.GUARDIAN} value={Tile.GUARDIAN}>
      <img src={GuardianGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.PYRAMID} value={Tile.PYRAMID}>
      <img src={PyramidGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.TRAVELLER} value={Tile.TRAVELLER}>
      <img src={TravellerGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.DRINK} value={Tile.DRINK}>
      <img src={DrinkGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.STOP} value={Tile.STOP}>
      <img src={StopGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.GIVE} value={Tile.GIVE}>
      <img src={GiveGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.WORSHIP} value={Tile.WORSHIP}>
      <img src={WorshipGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.KILL} value={Tile.KILL}>
      <img src={KillGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.WORM} value={Tile.WORM}>
      <img src={WormGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.SAVATHÛN} value={Tile.SAVATHÛN}>
      <img src={SavathunGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.DARKNESS} value={Tile.DARKNESS}>
      <img src={DarknessGlyph} alt={NeutralGlyph} />
    </MenuItem>,
    <MenuItem key={Tile.LIGHT} value={Tile.LIGHT}>
      <img src={LightGlyph} alt={NeutralGlyph} />
    </MenuItem>,
  ];

  const [selectedGlyphs, setSelectedGlyphs] = useState<CombinationWheelObject>({
    left: {
      firstTile: Tile.NEUTRAL,
      secondTile: Tile.NEUTRAL,
      thirdTile: Tile.NEUTRAL,
    },
    right: {
      firstTile: Tile.NEUTRAL,
      secondTile: Tile.NEUTRAL,
      thirdTile: Tile.NEUTRAL,
    },
  } as CombinationWheelObject);
  const [solutionGlyphs, setSolutionGlyphs] = useState<CombinationWheelObject>({
    left: {
      firstTile: Tile.NEUTRAL,
      secondTile: Tile.NEUTRAL,
      thirdTile: Tile.NEUTRAL,
    },
    right: {
      firstTile: Tile.NEUTRAL,
      secondTile: Tile.NEUTRAL,
      thirdTile: Tile.NEUTRAL,
    },
  } as CombinationWheelObject);

  useEffect(() => {
    setSolutionGlyphs(CalculateSolution(selectedGlyphs));
  }, [selectedGlyphs]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Dungeon Decipherer</h3>
        <p>Sundered Doctorine</p>
      </header>
      <div className="content">
        <div className="box">
          <h2 className="title">Input</h2>
          <div className="content-box">
            <div className="input-grid">
              <div className="grid-item">
                <Select
                  value={selectedGlyphs.left.firstTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        firstTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                <Select
                  value={selectedGlyphs.right.firstTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        firstTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item middle-left">
                <Select
                  value={selectedGlyphs.left.secondTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        secondTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item middle-right">
                <Select
                  value={selectedGlyphs.right.secondTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        secondTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                <Select
                  value={selectedGlyphs.left.thirdTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      left: {
                        ...selectedGlyphs.left,
                        thirdTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                <Select
                  value={selectedGlyphs.right.thirdTile}
                  onChange={(e) =>
                    setSelectedGlyphs({
                      ...selectedGlyphs,
                      right: {
                        ...selectedGlyphs.right,
                        thirdTile: e.target.value as Tile,
                      },
                    })
                  }
                  sx={{ svg: { display: "none" } }}
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <h2 className="title">Solution</h2>
          <div className="content-box">
            <div className="input-grid">
              <div className="grid-item">
                <Select
                  value={solutionGlyphs.left.firstTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                <Select
                  value={solutionGlyphs.right.firstTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item middle-left">
                <Select
                  value={solutionGlyphs.left.secondTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item middle-right">
                <Select
                  value={solutionGlyphs.right.secondTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                <Select
                  value={solutionGlyphs.left.thirdTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
              <div className="grid-item">
                <Select
                  value={solutionGlyphs.right.thirdTile}
                  sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                  readOnly
                >
                  {glyphsMenuItems.map((glyph) => {
                    return glyph;
                  })}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
