import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="flex h-[200vh] w-full flex-col gap-8">
      {/* First Container */}
      <div className="flex h-fit w-full flex-col justify-between lg:h-[30%] lg:flex-row">
        {/* <div className="z-0 flex h-full w-full items-end justify-evenly">
          <div className="h-20 w-20"></div>
          <div className="mb-0 shadow-[-60px_-4px_400px_60px] shadow-[#1cefa9] h-20 w-20 rounded-3xl bg-slate-400"></div>
        </div> */}
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
            {`I love writing code, basically Typescript. I love to get my hands on
            making good ui and giving a good user-experience.`}
          </p>
          <p>
            {`I am always keen to learn and explore new technologies, frameworks
            and programming languages. Currently I'm learning framer-motion.`}
          </p>
          <div className="flex gap-4">
            <Button>{`Let's work`}</Button>
            <Button>Resume</Button>
          </div>
        </div>
        <div className="flex h-full w-full items-end justify-end pt-32 lg:w-[37%]">
          <div className="flex h-80 w-full items-center justify-center rounded-lg bg-zinc-800 text-white transition-all duration-300 dark:bg-zinc-200 dark:text-black">
            Code`
          </div>
        </div>
      </div>
      <div className="hidden lg:h-20" />
      {/* Second Container */}
      <div className="flex h-fit w-full flex-col lg:h-[30%]" id="about">
        <div className="h-24" />
        <div className="h-60 w-full bg-blue-300"></div>
      </div>
      {/* Third Contaniner */}
      <div className="flex h-fit w-full flex-col lg:h-[30%]" id="portfolio">
        <div className="h-24" />
        <div className="h-60 w-full bg-muted"></div>
      </div>
    </div>
  );
}
