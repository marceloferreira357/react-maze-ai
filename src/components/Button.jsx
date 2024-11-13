import { motion } from "motion/react";

function Button({ children, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="bg-french-rose px-4 py-2 rounded-md hover:bg-rose-quartz-pink transition-all"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
