import { BrandStrip } from '../components/mall-home/BrandStrip'
import { CategorySidebar } from '../components/mall-home/CategorySidebar'
import { MallHero } from '../components/mall-home/MallHero'
import { ProductSections } from '../components/mall-home/ProductSection'
import { QuickServices } from '../components/mall-home/QuickServices'
import { WhyChooseAiSearch } from '../components/mall-home/WhyChooseAiSearch'

export function SearchHomePage() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-[280px_1fr] gap-5">
        <CategorySidebar />
        <div className="space-y-5">
          <MallHero />
          <QuickServices />
        </div>
      </div>

      <BrandStrip />
      <ProductSections />
      <WhyChooseAiSearch />
    </div>
  )
}
