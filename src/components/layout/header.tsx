"use client";

import Link from "next/link";
import { useState } from "react";
import DesktopNav from "./header.desktop-nav";
import ProfileNav from "./header.settings";
import MobileNav from "./header.mobile-nav";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 flex w-full items-center justify-center border-b border-gray-800/10 bg-white/50 backdrop-blur-sm dark:border-gray-100/10 dark:bg-gray-900/40">
        <div className="flex w-[93%] items-center justify-between py-6 md:w-[80%] lg:w-[70%]">
          <Link
            className="z-[100000000] text-lg font-thin sm:text-xl lg:text-2xl"
            href="/"
          >
            axai-y
          </Link>
          <DesktopNav />
          <div className="z-[1000000] flex items-center">
            <ProfileNav />
            <MobileNav showNav={showNav} setShowNav={setShowNav} />
          </div>
        </div>
      </header>
      <div className="pointer-events-none h-40 select-none transition print:hidden" />
    </>
  );
};
