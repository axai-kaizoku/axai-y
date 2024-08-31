import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/darkmode-icon";
import { Container } from "./page";
import { Github, InstagramIcon, LinkedinIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Axai Y",
  description: "I love Typescript!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body>
        <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/spiral.js"
        ></script>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>
            <Header />
            <ScreenSize />
            <Container>{children}</Container>
            <Footer />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-center border-b border-gray-800/10 bg-white/50 backdrop-blur dark:border-gray-100/10 dark:bg-gray-900/40">
        <div className="flex w-[93%] items-center justify-between py-6 md:w-[80%] lg:w-[70%]">
          <div className="text-lg font-thin sm:text-xl lg:text-2xl">axai-y</div>
          <ul className="hidden w-[45%] justify-end gap-8 lg:flex">
            <li>About</li>
            <li>Portfolio</li>
            <li>Books</li>
            <li>Resume</li>
          </ul>
          <div className="flex gap-3">
            <ToggleTheme />
            <Button>Github</Button>
            <Button>{`Let's Work`}</Button>
          </div>
        </div>
      </header>
      <div className="pointer-events-none h-40 w-full" />
    </>
  );
};

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center py-10">
      <div className="flex w-[93%] justify-between md:w-[80%] lg:w-[70%]">
        <span className="font-extralight">&copy; All rights reserved.</span>
        <ul className="flex gap-4">
          <li>
            <InstagramIcon />
          </li>
          <li>
            <LinkedinIcon />
          </li>
          <li>
            <Github />
          </li>
        </ul>
      </div>
    </footer>
  );
};

const ScreenSize = () => {
  return (
    <div className="fixed bottom-4 right-4 z-[1000] flex h-12 w-12 items-center justify-center rounded-md border">
      <div className="block sm:hidden">sm</div>
      {/* Small screens (smaller than 640px) */}
      <div className="hidden sm:block md:hidden">md</div>
      {/* Medium screens (640px - 768px) */}
      <div className="hidden md:block lg:hidden">lg</div>
      {/* Large screens (768px - 1024px) */}
      <div className="hidden lg:block xl:hidden">xl</div>
      {/* Extra large screens (1024px - 1280px) */}
      <div className="hidden xl:block 2xl:hidden">2xl</div>
      {/* 2X large screens (1280px - 1536px) */}
      <div className="hidden 2xl:block">2xl+</div>
      {/* 2X large and above (1536px and up) */}
    </div>
  );
};
