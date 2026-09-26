import { MapPin } from 'lucide-react'
import type { Profile } from '../types'
import { SocialIcon } from './SocialIcon'

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('')
}

export function Header({ profile }: { profile: Profile }) {
  return (
    <header className="hero reveal">
      <div className="hero__text">
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__bio">{profile.bio}</p>

        <ul className="hero__links">
          <li>
            <MapPin size={13} strokeWidth={1.6} aria-hidden />
            {profile.location}
          </li>
          {profile.socials.map((s) => (
            <li key={s.kind}>
              <a href={s.href} target={s.kind === 'email' ? undefined : '_blank'} rel="noreferrer">
                <SocialIcon kind={s.kind} />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__photo">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} />
        ) : (
          <span aria-label="Photo placeholder">{initials(profile.name)}</span>
        )}
      </div>
    </header>
  )
}
