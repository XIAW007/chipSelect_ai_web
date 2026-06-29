import { advantages } from './data'

export function WhyChoose() {
  return (
    <section className="mt-6 rounded-xl border border-[#E5E7EB] bg-white px-6 py-5 shadow-sm">
      <h2 className="text-xl font-bold text-[#111827]">为什么选择 AI 检索?</h2>
      <div className="mt-5 grid gap-4 xl:grid-cols-5">
        {advantages.map((item, index) => {
          const Icon = item.icon

          return (
            <div className="flex items-center gap-4 xl:border-r xl:border-[#E5E7EB] xl:pr-6 last:border-r-0" key={item.title}>
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                <Icon size={23} aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-[#111827]">{item.title}</p>
                <p className="mt-1 text-sm text-[#64748B]">{item.desc}</p>
              </div>
              {index === advantages.length - 1 ? null : <span className="hidden" />}
            </div>
          )
        })}
      </div>
    </section>
  )
}
