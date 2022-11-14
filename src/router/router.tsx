import Home from '../pages/Home'
import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'

// 路由懒加载
const Page1 = lazy(() => import('../pages/Page1'))
const Page2 = lazy(() => import('../pages/Page2'))
const Tom = lazy(() => import('../pages/Tom'))
const Bill = lazy(() => import('../pages/Bill'))
const Alex = lazy(() => import('../pages/Alex'))
const Team1 = lazy(() => import('../pages/Team1'))
const Team2 = lazy(() => import('../pages/Team2'))
const NotFound = lazy(() => import('../pages/NotFound'))

// 将React.Suspense抽离出来
const lazyComponent = (lazyParams: JSX.Element) => (
  <React.Suspense fallback={<div>Loading</div>}>{lazyParams}</React.Suspense>
)

export const routes = [
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: lazyComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: lazyComponent(<Page2 />),
      },
    ],
  },
  {
    path: '/sub1',
    element: <Home />,
    children: [
      {
        path: '/sub1/tom',
        element: lazyComponent(<Tom />),
      },
      {
        path: '/sub1/bill',
        element: lazyComponent(<Bill />),
      },
      {
        path: '/sub1/alex',
        element: lazyComponent(<Alex />),
      },
    ],
  },
  {
    path: '/sub2',
    element: <Home />,
    children: [
      {
        path: '/sub2/team1',
        element: lazyComponent(<Team1 />),
      },
      {
        path: '/sub2/team2',
        element: lazyComponent(<Team2 />),
      },
    ],
  },
  {
    path: '*',
    element: lazyComponent(<NotFound />),
  },
]
