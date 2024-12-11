"use client"

import ScrollDown from "@/components/layout/scroll-down"
import ResumeSectionWrapper from "./_components/resume-section-wrapper"
import { Star } from "@/components/star-icon"
import { BackgroundWithAnim } from "@/components/layout/background-with-anim"
import { TypingEffect } from "./_components/typing-effect"
import { GridBeam } from "@/components/ui/grid-beam"
import { useCallback, useEffect, useState } from "react"

export default function Home() {
  return (
    <>
      {/* <DemoComponent time={2000} /> */}
      <BackgroundWithAnim>
        <section className="relative flex h-[calc(100vh-100px)] justify-center items-center w-full flex-col">
          <div className="relative flex flex-col items-center justify-center -translate-y-[120px] md:-translate-y-[120px]">
            {/* <GridBeam className={customClassNames[currentClassIndex]} />
            <GridBeam className={customClassNames[second]} /> */}
            {/* <DemoComponent time={2500} repeatDelay={4} /> */}
            {/* <DemoComponent time={2000} />
            <DemoComponent time={2000} repeatDelay={4} />
            <DemoComponent time={2000} repeatDelay={8} /> */}
            {/* <DemoComponent time={2000} /> */}

            {/* <GridBeam
              className={"h-32 w-10 border -bottom-60 -left-80 absolute"}
            /> */}

            <RandomArrayRenderer />
            <TypingEffect />
            <p className="mb-4 text-sm sm:text-base md:text-xl 2xl:text-3xl">
              Full Stack Dev.
            </p>
            <div className="pointer-events-none absolute left-[70%] top-[20%] h-20 w-20 rounded-full bg-white opacity-80 blur-2xl dark:bg-background lg:left-[60%] lg:top-[30%] lg:size-60 2xl:left-[73%] 2xl:top-[40%] 2xl:size-80" />
            <div className="pointer-events-none 2xl:-left-[14%] absolute left-[-20%] top-[-40%] h-20 w-20 rounded-full bg-white opacity-80 blur-2xl dark:bg-background lg:left-[-15%] lg:top-[-105%] lg:size-40 2xl:-top-[120%] 2xl:size-60" />
          </div>
          <div className="absolute translate-y-[100px] md:translate-y-[150px]">
            <Star className="h-[200px] w-[200px] select-none  lg:h-[300px] lg:w-[300px]" />
          </div>
        </section>
      </BackgroundWithAnim>
      <ResumeSectionWrapper />
      {/* scroll btn */}
      <ScrollDown />
    </>
  )
}

const DemoComponent = ({
  time = 2000,
  repeatDelay = 2,
}: {
  time?: number
  repeatDelay?: number
}) => {
  const customClassNames = [
    "h-40 w-40  top-32 left-80 absolute",
    "h-40 w-40  top-96 -left-80 absolute",
    "hidden",
    "h-40 w-40  -bottom-80 left-[44rem] absolute rotate-90",
    "h-40 w-40  top-96 -left-40 absolute rotate-180",
    "h-20 w-40  top-32 left-24 absolute -rotate-180",
    "h-40 w-40  bottom-14 right-0 absolute",
    "hidden",
    "h-40 w-40  top-80 left-56 absolute",
    "h-32 w-10  -top-40 -left-60 absolute",
    "h-32 w-10  -bottom-60 -left-80 absolute",
    "h-2 w-2  -bottom-80 -left-96 absolute -rotate-90",
    "hidden",
    "h-40 w-40  bottom-40 left-0 absolute rotate-90",
    "h-80 w-80  bottom-24 -right-60 absolute rotate-180",
    "h-40 w-40  bottom-0 -right-56 absolute",
  ] as const

  const customRepeatType: Array<"loop" | "reverse"> = ["loop", "reverse"]

  const customEase: Array<"easeIn" | "easeOut" | "linear"> = [
    "easeIn",
    "easeOut",
    "linear",
  ]

  const [classIndex, setClassIndex] = useState(0)
  const [repeatIndex, setRepeatIndex] = useState(0)
  const [easeIndex, setEaseIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomIndex = useCallback((excludeIndex: number, length: number) => {
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * length)
    } while (randomIndex === excludeIndex)
    return randomIndex
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true) // Start animation
      setTimeout(() => {
        setClassIndex((prevIndex) =>
          getRandomIndex(prevIndex, customClassNames.length)
        )
        setRepeatIndex((prevIndex) =>
          getRandomIndex(prevIndex, customRepeatType.length)
        )
        setEaseIndex((prevIndex) =>
          getRandomIndex(prevIndex, customEase.length)
        )
        setIsAnimating(false) // Allow animation to complete
      }, time) // Synchronize with the animation duration
    }, time)

    return () => clearInterval(interval)
  }, [
    time,
    customClassNames.length,
    customEase.length,
    customRepeatType.length,
    getRandomIndex,
  ])

  console.log(classIndex)

  if (isAnimating) return <></>

  return (
    <GridBeam
      repeatDelay={repeatDelay}
      className={customClassNames[classIndex]}
      ease={customEase[easeIndex]}
      repeatType={customRepeatType[repeatIndex]}
    />
  )
}

const RandomArrayRenderer = () => {
  const [arrayLength, setArrayLength] = useState(1)

  useEffect(() => {
    const interval = setInterval(
      () => {
        // Generate a random number between 1 and 6
        const randomLength = Math.floor(Math.random() * 6) + 1
        setArrayLength(randomLength)
      },
      Math.random() * 1000 + 2000
    ) // Random interval between 2-3 seconds

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])

  return (
    <div>
      {Array(arrayLength)
        .fill(null)
        .map((_, i) => (
          <DemoComponent key={i} />
        ))}
    </div>
  )
}
