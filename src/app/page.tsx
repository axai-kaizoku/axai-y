import ScrollDown from "@/components/layout/scroll-down"
import ResumeSectionWrapper from "./_components/resume-section-wrapper"
import { Star } from "@/components/star-icon"
import { BackgroundWithAnim } from "@/components/layout/background-with-anim"
import { TypingEffect } from "./_components/typing-effect"

export default function Home() {
  return (
    <>
      <BackgroundWithAnim>
        <section className="flex h-[calc(100vh-100px)] justify-center items-center w-full flex-col">
          <div className="relative flex flex-col items-center justify-center -translate-y-[120px] md:-translate-y-[120px]">
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
