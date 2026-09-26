import { Globe, Mail } from 'lucide-react'
import { siGithub } from 'simple-icons'
import type { SocialKind } from '../types'

function Brand({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" width={12} height={12} fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  )
}

export function SocialIcon({ kind }: { kind: SocialKind }) {
  switch (kind) {
    case 'email':
      return <Mail size={13} strokeWidth={1.6} aria-hidden />
    case 'github':
      return <Brand path={siGithub.path} />
    case 'website':
      return <Globe size={13} strokeWidth={1.6} aria-hidden />
  }
}
