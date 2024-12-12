"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const GridBeam: React.FC<{
  // children?: React.ReactNode
  className?: string
  beamOptions?: BeamOptions
}> = ({ className, beamOptions }) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Beam
        delay={beamOptions?.delay}
        duration={beamOptions?.duration}
        repeatDelay={beamOptions?.repeatDelay}
      />
      {/* {children} */}
    </div>
  )
}

export type BeamOptions = {
  repeatDelay?: number
  delay?: number
  duration?: number
  className?: string
}

export const Beam = (beamOption: BeamOptions) => {
  const gradId = beamOption.className
    ? `grad-${[...beamOption.className].reduce((sum, char) => sum + char.charCodeAt(0), 0)}`
    : "grad-default"
  return (
    <div className={cn(beamOption.className)}>
      <svg
        width="156"
        height="63"
        viewBox="0 0 156 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 ml-24 mt-8"
      >
        <path
          d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
          stroke={`url(#${gradId})`}
          strokeWidth={1.5}
        />
        <defs>
          <motion.linearGradient
            id={gradId}
            variants={{
              initial: {
                x1: "40%",
                x2: "50%",
                y1: "160%",
                y2: "180%",
              },
              animate: {
                x1: "0%",
                x2: "10%",
                y1: "-40%",
                y2: "-20%",
              },
            }}
            animate="animate"
            initial="initial"
            transition={{
              duration: beamOption.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: beamOption.delay,
              repeatDelay: beamOption.repeatDelay,
            }}
          >
            <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#18CCFC" />
            <stop offset="0.325" stopColor="#6344F5" />
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}
