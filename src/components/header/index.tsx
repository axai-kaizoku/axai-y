import Link from "next/link";
import DesktopNav from "./header.desktop-nav";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-center border-b border-gray-800/10 bg-white/50 backdrop-blur dark:border-gray-100/10 dark:bg-gray-900/40">
        <div className="flex w-[93%] items-center justify-between py-6 md:w-[80%] lg:w-[70%]">
          <Link href="/">
            <div className="text-lg font-thin sm:text-xl lg:text-2xl">
              axai-y
            </div>
          </Link>
          <DesktopNav classname="hidden lg:flex" />
        </div>
      </header>
      <div className="pointer-events-none h-40 w-full" />
    </>
  );
};

export default Header;
