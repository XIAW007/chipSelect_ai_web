import { Bell, ChevronDown, CircleHelp, LogOut, Scale, ShoppingCart, UserRound } from 'lucide-react'
import type { FormEvent } from 'react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

type NavItem = {
  label: string
  to?: string
}

const navItems: NavItem[] = [
  { to: '/', label: '首页' },
  { to: '/selection', label: '选型库' },
  { to: '/brands', label: '品牌专区' },
  { label: 'BOM配单' },
  { label: '方案中心' },
  { label: '帮助中心' },
]

export function AppLayout() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === '/search') {
    return (
      <div className="min-h-screen bg-[#F5F7FB] text-[#111827]">
        <main className="mx-auto w-[1366px] px-6 py-5">
          <Outlet />
        </main>
      </div>
    )
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const query = keyword.trim() || '10uF 10V X5R 0603'
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#111827]">
      <header className="sticky top-0 z-40 border-b border-[#E5E7EB] bg-white shadow-sm">
        <div className="mx-auto flex h-[72px] w-[1366px] items-center justify-between px-6">
          <NavLink className="flex items-center gap-3" to="/">
            <div className="relative h-9 w-9">
              <span className="absolute left-0 top-[14px] h-[18px] w-9 rotate-[-58deg] rounded-full bg-[#2563EB]" />
              <span className="absolute left-[13px] top-1 h-[18px] w-9 rotate-[58deg] rounded-full bg-[#60A5FA]" />
              <span className="absolute left-[14px] top-[17px] h-[13px] w-[13px] rounded-full bg-[#1D4ED8]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-bold tracking-normal text-[#111827]">AI检索</span>
              <span className="text-sm text-[#6B7280]">让选型更简单</span>
            </div>
          </NavLink>

          <form className="w-[470px] px-6" onSubmit={handleSearch}>
            <div className="flex h-11 overflow-hidden rounded-lg border-2 border-[#2563EB] bg-white">
              <input
                className="h-full flex-1 px-4 text-sm outline-none placeholder:text-[#94A3B8]"
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="搜索型号、品牌、参数或应用场景"
                type="search"
                value={keyword}
              />
              <button className="w-24 bg-[#2563EB] text-sm font-semibold text-white transition hover:bg-[#1D4ED8]" type="submit">
                搜索
              </button>
            </div>
          </form>

          <div className="flex items-center gap-3 text-[#111827]">
            <HeaderIcon count="12" icon={<Bell size={20} aria-hidden="true" />} />
            <HeaderIcon icon={<CircleHelp size={20} aria-hidden="true" />} />
            <button className="flex h-9 items-center gap-2 rounded-lg border border-[#E5E7EB] px-3 text-sm font-medium hover:border-[#BFDBFE] hover:text-[#2563EB]" type="button">
              <Scale size={17} aria-hidden="true" />
              对比
            </button>
            <button className="flex h-9 items-center gap-2 rounded-lg border border-[#E5E7EB] px-3 text-sm font-medium hover:border-[#BFDBFE] hover:text-[#2563EB]" type="button">
              <ShoppingCart size={17} aria-hidden="true" />
              询价车
            </button>

            <div className="relative">
              <button
                className="flex items-center gap-3 rounded-full py-1 pl-1 pr-2 hover:bg-[#F3F4F6]"
                onClick={() => setIsUserMenuOpen((value) => !value)}
                type="button"
              >
                <span className="grid size-8 place-items-center rounded-full bg-[#F5E3D8] text-xs font-bold text-[#7C3F1D]">
                  夏
                </span>
                <span className="text-sm font-medium">xiawei</span>
                <ChevronDown
                  className={['transition', isUserMenuOpen ? 'rotate-180' : ''].join(' ')}
                  size={16}
                  aria-hidden="true"
                />
              </button>

              {isUserMenuOpen ? (
                <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-lg border border-[#E5E7EB] bg-white py-2 shadow-[0_18px_45px_rgba(15,23,42,0.16)]">
                  <button className="flex h-10 w-full items-center gap-3 px-4 text-sm text-[#334155] transition hover:bg-[#F8FAFC] hover:text-[#2563EB]" type="button">
                    <UserRound size={16} aria-hidden="true" />
                    个人中心
                  </button>
                  <button className="flex h-10 w-full items-center gap-3 px-4 text-sm text-[#334155] transition hover:bg-[#FEF2F2] hover:text-[#EF4444]" type="button">
                    <LogOut size={16} aria-hidden="true" />
                    退出登录
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-[#F1F5F9]">
          <nav className="mx-auto flex h-11 w-[1366px] items-center gap-2 px-6">
            {navItems.map((item) =>
              item.to ? (
                <NavLink
                  end={item.to === '/'}
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'relative flex h-full items-center px-4 text-sm font-semibold transition',
                      isActive ? 'text-[#2563EB]' : 'text-[#334155] hover:text-[#2563EB]',
                    ].join(' ')
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive ? <span className="absolute bottom-0 left-4 right-4 h-[3px] rounded-t-full bg-[#2563EB]" /> : null}
                    </>
                  )}
                </NavLink>
              ) : (
                <button
                  className="flex h-full items-center px-4 text-sm font-semibold text-[#334155] transition hover:text-[#2563EB]"
                  key={item.label}
                  type="button"
                >
                  {item.label}
                </button>
              ),
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-[1366px] px-6 py-5">
        <Outlet />
      </main>
    </div>
  )
}

type HeaderIconProps = {
  icon: ReactNode
  count?: string
}

function HeaderIcon({ icon, count }: HeaderIconProps) {
  return (
    <button className="relative grid size-9 place-items-center rounded-full hover:bg-[#F3F4F6]" type="button">
      {icon}
      {count ? (
        <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-[#EF4444] text-[10px] font-semibold text-white">
          {count}
        </span>
      ) : null}
    </button>
  )
}
