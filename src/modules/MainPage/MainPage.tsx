import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTE_PATHS } from '../../router/routes'
import MainPage from '../../pages/MainPage/MainPage'

export class MainPageModule {
  getRoutes() {
    return (
      <Route key={ROUTE_PATHS.MAIN} path={ROUTE_PATHS.MAIN}>
        <Routes>
          <Route key={ROUTE_PATHS.MAIN} path={ROUTE_PATHS.MAIN} element={<MainPage />} />
        </Routes>
      </Route>
    )
  }
}
