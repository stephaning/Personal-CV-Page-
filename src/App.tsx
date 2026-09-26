import { Printer } from 'lucide-react'
import { cv } from './data/cv'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { EducationList, ExperienceList } from './components/Timeline'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { ThemeToggle } from './components/ThemeToggle'

export default function App() {
  return (
    <>
      <nav className="toolbar">
        <ThemeToggle />
        <button className="icon-btn" onClick={() => window.print()} aria-label="Print or save as PDF">
          <Printer size={15} strokeWidth={1.6} />
        </button>
      </nav>

      <main className="page">
        <Header profile={cv.profile} />

        <Section title="Work Experience">
          <ExperienceList items={cv.experience} />
        </Section>

        <Section title="Selected Work">
          <Projects items={cv.projects} />
        </Section>

        <Section title="Skills">
          <Skills groups={cv.skills} />
        </Section>

        <Section title="Education">
          <EducationList items={cv.education} />
        </Section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {cv.profile.name}</span>
        </footer>
      </main>
    </>
  )
}
