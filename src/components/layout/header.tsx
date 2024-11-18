import Link from "next/link";
import { ToggleTheme } from "../darkmode-icon";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <>
      <header className="flex fixed z-10 top-0 justify-between items-center w-full p-5 sm:p-6 backdrop-blur-sm">
        <nav className="flex items-center gap-x-3">
          <Link
            href="/"
            className="ring-1 dark:ring-slate-50 ring-slate-800 rounded-full size-12 mr-6 items-center flex justify-center"
          >
            /
          </Link>
          <Link href="/changelog">changelog</Link>
          <Link href="/blog">blog</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ToggleTheme />
          <Button>get in touch</Button>
        </div>
      </header>
      <div className="h-24 pointer-events-none" />
    </>
  );
}
