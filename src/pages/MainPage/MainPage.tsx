import React, { useState } from 'react'
import './MainPage.scss'
import block from 'bem-cn'
import { Link } from 'react-router-dom'

const MainPage: React.FC = () => {
  const b = block('main')
  const [type, setType] = useState('buy')
  const [focused, setFocused] = useState(false)
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')

  return (
    <main className={b()}>
      <div className={b('search-block')}>
        <div className={b('search-text')}>
          <div className={b('search-title')}>Недвижимость в Санкт-Петербурге</div>
          <div className={b('search-buttons')}>
            <button
              className={b('search-button', type === 'buy' ? { selected: true } : { selected: false })}
              onClick={() => setType('buy')}>
              Купить
            </button>
            <button
              className={b('search-button', type === 'rent' ? { selected: true } : { selected: false })}
              onClick={() => setType('rent')}>
              Снять
            </button>
          </div>
          <div className={b('search-inputs')}>
            <input value="Квартиру" type="text" className={b('search-input-left')} />
            <div className={b('search-labels')}>
              <label className={b('search-label')}>Студия</label>
              <label className={b('search-label')}>1</label>
              <label className={b('search-label')}>2</label>
              <label className={b('search-label')}>3</label>
              <label className={b('search-label')}>4+</label>
            </div>
            <div className={b('search-price-inputs')}>
              <input
                value={priceFrom}
                onChange={e => setPriceFrom(e.target.value)}
                className={b('search-price-input')}
                type="text"
                placeholder="Цена от:"
              />
              <input
                value={priceTo}
                onChange={e => setPriceTo(e.target.value)}
                className={b('search-price-input')}
                type="text"
                placeholder="До:"
              />
            </div>
            <input type="text" className={b('search-address')} placeholder="Укажите адрес" />
          </div>
          <Link className={b('submit')} to="/advertisement">
            Показать объявления
          </Link>
        </div>
      </div>
      <div className={b('ad')}>
        <div className={b('ad-text')}>
          <span className={b('ad-title')}>Место для вашей рекламы</span>
          <span className={b('ad-subtext')}>Мы зарезервировали его специально для Вас!</span>
        </div>
      </div>
    </main>
  )
}

export default MainPage
