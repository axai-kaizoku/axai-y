import type { LucideProps } from "lucide-react"

export const Star = (props: LucideProps) => {
  return (
    <svg version="1.1" viewBox="727.27 451.05 772.73 1279.72" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ssstar-grad">
          <stop stopColor="#10b981" stopOpacity="1" offset="0%" />
          <stop stopColor="#047857" stopOpacity="1" offset="100%" />
        </linearGradient>
      </defs>
      <g>
        <g fill="url(#ssstar-grad)" id="star">
          <path
            d="M 818.1818181818185 451.04895104895104 C 1000 1000 1000 1000 1500 500 C 1000 1000 1000 1000 1223.776223776224 1730.769230769231 C 1000 1000 1000 1000 727.2727272727275 1272.727272727273 C 1000 1000 1000 1000 818.1818181818185 451.04895104895104"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all cursor-pointer hover:dark:brightness-200 hover:brightness-75"
          />
        </g>
      </g>
    </svg>
  )
}
