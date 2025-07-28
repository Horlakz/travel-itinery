import { Easing } from "framer-motion";

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.42, 0, 0.58, 1] as Easing,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: [0.42, 0, 0.58, 1] as Easing,
    },
  },
};
