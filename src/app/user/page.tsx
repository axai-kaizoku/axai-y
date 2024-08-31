"use client";

import { Button } from "@/components/ui/button";
import UserForm from "../_components/UserForm";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { PlusMinusBtn } from "../_components/PlusMinusBtn";

export default function UserPage() {
  const [move, setMove] = useState(false);

  const duration = 1.5;

  const minusVariants = {
    checked: {
      scale: 1,
    },
    unchecked: {
      scale: 0,
    },
  };

  const plusVariants = {
    checked: {
      scale: 0,
    },
    unchecked: {
      scale: 1,
    },
  };
  const scaleMinus = useMotionValue(move ? 1 : 0);
  const scalePlus = useMotionValue(move ? 0 : 1);
  const pathLengthMinus = useTransform(scaleMinus, [1, 1], [0, 1]);
  const pathLengthPlus = useTransform(scalePlus, [1, 1], [0, 1]);

  useEffect(() => {
    scaleMinus.set(move ? 1 : 0);
    scalePlus.set(move ? 0 : 1);
  }, [move, scaleMinus, scalePlus]);

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-8">
      <h1 className="text-2xl">User Page!</h1>
      <div className="flex h-full w-full flex-col justify-between sm:flex-row">
        <UserForm />
        <div className="flex h-72 w-full flex-col gap-3 rounded-md border-2 p-4 sm:w-2/5">
          <div className="flex justify-end">
            <Button onClick={() => setMove(!move)}>Btn</Button>
          </div>
          <PlusMinusBtn />
          <div className="flex h-full w-full items-center justify-center">
            <motion.div
              animate={move ? "checked" : "unchecked"}
              onClick={() => setMove(!move)}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <motion.path
                  id="minus"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  transition={{ duration }}
                  variants={minusVariants}
                  custom={move}
                  style={{
                    pathLength: pathLengthMinus,
                    // scale: scaleMinus,
                    rotate: pathLengthMinus,
                  }}
                />
                <motion.path
                  id="plus"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  transition={{ duration }}
                  variants={plusVariants}
                  custom={move}
                  style={{
                    pathLength: pathLengthPlus,
                    // scale: scalePlus,
                    rotate: pathLengthPlus,
                  }}
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full rounded bg-black py-40 dark:bg-white" />
    </div>
  );
}
