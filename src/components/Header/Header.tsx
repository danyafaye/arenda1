import React from 'react'
import './Header.scss'
import block from 'bem-cn'
import { ReactComponent as NaviSvg } from '../../shared/navi-icon.svg'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const b = block('header')
  return (
    <header className={b()}>
      <div className={b('wrapper')}>
        <div className={b('top-content')}>
          <Link className={b('top-content-title')} to="/">
            Аренда
          </Link>
          <div className={b('top-content-navi')}>
            <NaviSvg className={b('top-content-navi-icon')} />
            <div className={b('top-content-navi-text')}>Санкт-Петербург</div>
          </div>
          <div className={b('top-content-buttons')}>
            <button className={b('top-content-button')}>Добавить объявление</button>
            <button className={b('top-content-button', { login: true })}>Войти</button>
          </div>
        </div>
        <div className={b('bottom-navi')}>
          <button className={b('bottom-button')}>Купить</button>
          <button className={b('bottom-button')}>Снять</button>
        </div>
      </div>
    </header>
  )
}

export default Header
