import { ArrowRight } from 'lucide-react'
import { categories } from './data'
import { SectionNumber } from './SectionNumber'

export function CategoryEntry() {
  return (
    <section className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SectionNumber value={3} />
          <h2 className="text-xl font-bold text-[#111827]">分类入口</h2>
        </div>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]" type="button">
          查看全部分类
          <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-6">
        {categories.map((item) => {
          const Icon = item.icon

          return (
            <button
              className="flex min-h-[112px] items-center gap-4 rounded-lg border border-[#E5E7EB] bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:shadow-md"
              key={item.title}
              type="button"
            >
              <span className="grid size-[54px] shrink-0 place-items-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                <Icon size={30} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[15px] font-bold text-[#111827]">{item.title}</span>
                <span className="mt-2 block text-xs text-[#6B7280]">{item.desc}</span>
                <span className="mt-3 block text-xs font-medium text-[#64748B]">{item.count}</span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
