import { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-block text-xs font-semibold text-primary tracking-[0.15em] uppercase">
      {children}
    </span>
  )
}

