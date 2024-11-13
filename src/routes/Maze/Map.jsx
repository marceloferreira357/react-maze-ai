import { motion } from "motion/react";
import React from "react";
import { cn } from "../../common/utils";

function Map({ map, setMap }) {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg">
      {map?.map((row, rowIndex) => (
        <div className="flex flex-row items-center justify-center">
          {row.map((cell, colIndex) => (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: [0, 2, 1] }}
              transition={{
                delay: 0.01 * (colIndex + rowIndex),
              }}
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
