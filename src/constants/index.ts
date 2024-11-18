export const HEADER = {
  nav: [
    // {
    //   href: "/#about",
    //   title: "About",
    //   desktop: true,
    // },
    // {
    //   href: "/#portfolio",
    //   title: "Portfolio",
    //   desktop: true,
    // },
    {
      href: "/blog",
      title: "Blog",
      desktop: true,
    },
    {
      href: "/resume",
      title: "Resume",
      desktop: true,
    },
  ],
};

export const sampleCode = `import type { FC } from "react";

type WelcomeProps = {
  uses:
    | "explore new tech"
    | "display my skills"
    | "find freelancing opportunities"
    | "find a fulltime job";
};

export const Welcome: FC<WelcomeProps> = ({ uses }) => {
  return (
    <>
      <h1>This is my little slice of the internet.</h1>
      <p>
        I use this site to <em>{uses}</em>.
      </p>
    </>
  );
};`;
