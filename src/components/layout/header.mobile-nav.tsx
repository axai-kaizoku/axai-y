// "use client";

// import { Container } from "@/app/page";
// import { HEADER } from "@/constants";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { useCallback } from "react";

// export default function MobileNav({
//   showNav,
//   setShowNav,
// }: {
//   showNav: boolean;
//   setShowNav: (value: ((prevstate: boolean) => boolean) | boolean) => void;
// }) {
//   const toggleNav = useCallback(() => {
//     setShowNav((current) => !current);
//   }, [setShowNav]);

//   return (
//     <>
//       <button onClick={toggleNav} className="z-[1000000] px-2 lg:hidden">
//         {showNav ? "close" : "open"}
//       </button>
//       <div className="lg:hidden">
//         <div
//           className={`fixed inset-0 -z-50 grid grid-cols-[1rem_repeat(16,minmax(0,1fr))_1rem]`}
//         >
//           {[...new Array<number>(18)].map((_, index) => {
//             return (
//               <div
//                 className={cn(
//                   "pointer-events-none relative h-screen -translate-y-full select-none bg-slate-300 transition-all duration-300 ease-linear dark:bg-slate-800",
//                   index === 0 &&
//                     "relative before:absolute before:right-0 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] before:bg-[length:1px_8px] before:opacity-20",
//                   index === 17 &&
//                     "relative before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] before:bg-[length:1px_8px] before:opacity-20",
//                 )}
//                 style={{
//                   transitionDelay: showNav
//                     ? `${index * 0.01}s`
//                     : `${index * 0.025}s`,
//                   "--tw-translate-y": showNav ? "0%" : "-100%",
//                 }}
//                 key={`${index}-mobile-nav`}
//               />
//             );
//           })}
//         </div>
//         <div
//           className={cn(
//             "fixed left-0 top-0 h-screen w-full",
//             showNav
//               ? "shadow-md backdrop-blur-3xl"
//               : "pointer-events-none select-none opacity-0",
//           )}
//         >
//           <div className="pointer-events-none h-40 select-none transition print:hidden" />
//           <Container className="-mt-80 flex flex-col gap-3">
//             {HEADER.nav.map((navItem, index) => (
//               <Link
//                 href={navItem.href}
//                 className="group flex animate-appearance-in items-baseline justify-between py-2 text-gray-800 opacity-100 transition-opacity delay-300 ease-in-out dark:text-gray-300"
//                 key={`nav-${index}`}
//                 onClick={() => setShowNav(false)}
//               >
//                 {navItem.title}
//               </Link>
//             ))}
//           </Container>
//         </div>
//       </div>
//     </>
//   );
// }

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
          "relative z-[10000000000] block h-6 w-7 px-3",
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
            showNav ? "bg-transparent" : "bg-gray-400 dark:bg-gray-400",
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
      <div className="overflow-hidden lg:hidden">
        {/* Background Div with the transition */}
        <div
          className={cn(
            "fixed left-0 top-0 h-screen w-full bg-slate-300 transition-transform duration-500 ease-in-out dark:bg-slate-800",
            showNav ? "translate-y-0" : "-translate-y-full",
          )}
        >
          {/* Empty spacer for the appearance */}
          {/* <div className="pointer-events-none h-40 select-none transition print:hidden" /> */}
          <Container className="flex flex-col items-center gap-6 px-6">
            {HEADER.nav.map((navItem, index) => (
              <Link
                href={navItem.href}
                className={cn(
                  "delay-[0.3s] group flex animate-appearance-in items-center justify-between py-3 text-lg text-gray-800 opacity-100 transition-transform duration-500 ease-in-out dark:text-gray-200",
                  showNav
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0",
                  `transition-delay-[${index * 0.1}s]`,
                )}
                key={`nav-${index}`}
                onClick={() => setShowNav(false)}
              >
                <span className="relative">
                  {navItem.title}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-slate-600 transition-all duration-300 group-hover:w-full dark:bg-slate-400"></span>
                </span>
              </Link>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
}
