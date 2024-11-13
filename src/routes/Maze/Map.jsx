import React from "react";
import { cn } from "../../common/utils";

function Map({ map, setMap, mapSize }) {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg">
      {map?.map((row, rowIndex) => (
        <div className="flex flex-row items-center justify-center">
          {row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                "w-5 h-5 border-2 border-transparent hover:border-metallic-pink outline-none",
                cell === 0 ? "bg-french-lilac" : "bg-white"
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Map;
