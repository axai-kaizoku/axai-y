"use client";

import { HEADER } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCallback } from "react";
import { Container } from "./container";

export default function MobileNav({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: (value: ((prevstate: boolean) => boolean) | boolean) => void;
}) {
  const toggleNav = useCallback(() => {
    setShowNav((current) => !current);
  }, [setShowNav]);

  return (
    <>
      <button
        className={cn(
          "relative z-[10000000000] mr-3 block h-6 w-7 px-3 md:hidden",
          "focus:outline-none",
        )}
        onClick={toggleNav}
      >
        {/* Main Burger Line */}
        <div
          className={cn(
            "absolute h-[1.7px] w-full bg-gray-400",
            "transition-all duration-200 ease-in-out",
            "top-[50%] -translate-y-1/2 transform",
            showNav ? "bg-transparent" : "bg-gray-500 dark:bg-gray-400",
          )}
        >
          {/* Top line (Before) */}
          <div
            className={cn(
              "absolute bottom-[calc(100%/6)] left-0 h-[1.7px] w-[64%] bg-gray-500 dark:bg-gray-400",
              "rounded-e rounded-bl transition-all duration-200 ease-in-out",
              showNav
                ? "bottom-0 left-[calc(24px/7)] -rotate-45 bg-gray-500 dark:bg-gray-300"
                : "bottom-[calc(24px/3)] left-0",
            )}
          />
          {/* Bottom line (After) */}
          <div
            className={cn(
              "absolute right-0 top-[calc(100%/6)] h-[1.7px] w-[64%] bg-gray-500 dark:bg-gray-400",
              "transition-all duration-200 ease-in-out",
              showNav
                ? "right-[calc(20px/3)] top-0 rotate-45 bg-gray-500 dark:bg-gray-300"
                : "right-0 top-[calc(24px/3)]",
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
                  "pointer-events-none relative h-screen -translate-y-full select-none bg-slate-200 transition-all duration-300 ease-linear dark:bg-gray-800",
                  index === 0 &&
                    "relative before:absolute before:right-0 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] before:bg-[length:1px_8px] before:opacity-20",
                  index === 17 &&
                    "relative before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] before:bg-[length:1px_8px] before:opacity-20",
                )}
                style={{
                  transitionDelay: showNav
                    ? `${index * 0.01}s`
                    : `${index * 0.025}s`,
                  "--tw-translate-y": showNav ? "0%" : "-100%",
                }}
                key={`${index}-mobile-nav`}
              />
            );
          })}
        </div>
        <div
          className={cn(
            "fixed left-0 top-0 h-screen w-full",
            showNav
              ? "shadow-md backdrop-blur-3xl"
              : "pointer-events-none select-none opacity-0",
          )}
        >
          <div className="pointer-events-none h-40 select-none transition print:hidden" />
          <Container className="-mt-80 flex flex-col gap-3">
            {HEADER.nav.map((navItem, index) => (
              <Link
                href={navItem.href}
                className="group flex animate-appearance-in items-baseline justify-between py-2 text-gray-800 opacity-100 transition-opacity delay-300 ease-in-out dark:text-gray-300"
                key={`nav-${index}`}
                onClick={() => setShowNav(false)}
              >
                {navItem.title}
              </Link>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
}
