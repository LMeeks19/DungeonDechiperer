import { MenuItem, Select, Tooltip } from "@mui/material";
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
  const glyphMenuItems = [
    <MenuItem key={Tile.NEUTRAL} value={Tile.NEUTRAL}>
      <Tooltip title={Tile.NEUTRAL} arrow>
        <img src={NeutralGlyph} alt={NeutralGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.WITNESS} value={Tile.WITNESS}>
      <Tooltip title={Tile.WITNESS} arrow>
        <img src={WitnessGlyph} alt={WitnessGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.HIVE} value={Tile.HIVE}>
      <Tooltip title={Tile.HIVE} arrow>
        <img src={HiveGlyph} alt={HiveGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.GUARDIAN} value={Tile.GUARDIAN}>
      <Tooltip title={Tile.GUARDIAN} arrow>
        <img src={GuardianGlyph} alt={GuardianGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.PYRAMID} value={Tile.PYRAMID}>
      <Tooltip title={Tile.PYRAMID} arrow>
        <img src={PyramidGlyph} alt={PyramidGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.TRAVELLER} value={Tile.TRAVELLER}>
      <Tooltip title={Tile.TRAVELLER} arrow>
        <img src={TravellerGlyph} alt={TravellerGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.DRINK} value={Tile.DRINK}>
      <Tooltip title={Tile.DRINK} arrow>
        <img src={DrinkGlyph} alt={DrinkGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.STOP} value={Tile.STOP}>
      <Tooltip title={Tile.STOP} arrow>
        <img src={StopGlyph} alt={StopGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.GIVE} value={Tile.GIVE}>
      <Tooltip title={Tile.GIVE} arrow>
        <img src={GiveGlyph} alt={GiveGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.WORSHIP} value={Tile.WORSHIP}>
      <Tooltip title={Tile.WORSHIP} arrow>
        <img src={WorshipGlyph} alt={WorshipGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.KILL} value={Tile.KILL}>
      <Tooltip title={Tile.KILL} arrow>
        <img src={KillGlyph} alt={KillGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.WORM} value={Tile.WORM}>
      <Tooltip title={Tile.WORM} arrow>
        <img src={WormGlyph} alt={WormGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.SAVATHÛN} value={Tile.SAVATHÛN}>
      <Tooltip title={Tile.SAVATHÛN} arrow>
        <img src={SavathunGlyph} alt={SavathunGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.DARKNESS} value={Tile.DARKNESS}>
      <Tooltip title={Tile.DARKNESS} arrow>
        <img src={DarknessGlyph} alt={DarknessGlyph} />
      </Tooltip>
    </MenuItem>,
    <MenuItem key={Tile.LIGHT} value={Tile.LIGHT}>
      <Tooltip title={Tile.LIGHT} arrow>
        <img src={LightGlyph} alt={LightGlyph} />
      </Tooltip>
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
  const [solutionGlyphs, setSolutionGlyphs] =
    useState<CombinationWheelObject | null>(null);

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
                  {glyphMenuItems.map((glyph) => {
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
                  {glyphMenuItems.map((glyph) => {
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
                  {glyphMenuItems.map((glyph) => {
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
                  {glyphMenuItems.map((glyph) => {
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
                  {glyphMenuItems.map((glyph) => {
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
                  {glyphMenuItems.map((glyph) => {
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
            {solutionGlyphs !== null ? (
              <div className="input-grid">
                <div className="grid-item">
                  {!solutionGlyphs.left?.isTruth && <div className="lie" />}
                  <Select
                    value={solutionGlyphs.left?.firstTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item">
                  {!solutionGlyphs.right?.isTruth && <div className="lie" />}
                  <Select
                    value={solutionGlyphs.right?.firstTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item middle-left">
                  {!solutionGlyphs.left?.isTruth && <div className="lie" />}
                  <Select
                    value={solutionGlyphs.left?.secondTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item middle-right">
                  {!solutionGlyphs.right?.isTruth && <div className="lie" />}
                  <Select
                    value={solutionGlyphs.right?.secondTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item">
                  {!solutionGlyphs.left?.isTruth && <div className="lie" />}
                  <Select
                    value={solutionGlyphs.left?.thirdTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
                <div className="grid-item">
                  {!solutionGlyphs.right?.isTruth && <div className="lie" />}
                  <Select
                    value={solutionGlyphs.right?.thirdTile}
                    sx={{ svg: { display: "none" }, pointerEvents: "none" }}
                    readOnly
                  >
                    {glyphMenuItems.map((glyph) => {
                      return glyph;
                    })}
                  </Select>
                </div>
              </div>
            ) : (
              <div>No Solution Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
