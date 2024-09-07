import Link from "next/link";
import { ToggleTheme } from "../darkmode-icon";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { Button } from "../ui/button";

export default function ProfileNav() {
  return (
    <div className="z-[1000000] flex items-center gap-3">
      <ToggleTheme />
      <Link
        href="https://github.com/axai-kaizoku"
        className="rounded p-2 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-50"
      >
        <SiGithub className="h-5 w-5" />
      </Link>
      <Button className="hidden lg:flex">{`Let's Work`}</Button>
    </div>
  );
}
