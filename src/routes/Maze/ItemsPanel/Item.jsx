import { motion } from "motion/react";

function Item({ icon: Icon, customComponent, description, index }) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        delay: 0.05 * index,
      }}
      className="flex flex-col items-center justify-center gap-1 text-lavender-blush bg-lavender-blush/10 hover:bg-lavender-blush/40 rounded-md p-2 transition-all min-w-14"
    >
      {Icon ? <Icon className="text-xl" /> : customComponent}
      <span className="text-xs">{description}</span>
    </motion.button>
  );
}

export default Item;
