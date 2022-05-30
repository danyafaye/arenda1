import React from 'react'
import { Routes, Navigate } from 'react-router-dom'

export function createRoutes(modules: any[]) {
  const routesFromModules = modules.map(module => module.getRoutes())
  return (
    <>
      <Routes>
        <Navigate state="/" to="/main" />
        {routesFromModules}
      </Routes>
    </>
  )
}
