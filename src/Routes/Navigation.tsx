import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'

import { Loader } from '../Components'
import { routes } from './routes'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, children, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }>
            {children?.map(({ path: childPath, Component: ChildComponent }) => (
              <Route
                key={childPath}
                path={childPath}
                element={
                  <Suspense fallback={<Loader />}>
                    <ChildComponent />
                  </Suspense>
                }
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
