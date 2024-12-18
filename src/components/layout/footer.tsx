import { Github, Instagram, LinkedIn, Twitter } from "@/constants/socials"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="flex flex-col-reverse md:flex-row  w-full items-center justify-between p-4 sm:px-10 sm:py-5">
      <p className="font-extralight text-slate-600 text-center text-pretty md:text-left dark:text-slate-400/60">
        &copy; {year} Akshay Yelle, All rights reserved.
      </p>
      <ul className="flex items-center gap-4">
        <li>
          <Instagram />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <LinkedIn />
        </li>
        <li>
          <Github />
        </li>
      </ul>
    </footer>
  )
}
