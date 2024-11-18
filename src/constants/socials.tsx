import { cn } from "@/lib/utils";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter";
import { cva } from "class-variance-authority";
import Link from "next/link";

const iconVariants = cva(
  "p-1 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500",
  {
    variants: {
      size: {
        sm: "size-5",
        md: "size-6",
        lg: "size-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const Instagram = ({ classname }: { classname?: string }) => {
  return (
    <Link href="https://instagram.com/akshay_yelle" className={iconVariants()}>
      <SiInstagram className={cn("h-5 w-5", classname)} />
    </Link>
  );
};

export const Github = ({ classname }: { classname?: string }) => {
  return (
    <Link href="https://github.com/axai-kaizoku" className={iconVariants()}>
      <SiGithub className={cn("h-5 w-5", classname)} />
    </Link>
  );
};

export const LinkedIn = ({ classname }: { classname?: string }) => {
  return (
    <Link
      href="https://www.linkedin.com/in/akshay-yelle/"
      className={iconVariants()}
    >
      <SiLinkedin className={cn("h-5 w-5", classname)} />
    </Link>
  );
};

export const Twitter = ({ classname }: { classname?: string }) => {
  return (
    <Link href="https://x.com/akshay_yelle" className={iconVariants()}>
      <SiTwitter className={cn("h-5 w-5", classname)} />
    </Link>
  );
};
