import type { PropsWithChildren } from "react"

export const BackgroundWithAnim = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-[calc(100vh-100px)] bg-gradient-to-b bg-transparent relative flex items-center w-full justify-center overflow-hidden">
      {children}
    </div>
  )
}
