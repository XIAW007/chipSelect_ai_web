import { ChevronDown } from 'lucide-react'
import { trendIcons, trends } from './data'
import { SectionNumber } from './SectionNumber'

const trendColor = {
  up: 'text-[#EF4444]',
  down: 'text-[#10B981]',
  flat: 'text-[#64748B]',
}

export function SearchTrend() {
  return (
    <section className="mt-6 rounded-xl border border-[#E5E7EB] bg-white px-6 py-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SectionNumber value={4} />
          <h2 className="text-xl font-bold text-[#111827]">热门搜索趋势</h2>
        </div>
        <button className="inline-flex h-8 items-center gap-2 rounded-md border border-[#E5E7EB] px-3 text-sm text-[#475569]" type="button">
          24小时
          <ChevronDown size={15} aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {trends.map((item) => {
          const Icon = trendIcons[item.trend as keyof typeof trendIcons]

          return (
            <button
              className="inline-flex h-9 min-w-[132px] items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm text-[#334155] shadow-sm transition hover:border-[#BFDBFE]"
              key={item.name}
              type="button"
            >
              <span>{item.name}</span>
              <Icon className={trendColor[item.trend as keyof typeof trendColor]} size={15} aria-hidden="true" />
            </button>
          )
        })}
      </div>
    </section>
  )
}
