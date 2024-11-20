import ScrollDown from "@/components/layout/scroll-down"
import { isProd } from "@/lib/utils"
import Image from "next/image"
import Reveal from "./_components/reveal"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* section 1 */}
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

      {/* section 2 */}
      <section className="mb-10">
        <h2 id="currently_cooking" className="mb-4 pt-10 text-3xl font-bold">
          currently cooking 🧑🏻‍🍳
        </h2>
        <ul className="list-disc pl-5">
          <li>Asset Management ( SaaS )</li>
          <li>React Native</li>
          <li>Framer motion</li>
        </ul>
        <hr className="my-10 dark:border-neutral-700" />
      </section>
      {/* section 3 */}
      <section id="resume-area" className="mb-20">
        <h2 className="mb-10 text-3xl font-bold">Resume Area 📝</h2>
        <Reveal>
          <h2 className="mb-4 text-2xl font-bold">Skills</h2>
          <h3 className="w-fit bg-amber-100 font-bold dark:bg-amber-900">
            Programming Languages_
          </h3>
          <p>JavaScript/TypeScript, Python and Java</p>
          <h3 className="w-fit bg-amber-100 dark:bg-amber-900 font-bold">
            Technologies_
          </h3>

          <p>
            HTML, CSS, SQL, MongoDB, VS-Code, Git, Github and all operating
            systems
          </p>
          <h3 className="w-fit bg-amber-100 font-bold dark:bg-amber-900">
            Frameworks_
          </h3>
          <p>
            React, Next.js, Express, Zod, Auth.js, TailwindCSS, Saas, Drizzle
          </p>
        </Reveal>

        <Reveal>
          <hr className="my-10 dark:border-neutral-700" />
          <h2 className="font-bold text-2xl mb-4">Work & Experience</h2>
          <h3 className="w-fit bg-fuchsia-100 font-bold dark:bg-fuchsia-900">
            Work_
          </h3>
          <p className="mb-1">
            see{" "}
            <Link className="text-fuchsia-900 underline" href="/changelog">
              changelog
            </Link>
          </p>
          <h3 className="w-fit bg-fuchsia-100 font-bold dark:bg-fuchsia-900">
            Strength_
          </h3>
          <p className="mb-1">Fullstack CRUD Applications in Next.js, MERN</p>

          <h3 className="w-fit bg-fuchsia-100 font-bold dark:bg-fuchsia-900">
            Else_
          </h3>
          <p className="mb-1">
            Shell scripting (bash, zsh), algorithms and data structures
          </p>
        </Reveal>
        {/* 0b986b */}
        <Reveal>
          <hr className="my-10 dark:border-neutral-700" />
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Implemented
            </span>{" "}
            <br />
            10+ study projects from small ones like simple crud applications to
            a whole buy and sell application with auth, payments
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Engineered
            </span>{" "}
            <br />
            my own website ( tried many designs )
          </p>
          <p className="mb-1">
            <span className="w-fit bg-emerald-100 font-bold dark:bg-emerald-900">
              Coded
            </span>{" "}
            <br />
            PingPanda, a SaaS insights provider, delivering messages to your
            discord dm
          </p>
        </Reveal>
        <Reveal>
          <hr className="my-10 dark:border-neutral-700" />
          <h2 className="mb-4 text-2xl font-bold">Else</h2>
          <h3 className="w-fit bg-blue-100 font-bold dark:bg-blue-900">
            Languages_
          </h3>
          <p className="mb-1">
            Telugu (native), English (fluent), Hindi (fluent)
          </p>
          <h3 className="w-fit bg-blue-100 font-bold dark:bg-blue-900">
            since 2022_{" "}
          </h3>
          <p className="mb-1">
            Studied Full Stack Developer course from upGrad and gained some
            pretty good knowledge, by making projects
          </p>
          <h3 className="w-fit bg-blue-100 font-bold dark:bg-blue-900">
            2024_{" "}
          </h3>
          <p className="mb-1">Working as a Frontend Developer in a startup</p>
        </Reveal>

        {/* Projects and Else */}
      </section>

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
