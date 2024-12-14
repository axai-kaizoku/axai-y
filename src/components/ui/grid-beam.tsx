"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const GridBeam = () => {
  const beams = [
    {
      className:
        "h-40 w-40 top-20 left-20 sm:top-32 sm:left-[22rem] absolute rotate-0 sm:rotate-90",
      duration: 1.8,
    },
    {
      className:
        "h-40 w-40 top-0 left-0 sm:top-96 sm:-left-80 absolute max-sm:translate max-sm:-scale-y-100",
      duration: 1.8,
    },
    { className: "hidden", duration: 1.8 },
    {
      className:
        "h-40 w-40 bottom-32 left-0 sm:-bottom-80 sm:left-[44rem] absolute -rotate-180",
      duration: 1.8,
    },
    {
      className:
        "h-40 w-40 top-16 -left-28 sm:top-96 sm:-left-40 absolute rotate-90 sm:rotate-180",
      duration: 1.8,
    },
    {
      className:
        "h-20 w-40 top-10 left-32 sm:top-32 sm:-left-60 absolute rotate-180 transform -scale-x-100 ",
      duration: 1.8,
    },
    {
      className:
        "h-40 w-40 bottom-10 right-0 sm:bottom-10 sm:-right-48 absolute transform -scale-x-100",
      duration: 1.8,
    },
    { className: "hidden", duration: 1.8 },
    {
      className:
        "h-40 w-40 top-80 left-0 sm:top-80 sm:left-96 absolute transform -scale-x-100 -scale-y-100",
      duration: 1.8,
    },
    {
      className:
        "h-32 w-10 top-0 left-0 sm:-top-60 sm:-left-60 absolute transform rotate-180",
      duration: 1.8,
    },
    {
      className:
        "h-32 w-10 bottom-0 left-0 sm:-bottom-60 sm:-left-80 absolute transform -scale-x-100",
      duration: 1.8,
    },
    {
      className:
        "h-2 w-2 bottom-0 -left-10 sm:-bottom-80 sm:-left-96 absolute -rotate-90",
      duration: 1.8,
    },
    { className: "hidden", duration: 1.8 },
    {
      className:
        "h-40 w-40 bottom-0 -left-10 sm:bottom-36 sm:-left-16 absolute rotate-90 transform -scale-y-100",
      duration: 1.8,
    },
    {
      className:
        "h-20 w-40 bottom-20 right-0 sm:bottom-24 sm:-right-96 absolute ",
      duration: 1.8,
    },
    {
      className:
        "h-40 w-40 bottom-0 -left-10 sm:bottom-0 sm:-right-56 absolute",
      duration: 1.8,
    },
  ] as const

  const lateBeams = [
    {
      className:
        "h-40 w-40 top-20 left-20 sm:top-32 sm:left-[22rem] absolute rotate-0 sm:rotate-90",
      duration: 2.8,
    },
    {
      className:
        "h-40 w-40 top-0 left-0 sm:top-96 sm:-left-80 absolute max-sm:translate max-sm:-scale-y-100",
      duration: 2.8,
    },
    { className: "hidden", duration: 2.8 },
    {
      className:
        "h-40 w-40 bottom-32 left-0 sm:-bottom-80 sm:left-[44rem] absolute -rotate-180",
      duration: 2.8,
    },
    {
      className:
        "h-40 w-40 top-16 -left-28 sm:top-96 sm:-left-40 absolute rotate-90 sm:rotate-180",
      duration: 2.8,
    },
    {
      className:
        "h-20 w-40 top-10 left-32 sm:top-32 sm:-left-60 absolute rotate-180 transform -scale-x-100 ",
      duration: 2.8,
    },
    {
      className:
        "h-40 w-40 bottom-10 right-0 sm:bottom-10 sm:-right-48 absolute transform -scale-x-100",
      duration: 2.8,
    },
    { className: "hidden", duration: 2.8 },
    {
      className:
        "h-40 w-40 top-80 left-0 sm:top-80 sm:left-96 absolute transform -scale-x-100 -scale-y-100",
      duration: 2.8,
    },
    {
      className:
        "h-32 w-10 top-0 left-0 sm:-top-60 sm:-left-60 absolute transform rotate-180",
      duration: 2.8,
    },
    {
      className:
        "h-32 w-10 bottom-0 left-0 sm:-bottom-60 sm:-left-80 absolute transform -scale-x-100",
      duration: 2.8,
    },
    {
      className:
        "h-2 w-2 bottom-0 -left-10 sm:-bottom-80 sm:-left-96 absolute -rotate-90",
      duration: 2.8,
    },
    { className: "hidden", duration: 2.8 },
    {
      className:
        "h-40 w-40 bottom-0 -left-10 sm:bottom-36 sm:-left-16 absolute rotate-90 transform -scale-y-100",
      duration: 2.8,
    },
    {
      className:
        "h-20 w-40 bottom-20 right-0 sm:bottom-24 sm:-right-96 absolute ",
      duration: 2.8,
    },
    {
      className:
        "h-40 w-40 bottom-0 -left-10 sm:bottom-0 sm:-right-56 absolute",
      duration: 2.8,
    },
  ] as const

  const aroundNameSide = [
    "h-40 w-24  -left-32 -top-20 absolute",
    "h-40 w-40  bottom-10 -right-48 absolute transform -scale-x-100",
    "h-40 w-20  -bottom-20 -right-32 absolute transform -scale-y-100 -scale-x-100",
    "h-40 w-32  -left-36 top-10  absolute transform -scale-y-100",
  ] as const

  const aroundNameTop = [
    "h-40 w-40  bottom-36 -left-16 absolute rotate-90 transform -scale-y-100",
    "h-40 w-40  top-20 -left-16 absolute rotate-90 transform -scale-x-100 -scale-y-100",
    "h-40 w-40  bottom-36 left-96 absolute rotate-90",
    "h-40 w-40  top-20 left-96 absolute rotate-90 transform -scale-x-100",
  ] as const

  const [randNum, setRandNum] = useState<number[]>([2, 3, 4])
  const [secNum, setSecNum] = useState<number[]>([0])

  useEffect(() => {
    const generateRandomNumbers = () => {
      const length = Math.floor(Math.random() * 3) + 1 // Ensures 1 to 3 elements
      const numbers = Array.from({ length }, () =>
        Math.floor(Math.random() * 17)
      ) // Random values between 1 and 16
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
      {randNum[0] ? (
        <Beam
          className={beams[randNum[0]]?.className}
          duration={beams[randNum[0]]?.duration}
        />
      ) : null}

      {randNum.length === 2 && randNum[1] ? (
        <Beam
          className={beams[randNum[1]]?.className}
          duration={beams[randNum[1]]?.duration}
        />
      ) : null}
      {secNum[0] ? (
        <Beam
          className={lateBeams[secNum[0]]?.className}
          duration={lateBeams[secNum[0]]?.duration}
        />
      ) : null}
      {/* <Beam className={beams[15].className} duration={1.8} /> */}
    </>
  )
}

type BeamOptions = {
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
              delay: 0,
              repeatDelay: 0,
            }}
          >
            {/* <stop stopColor="#18CCFC" stopOpacity="0" />
            <stop stopColor="#18CCFC" /> */}
            {/* <stop stopColor="#18FB91" stopOpacity="0" />
            <stop stopColor="#18FB91" /> */}
            <stop stopColor="#18d6fb" stopOpacity="0" />
            <stop stopColor="#18d6fb" />

            {/* <stop offset="0.325" stopColor="#6344F5" /> */}
            <stop offset="0.325" stopColor="#65f542" />
            <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            {/* <stop offset="1" stopColor="#34D399" stopOpacity="0" /> */}
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}
