"use client"
import Link from "next/link"
import { ToggleTheme } from "../darkmode-icon"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import MobileNav from "./header.mobile"

export default function Header() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <header className="flex fixed z-10 top-0 justify-between items-center w-full p-5 sm:p-6 backdrop-blur-sm">
        <nav className="flex items-center">
          <Link
            href="/"
            className="ring-1 z-20 dark:ring-slate-100 ring-slate-800 rounded-full size-10 sm:size-12 mr-1 sm:mr-6 items-center flex justify-center"
          >
            /
          </Link>
          <Link
            href="/changelog"
            className={cn(buttonVariants({ variant: "link" }), "max-sm:hidden")}
          >
            changelog
          </Link>
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "link" }), "max-sm:hidden")}
          >
            blog
          </Link>
        </nav>
        <div className="flex items-center gap-0 sm:gap-0.5">
          <ToggleTheme
            className={cn(buttonVariants({ variant: "link" }), "z-20")}
          />
          <div className={cn("sm:hidden block")}>
            <MobileNav showNav={showNav} setShowNav={setShowNav} />
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "link" }), "max-sm:hidden")}
          >
            get in touch
          </Link>
        </div>
      </header>
      <div className="h-24 pointer-events-none" />
    </>
  )
}
