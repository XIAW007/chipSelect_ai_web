import { ArrowRight } from 'lucide-react'
import { ComponentProductCard } from '../common/ComponentProductCard'
import { productSections } from './data'

export function ProductSections() {
  return (
    <div className="space-y-5">
      {productSections.map((section) => (
        <section className="rounded-lg border border-[#E5E7EB] bg-white p-5 shadow-sm" key={section.title}>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#111827]">{section.title}</h2>
              <p className="mt-1 text-sm text-[#64748B]">{section.subtitle}</p>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]" type="button">
              查看更多
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {section.products.map((product) => (
              <ComponentProductCard key={product.model} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
