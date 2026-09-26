import type { SkillGroup } from '../types'

export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <dl className="skills">
      {groups.map((g) => (
        <div key={g.label} className="skills__row">
          <dt>{g.label}</dt>
          <dd>
            {g.items.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  )
}
