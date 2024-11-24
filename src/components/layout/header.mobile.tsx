"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useCallback } from "react"

export default function MobileNav({
  showNav,
  setShowNav,
}: {
  showNav: boolean
  setShowNav: (value: ((prevstate: boolean) => boolean) | boolean) => void
}) {
  const toggleNav = useCallback(() => {
    setShowNav((current) => !current)
  }, [setShowNav])

  return (
    <>
      <button
        className={cn(
          "relative z-[10000] mr-3 block h-6 w-7 px-2 md:hidden",
          "focus:outline-none"
        )}
        onClick={toggleNav}
      >
        {/* Main Burger Line */}
        <div
          className={cn(
            "absolute h-[1.7px] w-full bg-slate-700",
            "transition-all duration-200 ease-in-out",
            "top-[50%] -translate-y-1/2 transform",
            showNav ? "bg-transparent" : "bg-slate-700 dark:bg-slate-100"
          )}
        >
          {/* Top line (Before) */}
          <div
            className={cn(
              "absolute bottom-[calc(100%/6)] left-0 h-[1.7px] w-[64%] bg-slate-700 dark:bg-slate-100",
              "rounded-e rounded-bl transition-all duration-200 ease-in-out",
              showNav
                ? "bottom-0 left-[calc(24px/7)] -rotate-45 bg-slate-700 dark:bg-slate-100"
                : "bottom-[calc(24px/3)] left-0"
            )}
          />
          {/* Bottom line (After) */}
          <div
            className={cn(
              "absolute right-0 top-[calc(100%/6)] h-[1.7px] w-[64%] bg-slate-700 dark:bg-slate-100",
              "transition-all duration-200 ease-in-out",
              showNav
                ? "right-[calc(20px/3)] top-0 rotate-45 bg-slate-700 dark:bg-slate-100"
                : "right-0 top-[calc(24px/3)]"
            )}
          />
        </div>
      </button>
      <div className="lg:hidden">
        <div
          className={`fixed inset-0 -z-50 grid grid-cols-[1rem_repeat(16,minmax(0,1fr))_1rem]`}
        >
          {[...new Array<number>(18)].map((_, index) => {
            return (
              <div
                className={cn(
                  "pointer-events-none relative h-screen -translate-y-full select-none bg-neutral-100 transition-all duration-300 ease-linear dark:bg-neutral-800",
                  index === 0 &&
                    "relative before:absolute before:right-0 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] before:bg-[length:1px_8px] before:opacity-20",
                  index === 17 &&
                    "relative before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] before:bg-[length:1px_8px] before:opacity-20"
                )}
                style={{
                  transitionDelay: showNav
                    ? `${index * 0.01}s`
                    : `${index * 0.025}s`,
                  "--tw-translate-y": showNav ? "0%" : "-100%",
                }}
                key={`${index}-mobile-nav`}
              />
            )
          })}
        </div>
        <div
          className={cn(
            "fixed left-0 top-0 h-screen w-full",
            showNav
              ? "shadow-md backdrop-blur-3xl"
              : "pointer-events-none select-none opacity-0"
          )}
        >
          <div className="pointer-events-none h-40 select-none transition print:hidden" />

          <div className="mt-32 flex flex-col text-lg justify-center opacity-100 transition-opacity delay-300 ease-in-out items-center gap-4">
            <Link href="/changelog" onClick={() => setShowNav(false)}>
              Changelog
            </Link>
            <Link href="/blog" onClick={() => setShowNav(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setShowNav(false)}>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
