import { ArrowDownUp, LayoutList, Table2 } from 'lucide-react'

const sortItems = ['综合排序', '推荐度', '库存', '价格', '交期']

export function ResultToolbar() {
  return (
    <div className="flex h-14 items-center justify-between rounded-lg border border-[#E5E7EB] bg-white px-4 shadow-sm">
      <div className="flex items-center gap-2">
        {sortItems.map((item, index) => (
          <button
            className={[
              'inline-flex h-8 items-center gap-1 rounded-md px-3 text-sm font-medium transition',
              index === 0 ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#2563EB]',
            ].join(' ')}
            key={item}
            type="button"
          >
            {item}
            {index > 0 ? <ArrowDownUp size={13} aria-hidden="true" /> : null}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-[#475569]">
          <input className="size-4 accent-[#2563EB]" defaultChecked type="checkbox" />
          仅看现货
        </label>
        <label className="flex items-center gap-2 text-sm text-[#475569]">
          <input className="size-4 accent-[#2563EB]" type="checkbox" />
          支持替代
        </label>
        <div className="flex overflow-hidden rounded-md border border-[#E5E7EB]">
          <button className="grid size-8 place-items-center bg-[#2563EB] text-white" type="button">
            <Table2 size={16} aria-hidden="true" />
          </button>
          <button className="grid size-8 place-items-center text-[#64748B] hover:bg-[#F8FAFC]" type="button">
            <LayoutList size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
