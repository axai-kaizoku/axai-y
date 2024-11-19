import Link from "next/link"
import { ToggleTheme } from "../darkmode-icon"
import { buttonVariants } from "../ui/button"

export default function Header() {
  return (
    <>
      <header className="flex fixed z-10 top-0 justify-between items-center w-full p-5 sm:p-6 backdrop-blur-sm">
        <nav className="flex items-center gap-x-3">
          <Link
            href="/"
            className="ring-1 dark:ring-slate-100 ring-slate-800 rounded-full size-10 sm:size-12 mr-2.5 sm:mr-6 items-center flex justify-center"
          >
            /
          </Link>
          <Link
            href="/changelog"
            className={buttonVariants({ variant: "link" })}
          >
            changelog
          </Link>
          <Link href="/blog" className={buttonVariants({ variant: "link" })}>
            blog
          </Link>
        </nav>
        <div className="flex items-center gap-0 sm:gap-0.5">
          <ToggleTheme />
          <Link href="/contact" className={buttonVariants({ variant: "link" })}>
            get in touch
          </Link>
        </div>
      </header>
      <div className="h-24 pointer-events-none" />
    </>
  )
}
