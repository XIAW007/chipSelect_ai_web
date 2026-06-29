import { SlidersHorizontal } from 'lucide-react'
import { filterGroups } from './data'

export function FilterSidebar() {
  return (
    <aside className="rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
      <div className="flex h-12 items-center gap-2 border-b border-[#E5E7EB] px-4 font-bold text-[#111827]">
        <SlidersHorizontal size={18} aria-hidden="true" />
        筛选条件
      </div>

      <div className="divide-y divide-[#F1F5F9]">
        {filterGroups.map((group) => (
          <div className="p-4" key={group.title}>
            <p className="font-semibold text-[#111827]">{group.title}</p>
            <div className="mt-3 space-y-2">
              {group.options.map((option) => (
                <label className="flex cursor-pointer items-center gap-2 text-sm text-[#475569]" key={option}>
                  <input className="size-4 accent-[#2563EB]" type="checkbox" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
