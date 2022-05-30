import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import { createRoutes } from './modules/createRoutes'
import { MainPageModule } from './modules/MainPage/MainPage'

const modules = [new MainPageModule()]

const childrens = createRoutes(modules)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App>{childrens}</App>
  </BrowserRouter>,
)
