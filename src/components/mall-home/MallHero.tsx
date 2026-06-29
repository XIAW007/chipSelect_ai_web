import { RefreshCw, Search } from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { heroBadges, hotKeywords, mallStats } from './data'

export function MallHero() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const query = keyword.trim() || '10uF 10V X5R 0603'
    navigate(`/search?q=${encodeURIComponent(query)}&mode=ai`)
  }

  return (
    <section className="grid grid-cols-[1fr_260px] gap-4">
      <div className="relative overflow-hidden rounded-lg bg-[#2563EB] bg-[url('/banner.png')] bg-cover bg-center px-8 py-8 text-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/70 via-[#3B82F6]/35 to-transparent" />
        <div className="relative z-10 max-w-[760px]">
          <p className="text-sm font-semibold text-white/85">AI 元器件商城</p>
          <h1 className="mt-3 text-[38px] font-bold leading-tight tracking-normal">搜索、比价、选型、询价一站完成</h1>
          <p className="mt-3 text-base text-white/90">输入型号、参数或应用需求，系统自动匹配现货、替代料、品牌和价格。</p>

          <form className="mt-6 flex w-[560px] rounded-lg bg-white p-1.5 shadow-[0_16px_38px_rgba(30,64,175,0.26)]" onSubmit={handleSearch}>
            <div className="flex h-12 flex-1 items-center gap-2 px-2 text-[#111827]">
              <Search size={20} aria-hidden="true" />
              <input
                className="h-full w-full bg-transparent text-sm outline-none placeholder:text-[#94A3B8]"
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="请输入型号、参数或描述，例如：10uF 10V X5R 0603"
                type="search"
                value={keyword}
              />
            </div>
            <button className="grid h-12 w-[88px] place-items-center rounded-md bg-[#2563EB] text-sm font-semibold text-white" type="submit">
              AI搜索
            </button>
          </form>

          <div className="mt-4 flex w-[560px] items-center gap-2 overflow-hidden text-sm">
            <span className="shrink-0 font-semibold">热门搜索：</span>
            <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
              {hotKeywords.map((item) => (
                <Link
                  className="shrink-0 rounded-full bg-white/20 px-3 py-1.5 text-white transition hover:bg-white/30"
                  key={item}
                  to={`/search?q=${encodeURIComponent(item)}&mode=ai`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <button className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-white transition hover:bg-white/25" type="button">
              <RefreshCw size={14} aria-hidden="true" />
              换一批
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {heroBadges.map((item) => {
              const Icon = item.icon

              return (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/18 px-3 py-2 text-sm font-medium" key={item.text}>
                  <Icon size={16} aria-hidden="true" />
                  {item.text}
                </span>
              )
            })}
          </div>
        </div>

      </div>

      <div className="grid gap-4">
        <div className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
          <p className="font-semibold text-[#111827]">器件库数据</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {mallStats.map((item) => (
              <div className="rounded-md bg-[#F8FAFC] p-3" key={item.label}>
                <p className="text-lg font-bold text-[#2563EB]">{item.value}</p>
                <p className="mt-1 text-xs text-[#64748B]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[#DBEAFE] bg-[#EFF6FF] p-5 shadow-sm">
          <p className="font-semibold text-[#111827]">快速发布需求</p>
          <p className="mt-2 text-sm leading-6 text-[#64748B]">上传 BOM 或描述应用场景，AI 自动生成候选器件清单。</p>
          <button className="mt-4 h-9 w-full rounded-md bg-[#2563EB] text-sm font-semibold text-white" type="button">
            上传 BOM
          </button>
        </div>
      </div>
    </section>
  )
}
