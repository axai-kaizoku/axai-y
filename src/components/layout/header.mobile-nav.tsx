"use client";

import { Container } from "@/app/page";
import { HEADER } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
      <button onClick={toggleNav} className="z-[1000000] px-2 lg:hidden">
        {showNav ? "close" : "open"}
      </button>
      <div className="lg:hidden">
        <div
          className={cn(
            "fixed left-0 top-0 h-screen w-full",
            showNav
              ? "bg-violet-500 bg-opacity-90 shadow-md backdrop-blur-3xl"
              : "pointer-events-none select-none opacity-0",
          )}
        >
          <div className="pointer-events-none h-40 select-none transition print:hidden" />
          {/* Main mobile nav content */}
          <Container className="-mt-80 flex flex-col gap-3">
            {HEADER.nav.map((v, i) => (
              <Link href={v.href} className="text-xl" key={`nav-${i}`}>
                {v.title}
              </Link>
            ))}
          </Container>
        </div>
      </div>
    </>
  );
}
