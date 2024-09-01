"use client";

import { cn } from "@/lib/utils";
import { useCallback } from "react";

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
      <button onClick={toggleNav} className="z-[1000000] lg:hidden">
        open
      </button>
      <div className="lg:hidden">
        <div
          className={cn(
            "fixed left-0 top-0 h-screen w-full",
            showNav
              ? "bg-violet-500 bg-opacity-90 shadow-md backdrop-blur-3xl"
              : "delay-[900ms] pointer-events-none select-none opacity-0",
          )}
        >
          heoo
        </div>
      </div>
    </>
  );
}
