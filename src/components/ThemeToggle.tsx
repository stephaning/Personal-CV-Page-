import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'dark' | 'light'

function readStored(): Theme {
  try {
    const t = localStorage.getItem('theme')
    if (t === 'dark' || t === 'light') return t
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readStored)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  return (
    <button
      className="icon-btn"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? <Sun size={15} strokeWidth={1.6} /> : <Moon size={15} strokeWidth={1.6} />}
    </button>
  )
}
