"use client"
import dynamic from "next/dynamic"

const DynamicResumeSection = dynamic(
  () => import("./resume-section").then((mod) => mod.default),
  { ssr: false }
)

export default function ResumeSectionWrapper() {
  return <DynamicResumeSection />
}
