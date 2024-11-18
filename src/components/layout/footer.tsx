import { Github, Instagram, LinkedIn, Twitter } from "@/constants/socials";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full items-center justify-between p-5 sm:px-10 sm:py-5">
      <span className="font-extralight text-slate-600 dark:text-slate-400/60">
        &copy; {year} Akshay Yelle, All rights reserved.
      </span>
      <ul className="flex items-center gap-4">
        <li>
          <Instagram />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <LinkedIn />
        </li>
        <li>
          <Github />
        </li>
      </ul>
    </footer>
  );
};
