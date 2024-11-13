import { useMemo } from "react";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import { trainingStatus } from "../../common/enums";
import { cn } from "../../common/utils";

const directionIcons = {
  UP: FaArrowAltCircleUp,
  DOWN: FaArrowAltCircleDown,
  LEFT: FaArrowAltCircleLeft,
  RIGHT: FaArrowAltCircleRight,
};

function Directions({ predictionScore, status }) {
  const maxDirection = useMemo(
    () =>
      Object.keys(predictionScore).reduce((maxDir, dir) =>
        predictionScore[dir] > predictionScore[maxDir] ? dir : maxDir
      ),
    [predictionScore]
  );

  return (
    <div className="flex flex-row items-center justify-center gap-2 text-3xl">
      {Object.keys(directionIcons).map((direction) => {
        const IconComponent = directionIcons[direction];
        const isActive = maxDirection === direction;
        const iconClass = cn(
          "transition-all duration-150 opacity-50",
          isActive && status !== trainingStatus.WAITING && "opacity-100"
        );
        return <IconComponent key={direction} className={iconClass} />;
      })}
    </div>
  );
}

export default Directions;
