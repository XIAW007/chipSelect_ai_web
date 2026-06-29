import { Scale, ShoppingCart } from 'lucide-react'
import { resultRows } from './data'

export function ResultTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#F8FAFC] text-[#64748B]">
          <tr>
            <th className="px-4 py-3 font-semibold">型号</th>
            <th className="px-4 py-3 font-semibold">品牌</th>
            <th className="px-4 py-3 font-semibold">分类</th>
            <th className="px-4 py-3 font-semibold">关键参数</th>
            <th className="px-4 py-3 font-semibold">封装</th>
            <th className="px-4 py-3 font-semibold">库存</th>
            <th className="px-4 py-3 font-semibold">交期</th>
            <th className="px-4 py-3 font-semibold">参考价</th>
            <th className="px-4 py-3 font-semibold">推荐度</th>
            <th className="px-4 py-3 text-right font-semibold">操作</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F1F5F9]">
          {resultRows.map((row) => (
            <tr className="transition hover:bg-[#F8FAFC]" key={row.model}>
              <td className="px-4 py-4">
                <p className="font-bold text-[#111827]">{row.model}</p>
                <button className="mt-1 text-xs font-semibold text-[#2563EB]" type="button">
                  查看规格书
                </button>
              </td>
              <td className="px-4 py-4 text-[#475569]">{row.brand}</td>
              <td className="px-4 py-4 text-[#475569]">{row.category}</td>
              <td className="max-w-[230px] px-4 py-4 text-[#475569]">{row.params}</td>
              <td className="px-4 py-4 text-[#475569]">{row.packageName}</td>
              <td className="px-4 py-4 font-semibold text-[#059669]">{row.stock}</td>
              <td className="px-4 py-4 text-[#475569]">{row.delivery}</td>
              <td className="px-4 py-4 font-bold text-[#EF4444]">{row.price}</td>
              <td className="px-4 py-4">
                <span className="rounded-full bg-[#EFF6FF] px-2 py-1 text-xs font-bold text-[#2563EB]">{row.score}</span>
              </td>
              <td className="px-4 py-4">
                <div className="flex justify-end gap-2">
                  <button className="grid size-8 place-items-center rounded-md border border-[#E5E7EB] text-[#64748B] hover:border-[#BFDBFE] hover:text-[#2563EB]" type="button">
                    <Scale size={16} aria-hidden="true" />
                  </button>
                  <button className="grid size-8 place-items-center rounded-md bg-[#2563EB] text-white hover:bg-[#1D4ED8]" type="button">
                    <ShoppingCart size={16} aria-hidden="true" />
                  </button>
                  <button className="h-8 rounded-md border border-[#DBEAFE] px-3 text-xs font-semibold text-[#2563EB] hover:bg-[#EFF6FF]" type="button">
                    详情
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between border-t border-[#E5E7EB] px-4 py-3">
        <p className="text-sm text-[#64748B]">当前显示 1-5 条，共 12,438 条</p>
        <div className="flex gap-2">
          {['上一页', '1', '2', '3', '下一页'].map((item, index) => (
            <button
              className={[
                'h-8 rounded-md border px-3 text-sm font-medium',
                index === 1 ? 'border-[#2563EB] bg-[#2563EB] text-white' : 'border-[#E5E7EB] text-[#475569] hover:bg-[#F8FAFC]',
              ].join(' ')}
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
