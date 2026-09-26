import type { Education, Experience } from '../types'

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className="timeline">
      {items.map((e) => (
        <li key={`${e.company}-${e.start}`} className="timeline__item">
          <div className="timeline__head">
            <h3>{e.company}</h3>
            <span className="meta">
              {e.start} – {e.end}
            </span>
          </div>
          <div className="timeline__sub">
            <em>{e.role}</em>
            <span className="meta">{e.location}</span>
          </div>
          <ul className="points">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}

export function EducationList({ items }: { items: Education[] }) {
  return (
    <ol className="timeline">
      {items.map((e) => (
        <li key={e.school} className="timeline__item">
          <div className="timeline__head">
            <h3>{e.school}</h3>
            <span className="meta">
              {e.start} – {e.end}
            </span>
          </div>
          <div className="timeline__sub">
            <em>{e.degree}</em>
          </div>
          {e.note && <p className="note">{e.note}</p>}
        </li>
      ))}
    </ol>
  )
}
