export default async function Home() {
  return (
    <div className="flex h-[200vh] w-full flex-col gap-8">
      {/* First Container */}
      <div className="relative flex w-full flex-col justify-between md:flex-row">
        <div className="absolute z-0 flex h-full w-full items-end justify-center backdrop-blur-md">
          <div className="h-40 w-40 rounded-3xl bg-slate-400"></div>
        </div>
        <div className="z-10 flex w-full flex-col gap-2 md:w-[60%]">
          <span className="font-semibold">Welcome to my site.</span>
          <h1 className="text-6xl font-black tracking-tighter">
            {`I'm Akshay Yelle, a Fullstack developer.`}
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
            <button>{`Let's work`}</button>
            <button>Resume</button>
          </div>
        </div>
        <div className="z-10 flex w-full items-end justify-end md:w-[37%]">
          <div className="flex h-full w-full items-center justify-center border">
            Code`
          </div>
        </div>
      </div>
      <div>Photos + About</div>
      <div>Portfolio</div>
    </div>
  );
}
