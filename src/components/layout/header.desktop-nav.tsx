"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const path = usePathname();

  return (
    <div className="hidden flex-wrap gap-4 md:flex">
      <div
        aria-label="Desktop Navigation"
        className="flex items-center gap-0 md:gap-2"
      >
        <div className="px-4 text-4xl/3 font-thin">|</div>
        <Link
          className={cn(
            "flex w-fit items-center justify-center p-1 transition-all hover:font-normal md:w-16",
            path === "/resume" ? "font-normal" : "font-extralight",
          )}
          href={"/resume"}
        >
          resume
        </Link>
        <Link
          className={cn(
            "flex w-fit items-center justify-center p-1 transition-all hover:font-normal md:w-10 md:p-4",
            path === "/blog" ? "font-normal" : "font-extralight",
          )}
          href={"/blog"}
        >
          blog
        </Link>
      </div>
    </div>
  );
}
