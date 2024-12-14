import type { PropsWithChildren } from "react"
import { GridBeam } from "../ui/grid-beam"

export const BackgroundWithAnim = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* Example GridBeam usage */}
      {/* <div className="w-full h-[400px] dark:bg-grid-white/[0.02] bg-grid-black/[0.07]">
        <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-start justify-start">
          <div className="grid gap-2">
            <h1 className="sm:text-5xl text-4xl font-bold max-w-sm">
              Hero Section That Converts.
            </h1>
            <p className="text-neutral-500 max-w-lg">
              Beautiful beam which I btw reverse engineered from Aceternity
            </p>
          </div>
        </GridBeam>
      </div> */}

      <div className="max-sm:h-[calc(100vh-30vh)] h-[calc(100vh-100px)] dark:bg-grid-white/[0.02] bg-grid-black/[0.02] flex items-center w-full justify-center overflow-hidden">
        {/* <GridBeam className="flex items-start justify-start" /> */}
        {children}
        {/* <GridBeam className="top-20 left-80" />
        <GridBeam className="top-40 left-80 rotate-180" /> */}
      </div>
    </>
  )
}
