"use client"
import { useEffect, useState } from "react"

export const TypingEffect = () => {
  const text = "AKSHAY YELLE"
  const [displayedText, setDisplayedText] = useState("")
  const [i, setI] = useState(0)

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i))
        setI(i + 1)
      } else {
        clearInterval(typingEffect)
      }
    }, 250)

    return () => {
      clearInterval(typingEffect)
    }
  }, [i])

  return (
    <h1 className="text-center font-montserrat text-4xl font-bold tracking-[-0.02em] drop-shadow- lg:text-6xl xl:mb-4 2xl:text-8xl">
      {displayedText ? displayedText : <>&nbsp;</>}
    </h1>
  )
}
