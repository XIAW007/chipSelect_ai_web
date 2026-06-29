import { Clock3, Database, MessageCircle, ScanSearch, Target } from 'lucide-react'

const reasons = [
  { icon: MessageCircle, title: '更懂你的需求', desc: '自然语言理解，精准匹配' },
  { icon: Database, title: '海量数据支持', desc: '覆盖 1000万+ 元器件型号' },
  { icon: Clock3, title: '实时库存更新', desc: '对接供应链，库存数据实时同步' },
  { icon: Target, title: '精准参数匹配', desc: '多维度算法，推荐更合适的型号' },
  { icon: ScanSearch, title: '快速高效', desc: '从搜索到结果，节省 80% 时间' },
]

export function WhyChooseAiSearch() {
  return (
    <section className="rounded-lg border border-[#DCE6F5] bg-white px-6 py-5 shadow-sm">
      <h2 className="text-base font-bold text-[#111827]">为什么选择 AI 检索?</h2>
      <div className="mt-4 grid grid-cols-5">
        {reasons.map((item) => {
          const Icon = item.icon

          return (
            <div className="flex items-center gap-4 border-r border-[#E5E7EB] px-5 first:pl-0 last:border-r-0 last:pr-0" key={item.title}>
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#111827]">{item.title}</p>
                <p className="mt-1 text-xs text-[#64748B]">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
