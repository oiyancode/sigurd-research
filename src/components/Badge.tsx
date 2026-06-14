import type { ReactNode } from 'react'

type BadgeVariant = 'ok' | 'pending' | 'error' | 'gold'

const variantStyles: Record<BadgeVariant, string> = {
  ok: 'bg-[#EAF3DE] text-[#3B6D11]',
  pending: 'bg-[#FAEEDA] text-[#854F0B]',
  error: 'bg-[#FCEBEB] text-[#A32D2D]',
  gold: 'bg-badge-bg text-badge-fg',
}

export default function Badge({
  variant,
  children,
}: {
  variant: BadgeVariant
  children: ReactNode
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}