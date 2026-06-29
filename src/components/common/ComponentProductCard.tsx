import { Scale, ShoppingCart } from 'lucide-react'

export type ComponentProductCardData = {
  model: string
  brand: string
  category: string
  spec: string
  stock: string
  price: string
  tag: string
}

type ComponentProductCardProps = {
  product: ComponentProductCardData
  isFeatured?: boolean
}

export function ComponentProductCard({ product, isFeatured = false }: ComponentProductCardProps) {
  return (
    <article
      className={[
        'rounded-lg border bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]',
        isFeatured ? 'border-[#93C5FD] shadow-[0_12px_28px_rgba(37,99,235,0.14)]' : 'border-[#E5E7EB] shadow-sm',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <ChipPreview />
          <div className="min-w-0">
            <h2 className="truncate text-[15px] font-bold text-[#111827]">{product.model}</h2>
            <p className="mt-0.5 text-sm text-[#64748B]">{product.category.replace('陶瓷', '')}</p>
          </div>
        </div>
        <span className="grid min-h-8 min-w-8 place-items-center rounded-full bg-[#EFF6FF] px-2 text-xs font-bold leading-4 text-[#2563EB]">
          {product.tag}
        </span>
      </div>

      <div className="mt-5 space-y-2.5 text-sm">
        <Info label="品牌" value={product.brand} />
        <Info label="参数" value={product.spec} />
        <Info label="库存" value={product.stock} />
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-xs text-[#94A3B8]">参考价</p>
          <p className="mt-1 text-xl font-bold text-[#2563EB]">{product.price}</p>
        </div>
        <div className="flex gap-2">
          <button className="grid size-8 place-items-center rounded-md border border-[#E5E7EB] text-[#64748B] transition hover:border-[#BFDBFE] hover:text-[#2563EB]" type="button">
            <Scale size={16} aria-hidden="true" />
          </button>
          <button className="grid size-8 place-items-center rounded-md bg-[#2563EB] text-white transition hover:bg-[#1D4ED8]" type="button">
            <ShoppingCart size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex min-w-0 gap-3 text-[#64748B]">
      <span className="shrink-0 text-[#94A3B8]">{label}</span>
      <span className="min-w-0 truncate">{value}</span>
    </p>
  )
}

function ChipPreview() {
  return (
    <div className="relative h-11 w-13 shrink-0">
      <span className="absolute left-2.5 top-2.5 h-8 w-10 rotate-[-25deg] rounded bg-[#6B5B45] shadow-md" />
      <span className="absolute left-0.5 top-[17px] h-2.5 w-2.5 rotate-[-25deg] rounded-full bg-[#E8D7BC]" />
      <span className="absolute right-1.5 top-[28px] h-2.5 w-2.5 rotate-[-25deg] rounded-full bg-[#E8D7BC]" />
    </div>
  )
}
