import { ArrowRight } from 'lucide-react'
import { recommendations } from './data'
import { SectionNumber } from './SectionNumber'

export function AiRecommendation() {
  return (
    <section className="mt-6 rounded-xl border border-[#E5E7EB] bg-white px-6 py-5 shadow-sm">
      <div className="flex items-center gap-3">
        <SectionNumber value={5} />
        <h2 className="text-xl font-bold text-[#111827]">AI 智能推荐</h2>
        <p className="text-sm text-[#64748B]">基于您的搜索和浏览，为您推荐相关元器件</p>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-5">
        {recommendations.map((item) => (
          <article className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-sm transition hover:border-[#BFDBFE] hover:shadow-md" key={item.model}>
            <div className="flex items-start gap-3">
              <ChipImage accent={item.accent} />
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-[#111827]">{item.model}</h3>
                <p className="mt-1 text-xs text-[#64748B]">电容</p>
              </div>
            </div>

            <dl className="mt-3 space-y-1 text-xs leading-5 text-[#64748B]">
              <div>
                <dt className="inline">参数：</dt>
                <dd className="inline">{item.spec}</dd>
              </div>
              <div>
                <dt className="inline">品牌：</dt>
                <dd className="inline">{item.brand}</dd>
              </div>
              <div>
                <dt className="inline">库存：</dt>
                <dd className="inline">{item.stock}</dd>
              </div>
              <div>
                <dt className="inline text-[#2563EB]">价格：</dt>
                <dd className="inline font-semibold text-[#2563EB]">{item.price} /pcs</dd>
              </div>
            </dl>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="h-8 rounded-md border border-[#DBEAFE] text-xs font-semibold text-[#2563EB] transition hover:bg-[#EFF6FF]" type="button">
                加入对比
              </button>
              <button className="h-8 rounded-md border border-[#DBEAFE] text-xs font-semibold text-[#2563EB] transition hover:bg-[#EFF6FF]" type="button">
                查看详情
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <button className="inline-flex h-9 min-w-[260px] items-center justify-center gap-2 rounded-md border border-[#E5E7EB] text-sm font-semibold text-[#2563EB] transition hover:bg-[#F8FAFC]" type="button">
          查看更多推荐
          <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

function ChipImage({ accent }: { accent: string }) {
  return (
    <div className="relative mt-1 h-10 w-14 shrink-0">
      <div
        className="absolute left-2 top-1 h-7 w-10 rotate-[-26deg] rounded-[4px] border border-black/10 shadow-[0_8px_14px_rgba(15,23,42,0.16)]"
        style={{ background: accent }}
      />
      <div className="absolute left-[5px] top-[10px] h-2 w-2 rotate-[-26deg] rounded-sm bg-[#F2E7D0]" />
      <div className="absolute right-[8px] top-[21px] h-2 w-2 rotate-[-26deg] rounded-sm bg-[#F2E7D0]" />
    </div>
  )
}
