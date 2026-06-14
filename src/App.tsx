import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { useTheme } from './theme/ThemeProvider'

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

function IconFile({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V8l-6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 13h8M8 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconDrive({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 3.5h7.6L22 13.7l-3.8 6.8H5.8L2 13.7 8.2 3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.2 5.5L3.9 14.7h6.9l5.3-9.2H9.2z" fill="currentColor" opacity="0.12" />
    </svg>
  )
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 11V8a5 5 0 0110 0v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 11h12v9a2 2 0 01-2 2H8a2 2 0 01-2-2v-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconUpload({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 14V3m0 0l-4 4m4-4l4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 14v4a3 3 0 003 3h10a3 3 0 003-3v-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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

function Card({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-icon-bg text-icon-fg">
        {icon}
      </div>
      <div className="text-sm font-semibold tracking-tight text-text">{title}</div>
      <div className="mt-1 text-xs leading-5 text-muted">{description}</div>
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
              <div className="select-none font-display text-[18px] font-semibold tracking-[0.08em]">
                SIG<span className="text-brand">URD</span>
              </div>
              <nav className="hidden items-center gap-6 md:flex">
                <a className="text-sm font-medium text-nav-active" href="#">
                  Dashboard
                </a>
                <a className="text-sm text-nav hover:text-nav-active" href="#">
                  Documentos
                </a>
                <a className="text-sm text-nav hover:text-nav-active" href="#">
                  Configurações
                </a>
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

          <main className="px-6 py-7">
            <div className="text-xs font-semibold tracking-[0.14em] text-accent">SISTEMA DE GESTÃO</div>
            <h1 className="mt-2 max-w-[460px] font-display text-[34px] font-semibold leading-[1.18] tracking-tight">
              Digitalizar e
              <br />
              organizar é simples.
            </h1>
            <p className="mt-3 max-w-[420px] text-sm leading-6 text-muted">
              Envie um documento, a IA extrai os dados e salva direto no seu Google Drive.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-lg bg-btn-primary-bg px-5 py-2.5 text-sm font-semibold text-btn-primary-fg shadow-sm"
              >
                Enviar documento
              </button>
              <button
                type="button"
                className="rounded-lg border border-btn-secondary-border bg-transparent px-5 py-2.5 text-sm font-medium text-btn-secondary-fg"
              >
                Ver arquivos
              </button>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <Card
                icon={<IconFile className="h-4 w-4" />}
                title="OCR Inteligente"
                description="Lê caligrafia difícil com precisão."
              />
              <Card icon={<IconDrive className="h-4 w-4" />} title="Seu Drive" description="Dados vão direto à sua conta." />
              <Card icon={<IconLock className="h-4 w-4" />} title="Privacidade total" description="Nenhum dado fica em nossos servidores." />
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-upload-border bg-upload-bg px-6 py-8 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-upload-icon-bg text-upload-icon-fg">
                <IconUpload className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm text-muted">
                Arraste o arquivo ou <span className="font-semibold text-accent">clique para selecionar</span>
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['PDF', 'JPG', 'PNG', 'TIFF'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-tag-bg px-3 py-1 text-[11px] font-medium text-tag-fg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div>
                <div className="text-xs font-semibold text-label">Ano do documento</div>
                <input
                  className="mt-2 w-full rounded-lg border border-input-border bg-input-bg px-3 py-2.5 text-sm text-text placeholder:text-placeholder"
                  placeholder="2024"
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-label">Tipo</div>
                <input
                  className="mt-2 w-full rounded-lg border border-input-border bg-input-bg px-3 py-2.5 text-sm text-text placeholder:text-placeholder"
                  placeholder="Lista de presença"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
