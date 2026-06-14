import { IconSearch, IconCheck, IconClock, IconAlertCircle, IconExternalLink, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import Badge from '../components/Badge'

const documentos = [
  { id: 'a3f8c2', nome: 'Lista Presença — Abril 2026', data: '14/04/2026', tipo: 'Lista presença', status: 'ok' as const, drive: true },
  { id: 'b9d14e', nome: 'Auditoria Safety — Mar 2026', data: '28/03/2026', tipo: 'Auditoria', status: 'ok' as const, drive: true },
  { id: 'c2a77f', nome: 'Lista Presença — Mar 2026', data: '15/03/2026', tipo: 'Lista presença', status: 'pending' as const, drive: false },
  { id: 'd5e891', nome: 'Contrato Fornecedor Logística', data: '02/03/2026', tipo: 'Contrato', status: 'error' as const, drive: false },
  { id: 'e1f034', nome: 'Lista Presença — Fev 2026', data: '18/02/2026', tipo: 'Lista presença', status: 'ok' as const, drive: true },
]

const statusLabels = { ok: 'Processado', pending: 'Pendente', error: 'Erro OCR' } as const
const statusIcons = { ok: <IconCheck size={10} />, pending: <IconClock size={10} />, error: <IconAlertCircle size={10} /> } as const

export default function Documentos() {
  return (
    <main className="px-6 py-7">
      <div className="text-xs font-semibold tracking-[0.14em] text-accent">GESTÃO DE ARQUIVOS</div>
      <h1 className="mt-2 font-display text-[20px] font-semibold leading-tight">Seus Documentos</h1>

      {/* Stats row */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { val: '148', label: 'Total processados' },
          { val: '12', label: 'Este mês' },
          { val: '2', label: 'Com erro' },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-[rgba(255,255,255,0.04)] px-3 py-2.5">
            <div className="text-[22px] font-medium text-text">{s.val}</div>
            <div className="mt-0.5 text-[11px] text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + filters */}
      <div className="mt-3.5 flex gap-2">
        <div className="relative flex-1">
          <IconSearch size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            className="w-full rounded-md border border-border bg-input-bg py-2 pl-8 pr-3 text-[13px] text-text placeholder:text-placeholder"
            placeholder="Buscar por ID, nome ou conteúdo…"
          />
        </div>
        <select className="w-[110px] rounded-md border border-border bg-input-bg px-2 py-2 text-[12px] text-muted">
          <option>Todos os anos</option>
          <option selected>2026</option>
          <option>2025</option>
          <option>2024</option>
        </select>
        <select className="w-[110px] rounded-md border border-border bg-input-bg px-2 py-2 text-[12px] text-muted">
          <option selected>Todos os tipos</option>
          <option>Lista presença</option>
          <option>Auditoria</option>
          <option>Contrato</option>
        </select>
      </div>

      {/* Table */}
      <div className="mt-3.5 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border text-[11px] font-medium tracking-[0.08em] text-muted uppercase">
              <th className="px-2.5 py-2 text-left">ID</th>
              <th className="px-2.5 py-2 text-left">Nome</th>
              <th className="px-2.5 py-2 text-left">Data</th>
              <th className="px-2.5 py-2 text-left">Tipo</th>
              <th className="px-2.5 py-2 text-left">Status</th>
              <th className="px-2.5 py-2 text-left">Drive</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((doc) => (
              <tr key={doc.id} className="border-b border-[rgba(180,178,169,0.08)] hover:bg-[rgba(255,255,255,0.025)]">
                <td className="px-2.5 py-2.5 font-mono text-[11px] text-muted">{doc.id}</td>
                <td className="px-2.5 py-2.5 text-[12px] font-medium text-text">{doc.nome}</td>
                <td className="px-2.5 py-2.5 text-[12px] text-muted">{doc.data}</td>
                <td className="px-2.5 py-2.5 text-[12px] text-muted">{doc.tipo}</td>
                <td className="px-2.5 py-2.5">
                  <Badge variant={doc.status}>
                    {statusIcons[doc.status]}
                    {statusLabels[doc.status]}
                  </Badge>
                </td>
                <td className="px-2.5 py-2.5">
                  {doc.drive ? (
                    <button className="inline-flex items-center gap-1 text-[12px] text-accent">
                      <IconExternalLink size={12} />
                      Abrir
                    </button>
                  ) : (
                    <span className="text-[12px] text-muted opacity-40">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-3.5 flex items-center justify-between">
        <div className="text-[12px] text-muted">Mostrando 1–5 de 148 documentos</div>
        <div className="flex gap-1">
          <button className="grid h-7 w-7 place-items-center rounded border border-border bg-input-bg text-muted">
            <IconChevronLeft size={14} />
          </button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={`grid h-7 w-7 place-items-center rounded border text-[12px] ${
                p === 1
                  ? 'border-[rgba(200,169,110,0.3)] bg-[rgba(200,169,110,0.15)] text-[#c8a96e]'
                  : 'border-border bg-input-bg text-muted'
              }`}
            >
              {p}
            </button>
          ))}
          <button className="grid h-7 place-items-center rounded border border-border bg-input-bg px-2 text-[11px] text-muted">
            …
          </button>
          <button className="grid h-7 w-7 place-items-center rounded border border-border bg-input-bg text-[12px] text-muted">
            30
          </button>
          <button className="grid h-7 w-7 place-items-center rounded border border-border bg-input-bg text-muted">
            <IconChevronRight size={14} />
          </button>
        </div>
      </div>
    </main>
  )
}