import {
  IconBrandGoogleDrive,
  IconFolder,
  IconFileText,
  IconAlertTriangle,
  IconDeviceFloppy,
} from '@tabler/icons-react'
import Toggle from '../components/Toggle'

function Section({
  icon,
  title,
  danger,
  children,
}: {
  icon: React.ReactNode
  title: string
  danger?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        danger
          ? 'border-[rgba(163,45,45,0.25)] bg-[rgba(163,45,45,0.04)]'
          : 'border-border bg-card'
      }`}
    >
      <div
        className={`mb-3 flex items-center gap-2 text-[13px] font-medium ${
          danger ? 'text-[#A32D2D]' : 'text-text'
        }`}
      >
        {icon}
        {title}
      </div>
      {children}
    </div>
  )
}

function Row({ label, children }: { label: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-[rgba(180,178,169,0.08)] py-2 last:border-b-0 last:pb-0">
      <div className="text-[12px] text-muted">{label}</div>
      {children && <div className="text-right text-[12px] text-muted">{children}</div>}
    </div>
  )
}

export default function Configuracoes() {
  return (
    <main className="px-6 py-7">
      <div className="text-xs font-semibold tracking-[0.14em] text-accent">PREFERÊNCIAS E CONTA</div>
      <h1 className="mt-2 font-display text-[20px] font-semibold leading-tight">Configurações</h1>

      <div className="mt-4 space-y-3">
        {/* Conta Google */}
        <Section icon={<IconBrandGoogleDrive size={16} />} title="Conta Google conectada">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-badge-bg text-[13px] font-medium text-badge-fg">
              JD
            </div>
            <div>
              <div className="text-[13px] font-medium text-text">Black FP</div>
              <div className="text-[11px] text-muted">BrownPopcorn@exemplo.com</div>
            </div>
            <button className="ml-auto rounded-md border border-border px-3 py-1.5 text-[12px] font-medium text-muted">
              Desconectar
            </button>
          </div>
          <Row label="Armazenamento Drive usado">
            <span className="text-muted">5.1 GB / 15 GB</span>
          </Row>
          <div className="mt-2 h-1 overflow-hidden rounded bg-[rgba(255,255,255,0.08)]">
            <div className="h-1 w-[34%] rounded bg-accent" />
          </div>
          <div className="mt-1 text-[11px] text-muted">34% utilizado — 9.9 GB disponíveis</div>
        </Section>

        {/* Pasta padrão */}
        <Section icon={<IconFolder size={16} />} title="Pasta padrão no Drive">
          <Row label="Nome da pasta raiz" />
          <input
            className="mb-2.5 mt-1.5 w-full rounded-md border border-border bg-input-bg px-2.5 py-1.5 text-[12px] text-text"
            defaultValue="SIGD_Armazenamento"
          />
          <Row label="Subpastas automáticas por ano">
            <Toggle on />
          </Row>
          <Row label="Subpastas por mês dentro do ano">
            <Toggle on={false} />
          </Row>
        </Section>

        {/* Digitalização */}
        <Section icon={<IconFileText size={16} />} title="Preferências de digitalização">
          <Row label="Tipo padrão de documento">
            <select className="rounded-md border border-border bg-input-bg px-2 py-1 text-[12px] text-muted">
              <option selected>Lista de presença</option>
              <option>Auditoria</option>
              <option>Contrato</option>
            </select>
          </Row>
          <Row label="Salvar imagem original no Drive">
            <Toggle on />
          </Row>
          <Row label="Notificar ao concluir OCR">
            <Toggle on={false} />
          </Row>
        </Section>

        {/* Divisor rúnico */}
        <div className="flex items-center gap-2.5">
          <div className="h-px flex-1 bg-[rgba(200,169,110,0.15)]" />
          <span className="font-display text-sm text-[rgba(200,169,110,0.3)]">᛭</span>
          <div className="h-px flex-1 bg-[rgba(200,169,110,0.15)]" />
        </div>

        {/* Zona de risco */}
        <Section
          icon={<IconAlertTriangle size={16} />}
          title="Zona de risco"
          danger
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12px] text-[#A32D2D]">Excluir todos os registros</div>
              <div className="mt-0.5 text-[11px] text-[rgba(163,45,45,0.6)]">
                Remove os dados do Sigurd. Seus arquivos no Drive não são afetados.
              </div>
            </div>
            <button className="rounded-md bg-[#FCEBEB] px-3 py-1.5 text-[12px] font-medium text-[#A32D2D]">
              Excluir dados
            </button>
          </div>
        </Section>

        {/* Salvar */}
        <div className="flex justify-end">
          <button className="flex items-center gap-1.5 rounded-md bg-btn-primary-bg px-4 py-2 text-[12px] font-medium text-btn-primary-fg">
            <IconDeviceFloppy size={14} />
            Salvar alterações
          </button>
        </div>
      </div>
    </main>
  )
}