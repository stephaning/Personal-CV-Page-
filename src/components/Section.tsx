import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface SectionProps {
  title: string
  more?: { label: string; href: string }
  children: ReactNode
}

export function Section({ title, more, children }: SectionProps) {
  return (
    <section className="section reveal">
      <h2 className="section__title">{title}</h2>
      {children}
      {more && (
        <a className="section__more" href={more.href} target="_blank" rel="noreferrer">
          {more.label}
          <ArrowUpRight size={12} strokeWidth={1.6} aria-hidden />
        </a>
      )}
    </section>
  )
}
