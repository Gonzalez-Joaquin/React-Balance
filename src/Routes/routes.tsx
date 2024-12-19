import { LazyExoticComponent, lazy } from 'react'
import { Home } from '../Pages'

type JSXComponent = () => JSX.Element

interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
  icon?: string | JSX.Element
  desc?: string
  roles?: Array<string>
  children?: Array<Route>
  navOmit?: boolean
}

export const routes: Array<Route> = [
  {
    path: '/',
    navOmit: true,
    name: 'Inicio',
    Component: Home,
  },
  {
    path: '/Users',
    name: 'Usuarios',
    icon: 'users-alt',
    Component: lazy(() => import('../Pages/Users/Users')),
    children: [
      {
        name: '',
        path: '',
        Component: lazy(() => import('../Pages/Users/Pages/Home/Home')),
      },
    ],
  },
]
