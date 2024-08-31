import { cn } from "@/lib/utils";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter";
import Link from "next/link";

export const Instagram = ({ classname }: { classname?: string }) => {
  return (
    <Link href="https://instagram.com/akshay_yelle">
      <SiInstagram className={cn(classname)} />
    </Link>
  );
};
export const Github = ({ classname }: { classname?: string }) => {
  return (
    <Link href="https://github.com/axai-kaizoku">
      <SiGithub className={cn(classname)} />;
    </Link>
  );
};
export const LinkedIn = ({ classname }: { classname?: string }) => {
  return <SiLinkedin className={cn(classname)} />;
};
export const Twitter = ({ classname }: { classname?: string }) => {
  return <SiTwitter className={cn(classname)} />;
};
