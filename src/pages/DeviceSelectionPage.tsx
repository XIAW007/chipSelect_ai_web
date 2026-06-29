import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ComponentProductCard } from '../components/common/ComponentProductCard'
import { categoryMenus } from '../components/mall-home/data'
import { mallProducts } from '../components/mall-search/data'

const pageItems = [1, 2, 3, 4, 5]

export function DeviceSelectionPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialPrimary = getPrimaryIndex(searchParams.get('primary'))
  const initialSecondary = getSecondaryIndex(initialPrimary, searchParams.get('secondary'))
  const [activePrimary, setActivePrimary] = useState(initialPrimary)
  const [activeSecondary, setActiveSecondary] = useState(initialSecondary)
  const activeMenu = categoryMenus[activePrimary]
  const secondaryItems = activeMenu.groups.flatMap((group) => group.items).slice(0, 9)
  const activeSecondaryName = secondaryItems[activeSecondary] || secondaryItems[0] || ''

  useEffect(() => {
    const nextPrimary = getPrimaryIndex(searchParams.get('primary'))
    const nextSecondary = getSecondaryIndex(nextPrimary, searchParams.get('secondary'))
    setActivePrimary(nextPrimary)
    setActiveSecondary(nextSecondary)
  }, [searchParams])

  function syncSelection(primaryIndex: number, secondaryIndex: number) {
    const primary = categoryMenus[primaryIndex]
    const secondary = primary.groups.flatMap((group) => group.items).slice(0, 9)[secondaryIndex] || ''
    navigate(`/selection?primary=${encodeURIComponent(primary.title)}&secondary=${encodeURIComponent(secondary)}&q=${encodeURIComponent(secondary)}`)
  }

  return (
    <div className="grid grid-cols-[260px_1fr] gap-5">
      <aside className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
        <div className="border-b border-[#E5E7EB] px-4 py-4">
          <h1 className="text-lg font-bold text-[#111827]">器件类型</h1>
        </div>
        <nav className="py-2">
          {categoryMenus.map((item, index) => {
            const Icon = item.icon
            const isActive = index === activePrimary

            return (
              <button
                className={[
                  'flex h-12 w-full items-center justify-between px-4 text-left text-sm font-semibold transition',
                  isActive ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#2563EB]',
                ].join(' ')}
                key={item.title}
                onClick={() => {
                  setActivePrimary(index)
                  setActiveSecondary(0)
                  syncSelection(index, 0)
                }}
                type="button"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} aria-hidden="true" />
                  {item.title}
                </span>
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            )
          })}
        </nav>
      </aside>

      <section className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
        <div className="border-b border-[#E5E7EB] p-4">
          <div className="flex items-center justify-between gap-5">
            <div>
              <h2 className="text-xl font-bold text-[#111827]">{activeMenu.title}</h2>
              <p className="mt-1 text-sm text-[#64748B]">选择二级分类查看候选器件。</p>
            </div>
            <div className="flex h-10 w-[420px] items-center gap-2 rounded-md border border-[#E5E7EB] bg-white px-3 text-[#475569] transition focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#DBEAFE]">
              <Search size={18} className="text-[#94A3B8]" aria-hidden="true" />
              <input className="h-full min-w-0 flex-1 text-sm outline-none placeholder:text-[#94A3B8]" placeholder="搜索型号、品牌、参数或应用场景" type="search" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {secondaryItems.map((item, index) => (
                <button
                  className={[
                    'inline-flex h-9 items-center rounded-md border px-4 font-medium transition',
                    index === activeSecondary
                      ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                      : 'border-[#E5E7EB] bg-white text-[#475569] hover:border-[#BFDBFE] hover:text-[#2563EB]',
                  ].join(' ')}
                  key={item}
                  onClick={() => {
                    setActiveSecondary(index)
                    syncSelection(activePrimary, index)
                  }}
                  type="button"
                >
                  {item}
                </button>
              ))}
          </div>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <div>
              <h3 className="text-lg font-bold text-[#111827]">器件列表</h3>
              <p className="mt-1 text-sm text-[#64748B]">共 12,345 条，当前展示 {activeMenu.title} / {activeSecondaryName}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {mallProducts.slice(0, 6).map((product) => (
              <ComponentProductCard
                isFeatured={product.id === 'cl10a106'}
                key={product.id}
                product={{
                  model: product.model,
                  brand: product.brand,
                  category: product.category,
                  spec: product.spec,
                  stock: product.stock,
                  price: product.price,
                  tag: product.badge,
                }}
              />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm">
            <button className="grid size-8 place-items-center rounded-md border border-[#E5E7EB] text-[#64748B]" type="button">
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            {pageItems.map((item) => (
              <button
                className={[
                  'h-8 min-w-8 rounded-md border px-2 font-semibold',
                  item === 1 ? 'border-[#2563EB] bg-[#2563EB] text-white' : 'border-[#E5E7EB] text-[#475569] hover:bg-[#F8FAFC]',
                ].join(' ')}
                key={item}
                type="button"
              >
                {item}
              </button>
            ))}
            <span className="px-2 text-[#94A3B8]">...</span>
            <button className="h-8 min-w-8 rounded-md border border-[#E5E7EB] px-2 font-semibold text-[#475569]" type="button">
              205
            </button>
            <button className="grid size-8 place-items-center rounded-md border border-[#E5E7EB] text-[#64748B]" type="button">
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function getPrimaryIndex(primary: string | null) {
  const index = categoryMenus.findIndex((item) => item.title === primary)
  return index >= 0 ? index : 0
}

function getSecondaryIndex(primaryIndex: number, secondary: string | null) {
  const items = categoryMenus[primaryIndex].groups.flatMap((group) => group.items).slice(0, 9)
  const index = items.findIndex((item) => item === secondary)
  return index >= 0 ? index : 0
}
