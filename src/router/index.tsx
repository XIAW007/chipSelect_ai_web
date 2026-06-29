import { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const AppLayout = lazy(() =>
  import('../components/AppLayout').then((module) => ({ default: module.AppLayout })),
)
const SearchHomePage = lazy(() =>
  import('../pages/SearchHomePage').then((module) => ({ default: module.SearchHomePage })),
)
const DeviceSelectionPage = lazy(() =>
  import('../pages/DeviceSelectionPage').then((module) => ({ default: module.DeviceSelectionPage })),
)
const BrandZonePage = lazy(() =>
  import('../pages/BrandZonePage').then((module) => ({ default: module.BrandZonePage })),
)
const SearchResultPage = lazy(() =>
  import('../pages/SearchResultPage').then((module) => ({ default: module.SearchResultPage })),
)

export function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <SearchHomePage />,
        },
        {
          path: 'selection',
          element: <DeviceSelectionPage />,
        },
        {
          path: 'brands',
          element: <BrandZonePage />,
        },
        {
          path: 'search',
          element: <SearchResultPage />,
        },
        {
          path: '*',
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ])

  return <Suspense fallback={<RouteLoading />}>{routes}</Suspense>
}

function RouteLoading() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 text-slate-600">
      <div className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm shadow-sm">
        页面加载中...
      </div>
    </div>
  )
}
