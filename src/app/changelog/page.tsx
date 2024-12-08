import Image from "next/image"
import { Timeline } from "./_components/timeline"
import Link from "next/link"

export default function Changelog() {
  const data = [
    {
      title: "currently",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200">
            working on a turf booking app
          </p>
          <p className="text-pretty">
            so, this app called Turf Booking, it&apos;s an event booking system,
            where you can book a turf near to your current location. Features
            are owners can monitor their data like revenue, and also notify user
            about, offers or update the status of turf like &apos;Slots
            Full&apos;, &apos;Under Maintainence&apos;. The main challenges are
            managing turf&apos;s slots in realtime, payments, realtime
            notifications to end users and turf owners. This is a collabrative
            project, we are going to use latest tech, any collabs will be
            accepted. And lastly this app is in very early stage.{" "}
          </p>
        </div>
      ),
    },
    {
      title: "2024 - last",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200">
            since 2024_ Edify, working as a frontend developer, currently on a
            SaaS product called DeviceFlow, where companies can manage their
            teams, people and assets like laptops, monitors, etc. with Next.js
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/device-flow.png"
              alt="Device Flow by Edify"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

            <Image
              src="/edify.png"
              alt="Edify"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 - first",
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-200">
            intern at Cynohub, an edu-tech company as a React.js mentor and
            after that joined as an intern at Edify, built a landing page{" "}
            <Link
              href="https://edify.club"
              target="_blank"
              className="underline p-0 m-0 w-fit  font-bold"
            >
              edify.club
            </Link>{" "}
            with good performance, trackers, seo and optimization
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/cynohub3.png"
              alt="Cynohub"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/edify-landing.png"
              alt="Edify landing page"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2023",
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-200">
            completed my last semester at Malla Reddy College and improved my
            skills working on projects and also took a course from upGrad
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/college.jpeg"
              alt="Malla Reddy College"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/petcart.png"
              alt="Project I've made"
              width={500}
              height={500}
              className="aspect-video w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-200">
            2022 to 2024_
          </p>
          <p>figuring out things in my college. Learned python, html and css</p>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}
