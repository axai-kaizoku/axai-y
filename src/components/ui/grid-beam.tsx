"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const GridBeam = () => {
  const beams = [
    {
      className: "h-40 w-40 border top-32 left-80 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-40 w-40 border top-96 -left-80 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    { className: "hidden", repeatDelay: 0, delay: 0, duration: 2 },
    {
      className: "h-40 w-40 border -bottom-80 left-[44rem] absolute rotate-90",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-40 w-40 border top-96 -left-40 absolute rotate-180",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-20 w-40 border top-32 left-24 absolute -rotate-180",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-40 w-40 border bottom-14 right-0 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    { className: "hidden", repeatDelay: 0, delay: 0, duration: 2 },
    {
      className: "h-40 w-40 border top-80 left-56 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-32 w-10 border -top-40 -left-60 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-32 w-10 border -bottom-60 -left-80 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-2 w-2 border -bottom-80 -left-96 absolute -rotate-90",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    { className: "hidden", repeatDelay: 0, delay: 0, duration: 2 },
    {
      className: "h-40 w-40 border bottom-40 left-0 absolute rotate-90",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-80 w-80 border bottom-24 -right-60 absolute rotate-180",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
    {
      className: "h-40 w-40 border bottom-0 -right-56 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2,
    },
  ] as const

  const lateBeams = [
    {
      className: "h-40 w-40 border top-32 left-80 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-40 w-40 border top-96 -left-80 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    { className: "hidden", repeatDelay: 0, delay: 0, duration: 2.8 },
    {
      className: "h-40 w-40 border -bottom-80 left-[44rem] absolute rotate-90",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-40 w-40 border top-96 -left-40 absolute rotate-180",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-20 w-40 border top-32 left-24 absolute -rotate-180",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-40 w-40 border bottom-14 right-0 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    { className: "hidden", repeatDelay: 0, delay: 0, duration: 2.8 },
    {
      className: "h-40 w-40 border top-80 left-56 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-32 w-10 border -top-40 -left-60 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-32 w-10 border -bottom-60 -left-80 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-2 w-2 border -bottom-80 -left-96 absolute -rotate-90",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    { className: "hidden", repeatDelay: 0, delay: 0, duration: 2.8 },
    {
      className: "h-40 w-40 border bottom-40 left-0 absolute rotate-90",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-80 w-80 border bottom-24 -right-60 absolute rotate-180",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
    {
      className: "h-40 w-40 border bottom-0 -right-56 absolute",
      repeatDelay: 0,
      delay: 0,
      duration: 2.8,
    },
  ] as const

  const [randNum, setRandNum] = useState<number[]>([2, 3, 4])
  const [secNum, setSecNum] = useState<number[]>([0])

  // useEffect(() => {
  //   const generateRandomNumbers = () => {
  //     const numbers = Array.from({ length: 1 }, () =>
  //       Math.floor(Math.random() * 17)
  //     )
  //     setRandNum(numbers)
  //   }

  //   generateRandomNumbers() // Generate numbers initially
  //   const interval = setInterval(generateRandomNumbers, 2000) // Update every 2 seconds

  //   return () => clearInterval(interval) // Cleanup on unmount
  // }, [])

  useEffect(() => {
    const generateRandomNumbers = () => {
      const length = Math.floor(Math.random() * 3) + 1 // Ensures 1 to 3 elements
      const numbers = Array.from({ length }, () =>
        Math.floor(Math.random() * 17)
      ) // Random values between 1 and 3
      setRandNum(numbers)
    }

    generateRandomNumbers() // Generate numbers initially
    const interval = setInterval(generateRandomNumbers, 2000) // Update every 2 seconds

    return () => clearInterval(interval)
  }, []) // Runs only once on component mount

  useEffect(() => {
    const generateRandomNumbers = () => {
      const numbers = Array.from({ length: 1 }, () =>
        Math.floor(Math.random() * 17)
      )
      setSecNum(numbers)
    }

    generateRandomNumbers() // Generate numbers initially
    const interval = setInterval(generateRandomNumbers, 2800)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return (
    <>
      {/* {beams[randNum[0]]?.duration} */}

      <Beam
        className={beams[randNum[0]]?.className}
        delay={beams[randNum[0]]?.delay}
        duration={beams[randNum[0]]?.duration}
        repeatDelay={beams[randNum[0]]?.repeatDelay}
      />
      {randNum.length}
      {randNum.length === 2 && (
        <Beam
          className={beams[randNum[1]]?.className}
          delay={beams[randNum[1]]?.delay}
          duration={beams[randNum[1]]?.duration}
          repeatDelay={beams[randNum[1]]?.repeatDelay}
        />
      )}
      <Beam
        className={lateBeams[secNum[0]]?.className}
        delay={lateBeams[secNum[0]]?.delay}
        duration={lateBeams[secNum[0]]?.duration}
        repeatDelay={lateBeams[secNum[0]]?.repeatDelay}
      />

      {/* <Beam
        className={beams[randNum[1]]?.className}
        delay={beams[randNum[1]]?.delay}
        duration={beams[randNum[1]]?.duration}
        repeatDelay={beams[randNum[1]]?.repeatDelay}
      />
      <Beam
        className={beams[randNum[2]]?.className}
        delay={beams[randNum[2]]?.delay}
        duration={beams[randNum[2]]?.duration}
        repeatDelay={beams[randNum[2]]?.repeatDelay}
      /> */}
    </>
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
        className="absolute"
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
