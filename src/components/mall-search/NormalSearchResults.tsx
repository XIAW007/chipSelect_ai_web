import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ComponentProductCard } from '../common/ComponentProductCard'
import type { MallProduct } from './data'

type NormalSearchResultsProps = {
  products: MallProduct[]
}

export function NormalSearchResults({ products }: NormalSearchResultsProps) {
  return (
    <section className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center justify-end border-b border-[#E5E7EB] pb-3">
        <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
          <ChevronLeft size={17} aria-hidden="true" />
          <span className="text-[#2563EB]">1</span>
          <span>/41</span>
          <ChevronRight className="text-[#475569]" size={17} aria-hidden="true" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ComponentProductCard
            isFeatured={product.id === 'grm188'}
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
    </section>
  )
}
