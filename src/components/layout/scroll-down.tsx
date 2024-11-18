"use client"

import { useEffect } from "react"
import { ChevronDown } from "lucide-react"

const ScrollDown = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      const scrollDown = document.getElementById("scrollDownButton")
      if (scrollDown) {
        scrollDown.style.opacity = scroll > 100 ? "0" : "1"
      }
    }

    document.addEventListener("scroll", handleScroll)

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <a
      aria-label="scroll down button"
      id="scrollDownButton"
      href="#about"
      className="transition-all"
    >
      <div className="absolute bottom-6 right-6 rounded-full bg-neutral-800 p-3 sm:p-4 transition-all hover:bg-neutral-700">
        <ChevronDown className="text-white size-4 sm:size-6" />
      </div>
    </a>
  )
}

export default ScrollDown
