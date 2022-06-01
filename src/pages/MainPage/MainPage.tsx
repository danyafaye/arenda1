import React, { useCallback, useState } from 'react'
import './MainPage.scss'
import block from 'bem-cn'
import { Link, useNavigate } from 'react-router-dom'

const MainPage: React.FC = () => {
  const navigate = useNavigate()
  const b = block('main')
  const [type, setType] = useState('buy')
  const [focused, setFocused] = useState(false)
  const [priceFrom, setPriceFrom] = useState<string>()
  const [priceTo, setPriceTo] = useState<string>()
  const [roomType, setRoomType] = useState<string | undefined>()
  const [subway, setSubway] = useState<string | undefined>()
  let disabled = true

  if (roomType) {
    if (priceFrom) {
      if (priceTo)
        if (subway) {
          disabled = false
        }
    }
  }

  const onHandleClick = useCallback(() => {
    navigate(`/advertisement/${type}/${roomType}/${priceFrom}/${priceTo}/${subway}`)
  }, [type, roomType, priceFrom, priceTo, subway])

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
              <label
                className={b('search-label', roomType === 'studio' ? { selected: true } : { selected: false })}
                onClick={() => setRoomType('studio')}>
                Студия
              </label>
              <label
                className={b('search-label', roomType === '1room' ? { selected: true } : { selected: false })}
                onClick={() => setRoomType('1room')}>
                1
              </label>
              <label
                className={b('search-label', roomType === '2room' ? { selected: true } : { selected: false })}
                onClick={() => setRoomType('2room')}>
                2
              </label>
              <label
                className={b('search-label', roomType === '3room' ? { selected: true } : { selected: false })}
                onClick={() => setRoomType('3room')}>
                3
              </label>
              <label
                className={b('search-label', roomType === '4room' ? { selected: true } : { selected: false })}
                onClick={() => setRoomType('4room')}>
                4+
              </label>
            </div>
            <div className={b('search-price-inputs')}>
              <input
                value={priceFrom}
                onChange={e => setPriceFrom(e.target.value)}
                className={b('search-price-input')}
                type="text"
                placeholder="Цена от:"
                required={true}
              />
              <input
                value={priceTo}
                onChange={e => setPriceTo(e.target.value)}
                className={b('search-price-input')}
                type="text"
                placeholder="До:"
                required={true}
              />
            </div>
            <input
              value={subway}
              onChange={e => setSubway(e.target.value)}
              type="text"
              className={b('search-address')}
              placeholder="Укажите метро"
              required={true}
            />
          </div>
          <button disabled={disabled} className={b('submit', { disabled })} onClick={onHandleClick}>
            Показать объявления
          </button>
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
