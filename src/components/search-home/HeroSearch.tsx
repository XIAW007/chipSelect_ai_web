import { Camera, RefreshCw, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroDecorations, hotSearches } from './data'
import { SectionNumber } from './SectionNumber'

export function HeroSearch() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#DCEBFF] px-8 py-9 text-white shadow-[0_18px_45px_rgba(37,99,235,0.22)]">
      <CircuitBackground />

      <div className="relative z-10 max-w-[820px]">
        <h1 className="text-[40px] font-bold leading-tight tracking-normal">用 AI 检索，快速找到更合适的元器件</h1>
        <p className="mt-3 text-base font-medium text-white/95">支持自然语言、型号、参数等多种方式搜索，AI 智能理解您的需求</p>

        <div className="relative mt-5 flex max-w-[820px] items-center rounded-xl bg-white p-2 shadow-[0_18px_38px_rgba(30,64,175,0.26)]">
          <SectionNumber className="absolute -left-[56px] top-1/2 -translate-y-1/2" value={1} />
          <div className="flex h-[62px] flex-1 items-center gap-4 rounded-lg px-4 text-[#111827]">
            <Search className="shrink-0 text-[#111827]" size={28} aria-hidden="true" />
            <input
              className="h-full w-full bg-transparent text-base outline-none placeholder:text-[#94A3B8]"
              placeholder="请输入型号、参数或描述，例如： 10uF 10V X5R 0603"
              type="search"
            />
          </div>
          <button className="mr-2 grid size-12 place-items-center rounded-lg border border-[#BFDBFE] text-[#2563EB]" type="button">
            <Camera size={24} aria-hidden="true" />
          </button>
          <Link
            className="flex h-12 min-w-[98px] items-center justify-center rounded-lg bg-[#2563EB] text-base font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8]"
            to="/selection"
          >
            搜索
          </Link>
        </div>

        <div className="relative mt-5 flex flex-wrap items-center gap-3 text-sm">
          <SectionNumber className="absolute -left-[56px] top-1/2 -translate-y-1/2" value={2} />
          <span className="font-semibold text-white">热门搜索：</span>
          {hotSearches.map((item) => (
            <button className="rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur transition hover:bg-white/30" key={item} type="button">
              {item}
            </button>
          ))}
          <button className="ml-1 inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold text-white transition hover:bg-white/15" type="button">
            <RefreshCw size={16} aria-hidden="true" />
            换一换
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 right-12 hidden h-[218px] w-[390px] lg:block">
        <div className="absolute bottom-0 right-8 h-[118px] w-[250px] rotate-[-10deg] rounded-[28px] border border-white/45 bg-white/35 shadow-[0_24px_50px_rgba(30,64,175,0.25)] backdrop-blur">
          <div className="absolute left-12 top-8 h-4 w-24 rounded-full bg-[#3B82F6]" />
          <div className="absolute left-12 top-14 h-3 w-44 rounded-full bg-white/70" />
          <div className="absolute left-12 top-[74px] h-3 w-36 rounded-full bg-white/55" />
          <div className="absolute bottom-5 right-8 h-7 w-52 rounded-full bg-[#2563EB]" />
        </div>
        <div className="absolute right-[146px] top-0 size-[104px] rounded-full border-[18px] border-[#2563EB] bg-white/15 shadow-[0_18px_38px_rgba(37,99,235,0.28)]" />
        <div className="absolute right-[108px] top-[82px] h-16 w-[22px] rotate-[-45deg] rounded-full bg-[#2563EB]" />
        {heroDecorations.map((item) => (
          <span
            className={`${item.className} absolute rounded-lg border border-white/45 bg-white/45 shadow-sm backdrop-blur`}
            key={item.className}
          />
        ))}
      </div>
    </section>
  )
}

function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-55">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:62px_62px]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.78),transparent_56%)]" />
    </div>
  )
}
