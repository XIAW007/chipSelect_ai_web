import { quickServices } from './data'

export function QuickServices() {
  return (
    <section className="grid grid-cols-4 gap-4">
      {quickServices.map((item) => {
        const Icon = item.icon

        return (
          <button
            className="flex items-center gap-4 rounded-lg border border-[#E5E7EB] bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:shadow-md"
            key={item.title}
            type="button"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
              <Icon size={23} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-bold text-[#111827]">{item.title}</span>
              <span className="mt-1 block text-sm text-[#64748B]">{item.desc}</span>
            </span>
          </button>
        )
      })}
    </section>
  )
}
