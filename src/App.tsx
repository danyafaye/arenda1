import React from 'react'
import logo from './logo.svg'
import './App.scss'
import MainPage from './pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import block from 'bem-cn'

const App: React.FC<any> = () => {
  const b = block('app')
  return (
    <div className={b()}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
