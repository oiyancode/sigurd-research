import { useMemo } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { useTheme } from './theme/ThemeProvider'
import Dashboard from './pages/Dashboard'
import Documentos from './pages/Documentos'
import Configuracoes from './pages/Configuracoes'

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ThemeToggle() {
  const { mode, setMode } = useTheme()
  const options = useMemo(
    () =>
      [
        { value: 'light', label: 'Claro' },
        { value: 'dark', label: 'Escuro' },
      ] as const,
    [],
  )

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-toggle-bg p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setMode(opt.value)}
          className={[
            'px-3 py-1 text-xs font-medium transition',
            'rounded-full',
            opt.value === mode
              ? 'bg-toggle-active-bg text-toggle-active-text shadow-sm'
              : 'text-muted hover:text-text',
          ].join(' ')}
          aria-pressed={opt.value === mode}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-[980px] px-6 py-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-frame shadow-[var(--shadow)]">
          <header className="flex items-center justify-between gap-6 border-b border-border bg-header px-6 py-3.5">
            <div className="flex items-center gap-8">
              <NavLink to="/" className="select-none font-display text-[18px] font-semibold tracking-[0.08em]">
                SIG<span className="text-brand">URD</span>
              </NavLink>
              <nav className="hidden items-center gap-6 md:flex">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `text-sm font-medium ${isActive ? 'text-nav-active' : 'text-nav hover:text-nav-active'}`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/documentos"
                  className={({ isActive }) =>
                    `text-sm ${isActive ? 'text-nav-active font-medium' : 'text-nav hover:text-nav-active'}`
                  }
                >
                  Documentos
                </NavLink>
                <NavLink
                  to="/configuracoes"
                  className={({ isActive }) =>
                    `text-sm ${isActive ? 'text-nav-active font-medium' : 'text-nav hover:text-nav-active'}`
                  }
                >
                  Configurações
                </NavLink>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-badge-bg px-3 py-1 text-xs font-medium text-badge-fg">
                <IconCheck className="h-4 w-4" />
                Drive conectado
              </span>
              <ThemeToggle />
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}