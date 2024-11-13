import { motion } from "motion/react";

function Link({ href, target, children }) {
  return (
    <motion.a
      whileTap={{
        scale: 0.95,
      }}
      href={href}
      target={target}
      className="absolute bottom-2 left-0 flex flex-row items-center justify-center gap-2 no-underline text-lavender-blush w-full hover:text-metallic-pink transition-all"
    >
      {children}
    </motion.a>
  );
}

export default Link;
