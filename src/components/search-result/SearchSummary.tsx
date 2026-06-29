import { Search, Sparkles } from 'lucide-react'
import { activeTags, aiSuggestions } from './data'

export function SearchSummary() {
  return (
    <section className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="text-sm text-[#64748B]">首页 / 搜索结果</p>
          <h1 className="mt-2 text-2xl font-bold text-[#111827]">搜索结果：10uF 10V X5R 0603</h1>
          <p className="mt-1 text-sm text-[#64748B]">共找到 12,438 个匹配器件，已按 AI 推荐度排序。</p>
        </div>

        <div className="flex h-11 w-[430px] overflow-hidden rounded-lg border-2 border-[#2563EB] bg-white">
          <div className="flex flex-1 items-center gap-2 px-3">
            <Search className="text-[#64748B]" size={18} aria-hidden="true" />
            <input className="h-full w-full text-sm outline-none" defaultValue="10uF 10V X5R 0603" type="search" />
          </div>
          <button className="w-20 bg-[#2563EB] text-sm font-semibold text-white" type="button">
            搜索
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-semibold text-[#111827]">AI 识别：</span>
        {activeTags.map((tag) => (
          <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-sm font-medium text-[#2563EB]" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {aiSuggestions.map((item) => (
          <div className="flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2 text-sm text-[#475569]" key={item}>
            <Sparkles className="shrink-0 text-[#2563EB]" size={16} aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
