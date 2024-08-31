import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";

import { Container } from "./page";
import Header from "@/components/header";
import { Github, Instagram, LinkedIn, Twitter } from "@/constants/socials";

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

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center py-10">
      <div className="flex w-[93%] justify-between md:w-[80%] lg:w-[70%]">
        <span className="font-extralight">&copy; All rights reserved.</span>
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
