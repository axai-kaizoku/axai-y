"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const PlusMinusBtn = () => {
  const [move, setMove] = useState(false);

  const duration = 0.5; // Reduced duration for a snappier effect

  const minusVariants = {
    checked: { scale: 1, rotate: 0 },
    unchecked: { scale: 1, rotate: 180 },
  };

  const plusVariants = {
    checked: { scale: 1, rotate: -180 },
    unchecked: { scale: 1, rotate: 0 },
  };

  const scaleMinus = useMotionValue(move ? 1 : 0);
  const scalePlus = useMotionValue(move ? 0 : 1);
  const pathLengthMinus = useTransform(scaleMinus, [0, 1], [0, 1]);
  const pathLengthPlus = useTransform(scalePlus, [0, 1], [0, 1]);

  useEffect(() => {
    scaleMinus.set(move ? 1 : 0);
    scalePlus.set(move ? 0 : 1);
  }, [move, scaleMinus, scalePlus]);

  return (
    <motion.div
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full"
      animate={move ? "checked" : "unchecked"}
      onClick={() => setMove(!move)}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <motion.path
          id="minus"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          transition={{ duration }}
          variants={minusVariants}
          custom={move}
          style={{
            pathLength: pathLengthMinus,
            scale: scaleMinus,
            rotate: 0,
          }}
        />
        <motion.path
          id="plus"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          transition={{ duration }}
          variants={plusVariants}
          custom={move}
          style={{
            pathLength: pathLengthPlus,
            scale: scalePlus,
            rotate: 0,
          }}
        />
      </motion.svg>
    </motion.div>
  );
};
