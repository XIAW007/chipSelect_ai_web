import { Link } from 'react-router-dom'
import { brandItems } from './data'

export function BrandStrip() {
  return (
    <section className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#111827]">品牌专区</h2>
          <p className="mt-1 text-sm text-[#64748B]">常用品牌快速入口，支持品牌型号库浏览</p>
        </div>
        <Link className="text-sm font-semibold text-[#2563EB]" to="/brands">
          全部品牌
        </Link>
      </div>

      <div className="grid grid-cols-8 gap-3">
        {brandItems.map((brand) => (
          <Link
            className="grid h-16 place-items-center rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] text-sm font-bold text-[#334155] transition hover:border-[#BFDBFE] hover:bg-white hover:text-[#2563EB]"
            key={brand}
            to={`/search?q=${encodeURIComponent(brand)}`}
          >
            {brand}
          </Link>
        ))}
      </div>
    </section>
  )
}
