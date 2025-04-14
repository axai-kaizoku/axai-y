"use client"
import dynamic from "next/dynamic"
import { ResumeSecxSkeleton } from "./resume-section"

const DynamicResumeSection = dynamic(
  () => import("./resume-section").then((mod) => mod.default),
  { ssr: false, loading: () => <ResumeSecxSkeleton /> }
)

export default function ResumeSectionWrapper() {
  return <DynamicResumeSection />
}
