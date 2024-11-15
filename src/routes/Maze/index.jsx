import { useState } from "react";
import { trainingStatus } from "../../common/enums";
import { Route } from "../../components";
import Directions from "./Directions";
import ItemsPanel from "./ItemsPanel";
import Map from "./Map";
import ResetMapButton from "./ResetMapButton";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import TrainingBadge from "./TrainingBadge";
import { resetMap } from "./utils";

function Maze() {
  const [predictionScore, setPredictionScore] = useState({
    UP: 0,
    DOWN: 0,
    LEFT: 0,
    RIGHT: 0,
  });
  const [status, setStatus] = useState(trainingStatus.WAITING);
  const [mapSize, setMapSize] = useState({ width: 24, height: 24 });
  const [map, setMap] = useState(resetMap(mapSize));

  return (
    <Route className="gap-4">
      <TrainingBadge status={status} />
      <div className="flex flex-row items-center justify-center gap-6">
        <Map map={map} setMap={setMap} />
        <ItemsPanel />
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <StartButton />
        <StopButton />
      </div>
      <ResetMapButton />
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="font-medium">Prediction</span>
        <Directions predictionScore={predictionScore} status={status} />
      </div>
    </Route>
  );
}

export default Maze;
