import { Github, Instagram, LinkedIn, Twitter } from "@/constants/socials";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full items-center justify-center py-10">
      <div className="flex w-[93%] flex-col-reverse items-center justify-between md:w-[80%] md:flex-row lg:w-[70%]">
        <span className="font-extralight text-slate-500">
          &copy; {year} Akshay Yelle, All rights reserved.
        </span>
        <ul className="flex gap-4">
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
      </div>
    </footer>
  );
};
