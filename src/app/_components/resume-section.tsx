import Link from "next/link"
import Reveal from "./reveal"

export default function ResumeSection() {
  return (
    <>
      <section className="mb-10">
        <h2 id="currently_cooking" className="mb-4 pt-10 text-3xl font-bold">
          currently cooking 🧑🏻‍🍳
        </h2>
        <ul className="list-disc pl-5">
          <li>Turf Booking app</li>
          <li>Device Flow ( SaaS )</li>
          <li>Framer motion</li>
        </ul>
        <hr className="my-10 dark:border-neutral-700" />
      </section>

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
      </section>
    </>
  )
}
