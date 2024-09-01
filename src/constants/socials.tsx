import { cn } from "@/lib/utils";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter";
import Link from "next/link";

export const Instagram = ({ classname }: { classname?: string }) => {
  return (
    <Link
      href="https://instagram.com/akshay_yelle"
      className="p-1 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500"
    >
      <SiInstagram className={cn(classname)} />
    </Link>
  );
};

export const Github = ({ classname }: { classname?: string }) => {
  return (
    <Link
      href="https://github.com/axai-kaizoku"
      className="p-1 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500"
    >
      <SiGithub className={cn(classname)} />
    </Link>
  );
};

export const LinkedIn = ({ classname }: { classname?: string }) => {
  return (
    <Link
      href="https://www.linkedin.com/in/akshay-yelle/"
      className="p-1 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500"
    >
      <SiLinkedin className={cn(classname)} />
    </Link>
  );
};

export const Twitter = ({ classname }: { classname?: string }) => {
  return (
    <Link
      href="https://x.com/akshay_yelle"
      className="p-1 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500"
    >
      <SiTwitter className={cn(classname)} />
    </Link>
  );
};
