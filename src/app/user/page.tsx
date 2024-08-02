"use client";

import { Button } from "@/components/ui/button";
import UserForm from "../_components/UserForm";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function UserPage() {
  const [move, setMove] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const svgVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  };
  const pathVariants = {
    hidden: {
      opacity: 1,
      pathLength: 0,
    },
    visible: {
      opacity: 1,

      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-8">
      <h1 className="text-2xl">User Page!</h1>
      <div className="flex h-full w-full flex-col justify-between sm:flex-row">
        <UserForm />
        {/* {JSON.stringify(theme)} */}
        <div className="flex h-72 w-full flex-col gap-3 rounded-md border-2 p-4 sm:w-2/5">
          <div className="flex justify-end">
            <Button onClick={() => setMove(!move)}>Btn</Button>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <motion.svg
              variants={svgVariants}
              animate={move ? "visible" : "hidden"}
              initial="hidden"
              width="330"
              height="250"
              viewBox="0 0 330 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_5_2)">
                {/* <motion.path
                  d="M82.0495 322.36 83.976C314.437 99.238 282.754 152.095 278.824 161.864ZM278.824 161.864C278.756 162.034 278.785 162.221 278.892 162.42C280.666 165.711 280.731 165.081 278.824 161.864V161.864ZM7.19027 90.4958C-1.30979 118.996 278.69 226.995 103.69 237.996C-71.3098 248.996 181 119.996 195 90.4961C209 60.996 0.614456 -11.8479 109 4.99617C217.386 21.8403 15.6903 61.9959 7.19027 90.4958Z"
                  stroke="black"
                  stroke-width="5"
                  variants={pathVariants}
                  transition={{ duration: 1 }}
                /> */}
                <motion.path
                  d="M278.824 161.864C273.684 153.197 238.061 97.5851 229.31 81.0043C220.515 64.341 224.576 51.9629 239.507 50.2161C241.94 49.9315 244.321 50.9055 246.157 52.5265C254.148 59.5791 261.985 66.2864 268.051 71.4181C273.486 76.0156 282.105 73.6091 285.535 67.3709C288.486 62.0009 292.596 55.8504 298.027 50.4986C300.04 48.5143 302.954 47.6105 305.638 48.4975C318.314 52.6868 320.558 66.3704 323.059 77.7473C323.526 79.8673 323.36 82.0495 322.36 83.976C314.437 99.238 282.754 152.095 278.824 161.864ZM278.824 161.864C278.756 162.034 278.785 162.221 278.892 162.42C280.666 165.711 280.731 165.081 278.824 161.864V161.864ZM7.19027 90.4958C-1.30979 118.996 278.69 226.995 103.69 237.996C-71.3098 248.996 181 119.996 195 90.4961C209 60.996 0.614456 -11.8479 109 4.99617C217.386 21.8403 15.6903 61.9959 7.19027 90.4958Z"
                  stroke={isDark ? "white" : "black"}
                  stroke-width="5"
                  variants={pathVariants}
                  transition={{ duration: 1 }}
                />
              </g>
            </motion.svg>

            {/* <motion.div
              custom={move}
              animate={{
                x: 0,
                backgroundColor: "#eee",
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 1)",
                position: "fixed",
                transitionEnd: {
                  display: "none",
                },
              }}
              className="h-20 w-20 border"
            /> */}
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full rounded bg-black py-40 dark:bg-white" />
    </div>
  );
}
