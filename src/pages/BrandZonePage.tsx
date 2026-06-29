import { ArrowRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { brandItems } from '../components/mall-home/data'

const brandProfiles = [
  { name: 'SAMSUNG', title: '三星电机', focus: '贴片电容、存储器、被动元件', count: '18,000+', country: '韩国' },
  { name: 'MURATA', title: '村田制作所', focus: 'MLCC、电感、滤波器、传感器', count: '26,000+', country: '日本' },
  { name: 'YAGEO', title: '国巨', focus: '电阻、电容、无线元件', count: '15,500+', country: '中国台湾' },
  { name: 'TI', title: '德州仪器', focus: '电源管理、模拟芯片、接口芯片', count: '12,800+', country: '美国' },
  { name: 'ST', title: '意法半导体', focus: 'MCU、功率器件、传感器', count: '4,500+', country: '欧洲' },
  { name: 'NXP', title: '恩智浦', focus: '车规芯片、接口、安全芯片', count: '3,600+', country: '荷兰' },
  { name: 'Microchip', title: '微芯科技', focus: 'MCU、CAN 收发器、存储器', count: '3,200+', country: '美国' },
  { name: 'Infineon', title: '英飞凌', focus: '功率器件、汽车电子、安全芯片', count: '2,900+', country: '德国' },
].filter((brand) => brandItems.includes(brand.name))

export function BrandZonePage() {
  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-5">
          <div>
            <h1 className="text-2xl font-bold text-[#111827]">品牌专区</h1>
            <p className="mt-1 text-sm text-[#64748B]">仅展示元器件相关品牌，支持按品牌进入型号库和现货列表。</p>
          </div>
          <div className="flex h-10 w-[360px] items-center gap-2 rounded-md border border-[#E5E7EB] px-3 transition focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#DBEAFE]">
            <Search size={18} className="text-[#94A3B8]" aria-hidden="true" />
            <input className="h-full min-w-0 flex-1 text-sm outline-none placeholder:text-[#94A3B8]" placeholder="搜索品牌或产品线" type="search" />
          </div>
        </div>

      </section>

      <section className="grid grid-cols-4 gap-4">
        {brandProfiles.map((brand) => (
          <article className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]" key={brand.name}>
            <div className="flex items-start justify-between gap-3">
              <div className="grid size-12 place-items-center rounded-lg bg-[#EFF6FF] text-lg font-bold text-[#2563EB]">
                {brand.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="rounded-full bg-[#F8FAFC] px-2 py-1 text-xs font-semibold text-[#64748B]">{brand.country}</span>
            </div>
            <h2 className="mt-4 text-lg font-bold text-[#111827]">{brand.name}</h2>
            <p className="mt-1 text-sm font-medium text-[#475569]">{brand.title}</p>
            <p className="mt-3 min-h-[44px] text-sm leading-6 text-[#64748B]">{brand.focus}</p>
            <div className="mt-4 flex items-center justify-between border-t border-[#F1F5F9] pt-4">
              <div>
                <p className="text-xs text-[#94A3B8]">相关型号</p>
                <p className="mt-1 font-bold text-[#2563EB]">{brand.count}</p>
              </div>
              <Link
                className="inline-flex items-center gap-1 rounded-md border border-[#DBEAFE] px-3 py-2 text-sm font-semibold text-[#2563EB] transition hover:bg-[#EFF6FF]"
                to={`/search?q=${encodeURIComponent(brand.name)}`}
              >
                查看型号
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
