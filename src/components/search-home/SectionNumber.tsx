type SectionNumberProps = {
  value: number
  className?: string
}

export function SectionNumber({ value, className = '' }: SectionNumberProps) {
  return (
    <span
      className={[
        'grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#2563EB] text-sm font-bold text-white shadow-sm',
        className,
      ].join(' ')}
    >
      {value}
    </span>
  )
}
