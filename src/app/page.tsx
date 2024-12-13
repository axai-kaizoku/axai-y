"use client"

import ScrollDown from "@/components/layout/scroll-down"
import ResumeSectionWrapper from "./_components/resume-section-wrapper"
import { Star } from "@/components/star-icon"
import { BackgroundWithAnim } from "@/components/layout/background-with-anim"
import { TypingEffect } from "./_components/typing-effect"
import { Beam, GridBeam } from "@/components/ui/grid-beam"

export default function Home() {
  const classNames = [
    "h-40 w-40  top-32 left-[22rem] absolute rotate-90",
    "h-40 w-40 top-96 -left-80 absolute ",
    "hidden",
    "h-40 w-40  -bottom-80 left-[44rem] absolute -rotate-180",
    "h-40 w-40  top-96 -left-40 absolute rotate-180",
    "h-20 w-40  top-32 -left-60 absolute rotate-180 transform -scale-x-100 ",
    "h-40 w-40  bottom-10 -right-48 absolute transform -scale-x-100",
    "hidden",
    "h-40 w-40  top-80 left-96 absolute transform -scale-x-100 -scale-y-100",
    "h-32 w-10  -top-60 -left-60 absolute transform rotate-180",
    "h-32 w-10  -bottom-60 -left-80 absolute transform -scale-x-100",
    "h-2 w-2  -bottom-80 -left-96 absolute -rotate-90",
    "hidden",
    "h-40 w-40  bottom-36 -left-16 absolute rotate-90 transform -scale-y-100",
    "h-20 w-40  bottom-24 -right-96 absolute ",
    "h-40 w-40  bottom-0 -right-56 absolute",
  ]

  const aroundNameSide = [
    "h-40 w-40  bottom-10 -right-48 absolute transform -scale-x-100",
    "h-40 w-20  -bottom-20 -right-32 absolute transform -scale-y-100 -scale-x-100",
    "h-40 w-24  -left-32 -top-20 absolute",
    "h-40 w-32  -left-36 top-10  absolute transform -scale-y-100",
  ]

  const aroundNameTop = [
    "h-40 w-40  bottom-36 -left-16 absolute rotate-90 transform -scale-y-100",
    "h-40 w-40  top-20 -left-16 absolute rotate-90 transform -scale-x-100 -scale-y-100",
    "h-40 w-40  bottom-36 left-96 absolute rotate-90",
    "h-40 w-40  top-20 left-96 absolute rotate-90 transform -scale-x-100",
  ]

  return (
    <>
      <BackgroundWithAnim>
        <section className="relative flex h-[calc(100vh-100px)] justify-center items-center w-full flex-col">
          <div className="relative flex flex-col items-center justify-center -translate-y-[120px] md:-translate-y-[120px]">
            {/* <GridBeam /> */}
            {aroundNameSide.map((v) => (
              <Beam
                key={v}
                className={v}
                delay={0}
                duration={1.8}
                repeatDelay={0}
              />
            ))}
            {aroundNameTop.map((v) => (
              <Beam
                key={v}
                className={v}
                delay={0}
                duration={1.8}
                repeatDelay={0}
              />
            ))}

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
