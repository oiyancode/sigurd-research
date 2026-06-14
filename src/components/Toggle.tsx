export default function Toggle({ on }: { on: boolean }) {
  return (
    <div
      className={`h-5 w-9 cursor-pointer rounded-full border transition-colors ${
        on
          ? 'border-[rgba(200,169,110,0.3)] bg-[rgba(200,169,110,0.15)]'
          : 'border-border bg-[rgba(255,255,255,0.06)]'
      }`}
    >
      <div
        className={`mt-0.5 h-3.5 w-3.5 rounded-full transition-all ${
          on ? 'ml-[18px] bg-[#c8a96e]' : 'ml-0.5 bg-muted'
        }`}
      />
    </div>
  )
}