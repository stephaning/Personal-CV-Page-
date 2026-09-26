export type SocialKind = 'email' | 'github' | 'website'

export interface Social {
  kind: SocialKind
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  bio: string
  location: string
  photo?: string
  socials: Social[]
}

export interface Experience {
  company: string
  role: string
  start: string
  end: string
  location: string
  points: string[]
}

export interface ProjectImage {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export interface Project {
  title: string
  kind: string
  tools: string[]
  description: string
  images: ProjectImage[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Education {
  school: string
  degree: string
  start: string
  end: string
  note?: string
}

export interface CV {
  profile: Profile
  experience: Experience[]
  projects: Project[]
  skills: SkillGroup[]
  education: Education[]
}
