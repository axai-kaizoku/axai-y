import { cn } from "@/lib/utils";
import { ToggleTheme } from "../darkmode-icon";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from "@/constants/socials";

export default function DesktopNav({ classname }: { classname?: string }) {
  return (
    <div className={cn("flex items-center justify-between", classname)}>
      <ul className="flex w-[45%] justify-end gap-8">
        <li>About</li>
        <li>Portfolio</li>
        <li>Books</li>
        <li>Resume</li>
      </ul>
      <div className="flex items-center gap-3">
        <ToggleTheme />
        <Link href="https://github.com/axai-kaizoku" className="rounded p-2">
          <Github classname="h-5 w-5" />
        </Link>
        <Button>{`Let's Work`}</Button>
      </div>
    </div>
  );
}
