import { useRef, useState } from 'react'
import { X } from 'lucide-react'
import type { Project, ProjectImage } from '../types'

export function Projects({ items }: { items: Project[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState<ProjectImage | null>(null)

  const open = (img: ProjectImage) => {
    setActive(img)
    dialogRef.current?.showModal()
  }

  return (
    <>
      <div className="projects">
        {items.map((p) => (
          <article key={p.title} className="project">
            <div className="project__head">
              <h3>{p.title}</h3>
              <span className="meta">{p.kind}</span>
            </div>
            <p className="project__tools">{p.tools.join(' · ')}</p>
            <p className="project__desc">{p.description}</p>

            {/* flex-grow = aspect ratio, so every tile ends up the same height without cropping */}
            <div className="gallery">
              {p.images.map((img) => (
                <figure key={img.src} style={{ flexGrow: img.width / img.height }}>
                  <button onClick={() => open(img)} aria-label={`View ${img.alt}`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                    />
                  </button>
                  <figcaption>{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={() => dialogRef.current?.close()}
        onClose={() => setActive(null)}
      >
        {active && (
          <>
            <img src={active.src} alt={active.alt} />
            <button className="icon-btn lightbox__close" aria-label="Close">
              <X size={15} strokeWidth={1.6} />
            </button>
          </>
        )}
      </dialog>
    </>
  )
}
