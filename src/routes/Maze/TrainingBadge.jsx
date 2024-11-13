import { useMemo } from "react";
import { trainingStatus } from "../../common/enums";
import { cn } from "../../common/utils";

function TrainingBadge({ status }) {
  const isTraining = useMemo(
    () => status === trainingStatus.TRAINING,
    [status]
  );
  const isWaiting = useMemo(() => status === trainingStatus.WAITING, [status]);

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center px-4 py-2 rounded-md",
        isTraining ? "bg-vivid-cerulean" : isWaiting ? "bg-gold" : "bg-avocado"
      )}
    >
      <article className={cn("prose", isTraining && "animate-pulse")}>
        <h3 className="text-lavender-blush">
          {isTraining
            ? "Training data, re-start on fail"
            : isWaiting
              ? "Waiting"
              : "Using trained data"}
        </h3>
      </article>
    </div>
  );
}

export default TrainingBadge;
