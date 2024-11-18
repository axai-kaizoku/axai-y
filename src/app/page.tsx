import CodeEditor from "@/components/code/code-editor";
import ScrollDown from "@/components/layout/scroll-down";
import { Button } from "@/components/ui/button";
import { sampleCode } from "@/constants";

export default async function Home() {
  return (
    <div className="flex h-[200vh] w-full flex-col gap-8">
      {/* First Container */}
      <div className="flex h-fit w-full flex-col justify-between lg:h-[30%] lg:flex-row">
        <div className="flex w-full flex-col gap-2 lg:w-[60%]">
          <span className="font-semibold">Welcome to my site.</span>
          <h1 className="text-6xl font-black tracking-tighter">
            I&apos;m Akshay Yelle, a Fullstack developer
            <span className="font-mono">.</span>
          </h1>
          <ul className="flex items-center gap-3">
            <li>Nextjs</li>
            <li>Nodejs</li>
            <li>React</li>
            <li>Tailwind</li>
          </ul>
          <p>
            I love writing code, basically Typescript. I love to get my hands on
            making good ui and giving a good user-experience.
          </p>
          <p>
            I am always keen to learn and explore new technologies, frameworks
            and programming languages. Currently I&apos;m learning
            framer-motion.
          </p>
          <div className="flex gap-4">
            <Button>Let&apos;s work</Button>
            <Button>Resume</Button>
          </div>
        </div>
        <div className="flex h-full w-full items-end justify-between pt-32 lg:w-[45%]">
          <CodeEditor code={sampleCode} language="typescript" />
        </div>

        <ScrollDown />
      </div>
      <div className="hidden lg:h-32" />
      {/* Second Container */}
      <div className="flex h-fit w-full flex-col lg:h-[30%]" id="about">
        <div className="h-24" />
        <div className="h-60 w-full bg-blue-300"></div>
      </div>
      {/* Third Contaniner */}
      <div className="mix flex h-fit w-full flex-col lg:h-[30%]" id="portfolio">
        <div className="h-24" />
        <div className="h-60 w-full bg-muted"></div>
      </div>
    </div>
  );
}
