import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/darkmode-icon";
import { Container } from "./page";

export const metadata: Metadata = {
  title: "Axai Y",
  description: "I love Typescript!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Header = () => {
  return (
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
          {/* <ModeToggle /> */}
          <ToggleTheme />
          <Button>Github</Button>
          <Button>{`Let's Work`}</Button>
        </div>
      </div>
    </header>
  );
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
            <Container>{children}</Container>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
