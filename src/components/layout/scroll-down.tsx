"use client"

import { useEffect, useState } from "react"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"

const ScrollDown = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY
      const scrollDown = document.getElementById("scrollDownButton")
      if (scrollDown) {
        scrollDown.style.opacity = scroll > 100 ? "0" : "1"
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (window) {
      setLoading(false)
      if (process.env.NODE_ENV !== "development") {
        console.log(
          "%cHeyy there! 👋🏻 I see you checking out my code. I'm Akshay, the creator of this site. It was built using Next.js, TypeScript, and TailwindCSS — a powerful stack! 💪🏻 Just remember, learn from this, don’t copy it. Have something to chat?? 02b3akshay@gmail.com 📧",
          "background: #6c8c48; color: #f8fafc; font-size: 22px; font-weight: bold; padding: 25px 10px; text-align: center; text-shadow: 2px 2px 0 rgba(45, 45, 45);"
        )
      }
    }
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <a
      aria-label="scroll down button"
      id="scrollDownButton"
      href="#currently_cooking"
      className="transition-all"
    >
      <div className="absolute bottom-8 right-8 sm:right-16 rounded-full bg-neutral-800 p-3 sm:p-4 transition-all hover:bg-neutral-700">
        <FaAngleDown className="text-white size-4 sm:size-5" />
      </div>
    </a>
  )
}

export default ScrollDown
