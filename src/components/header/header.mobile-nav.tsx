"use client";

import { cn } from "@/lib/utils";
import { ToggleTheme } from "../darkmode-icon";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav({ classname }: { classname?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileMenu classname={open ? "block" : "hidden"} />
      {/* <MobileMenu /> */}
      <nav className={cn("", classname)}>
        <div className="flex items-center gap-3">
          <ToggleTheme />
          <Link
            href="https://github.com/axai-kaizoku"
            className="rounded p-1 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <SiGithub className="h-5 w-5" />
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="z-[1000000]">
          {open ? "Close" : "Open"}
        </button>
      </nav>
    </>
  );
}

const MobileMenu = ({ classname }: { classname?: string }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 h-screen w-full bg-slate-400 bg-opacity-90 lg:hidden",
        classname,
      )}
    ></div>
  );
};
