import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categoryMenus } from './data'

export function CategorySidebar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeCategory = activeIndex === null ? null : categoryMenus[activeIndex]
  const secondaryItems = activeCategory ? activeCategory.groups.flatMap((group) => group.items) : []

  return (
    <div className="relative z-30" onMouseLeave={() => setActiveIndex(null)}>
      <aside className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
        <div className="flex h-12 items-center bg-[#111827] px-4 text-sm font-semibold text-white">全部器件分类</div>
        <div className="divide-y divide-[#F1F5F9]">
          {categoryMenus.map((item, index) => {
            const Icon = item.icon
            const isActive = activeIndex === index

            return (
              <button
                className={[
                  'group flex w-full items-start gap-3 px-4 py-3 text-left transition',
                  isActive ? 'bg-[#EFF6FF]' : 'hover:bg-[#F8FAFC]',
                ].join(' ')}
                key={item.title}
                onMouseEnter={() => setActiveIndex(index)}
                type="button"
              >
                <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-md bg-[#EFF6FF] text-[#2563EB]">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className={['font-semibold', isActive ? 'text-[#2563EB]' : 'text-[#111827] group-hover:text-[#2563EB]'].join(' ')}>
                      {item.title}
                    </span>
                    <ChevronRight className="text-[#94A3B8]" size={16} aria-hidden="true" />
                  </span>
                  <span className="mt-1 block truncate text-xs text-[#64748B]">{item.children.join(' / ')}</span>
                </span>
              </button>
            )
          })}
        </div>
      </aside>

      {activeCategory ? (
        <div
          className="absolute left-[280px] top-0 z-40 h-full min-h-[520px] w-[780px] rounded-r-lg border border-[#DCE6F5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
        >
          <div className="border-b border-[#E5E7EB] pb-4">
            <div>
              <p className="text-xl font-bold text-[#111827]">{activeCategory.title}</p>
              <p className="mt-1 text-sm text-[#64748B]">全部二级分类</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {secondaryItems.map((item) => (
              <Link
                className="rounded-md bg-[#F8FAFC] px-3 py-2 text-sm text-[#475569] transition hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                key={item}
                to={`/selection?primary=${encodeURIComponent(activeCategory.title)}&secondary=${encodeURIComponent(item)}&q=${encodeURIComponent(item)}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
