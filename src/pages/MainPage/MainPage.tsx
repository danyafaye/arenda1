import React, { useState } from 'react'
import './MainPage.scss'
import block from 'bem-cn'

const MainPage: React.FC = () => {
  const b = block('main')
  const [selected, setSelected] = useState('buy')
  const [focused, setFocused] = useState(false)
  return (
    <main className={b()}>
      <div className={b('search-block')}>
        <div className={b('search-text')}>
          <div className={b('search-title')}>Недвижимость в Санкт-Петербурге</div>
          <div className={b('search-buttons')}>
            <button
              className={b('search-button', selected === 'buy' ? { selected: true } : { selected: false })}
              onClick={() => setSelected('buy')}>
              Купить
            </button>
            <button
              className={b('search-button', selected === 'rent' ? { selected: true } : { selected: false })}
              onClick={() => setSelected('rent')}>
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
              <input className={b('search-price-input')} type="text" placeholder="Цена от:" />
              <input className={b('search-price-input')} type="text" placeholder="До:" />
            </div>
            <input type="text" className={b('search-address')} placeholder="Укажите адрес" />
          </div>
          <button className={b('submit')}>Показать объявления</button>
        </div>
      </div>
    </main>
  )
}

export default MainPage
