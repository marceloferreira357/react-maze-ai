import { motion } from "motion/react";
import { cn } from "../common/utils";

function Route({ className, children }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={cn(
        "flex flex-col items-center justify-center w-dvw h-dvh",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default Route;
