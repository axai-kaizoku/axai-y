import ScrollDown from "@/components/layout/scroll-down"
import { isProd } from "@/lib/utils"
import Image from "next/image"
import ResumeSectionWrapper from "./_components/resume-section-wrapper"

export default function Home() {
  return (
    <>
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
          <Image
            className="pointer-events-none h-[200px] w-[200px] select-none dark:brightness-200 lg:h-[300px] lg:w-[300px]"
            width={200}
            height={200}
            src={isProd() ? "/axai-y/star.svg" : "/star.svg"}
            alt="star"
          />
        </div>
      </section>

      <ResumeSectionWrapper />
      {/* scroll btn */}
      <ScrollDown />
    </>
  )
}

const TypingEffect = () => {
  return (
    <h1 className="text-center font-montserrat text-4xl font-bold tracking-[-0.02em] drop-shadow- lg:text-6xl xl:mb-4 2xl:text-8xl">
      AKSHAY YELLE
    </h1>
  )
}
