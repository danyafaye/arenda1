import React from 'react'
import './Advertisement.scss'
import block from 'bem-cn'
import { useParams } from 'react-router-dom'

const Advertisement: React.FC = () => {
  const b = block('advertisement')
  const { type, roomType, priceFrom, priceTo, subway } = useParams()
  return (
    <div className={b()}>
      {type === 'buy' &&
        roomType === 'studio' &&
        priceFrom! <= '4200000' &&
        priceTo! >= '4200000' &&
        subway === 'Площадь Восстания' && (
          <div className={b('block')}>
            <img src={require('../../shared/kupit_20.webp')} className={b('block-img')}></img>
            <div className={b('block-text')}>
              <div className={b('block-main')}>
                <div className={b('main')}>
                  <div className={b('block-title')}>20 м(кв.), квартира-студия</div>
                  <div className={b('block-info')}>2 этаж из 2</div>
                  <div className={b('block-info')}>Лиговский проспект, 50к13</div>
                  <div className={b('block-info')}>ст. м. Площадь Восстания</div>
                </div>
                <div className={b('block-price')}>
                  <div className={b('price')}>4 200 000 ₽</div>
                  <div className={b('meter')}>210 000 ₽ за м(кв.)</div>
                </div>
              </div>
              <div className={b('block-description')}>
                Для инвестиций или жизни! Студия с ремонтом и мебелью Кафель в санузле, душевая кабина. Хорошая
                сантехника. Спальное место выделено на второй этаж. Во дворе есть парковка.
              </div>
              <div className={b('block-buttons')}>
                <button className={b('button')} onClick={() => alert('Аренда прошла успешно.')}>
                  Аренда
                </button>
              </div>
            </div>
          </div>
        )}
      {type === 'buy' &&
        roomType === '3room' &&
        priceFrom! <= '8499000' &&
        priceTo! >= '8499000' &&
        subway === 'Обухово' && (
          <div className={b('block')}>
            <img src={require('../../shared/kupit_77.webp')} className={b('block-img')}></img>
            <div className={b('block-text')}>
              <div className={b('block-main')}>
                <div className={b('main')}>
                  <div className={b('block-title')}>77,6 м(кв.), 3-комнатная</div>
                  <div className={b('block-info')}>4 этаж из 4</div>
                  <div className={b('block-info')}>Колпино, проспект Ленина, 9/15</div>
                  <div className={b('block-info')}>ст. м. Обухово</div>
                </div>
                <div className={b('block-price')}>
                  <div className={b('price')}>8 499 000 ₽</div>
                  <div className={b('meter')}>109 523 ₽ за м(кв.)</div>
                </div>
              </div>
              <div className={b('block-description')}>
                Арт. 13516614 Просторная! 3-ех комнатная квартира в Сталинском доме!!! Это отличный дом для семьи или
                для сдачи в аренду ценителям комфортного жилья.
              </div>
              <div className={b('block-buttons')}>
                <button className={b('button')} onClick={() => alert('Аренда прошла успешно.')}>
                  Аренда
                </button>
              </div>
            </div>
          </div>
        )}
      {type === 'rent' &&
        roomType === '1room' &&
        priceFrom! <= '31000' &&
        priceTo! >= '31000' &&
        subway === 'Комендантский проспект' && (
          <div className={b('block')}>
            <img src={require('../../shared/snyat_50.webp')} className={b('block-img')}></img>
            <div className={b('block-text')}>
              <div className={b('block-main')}>
                <div className={b('main')}>
                  <div className={b('block-title')}>50 м(кв.), 1-комнатная</div>
                  <div className={b('block-info')}>ЖК "На Королёва", 10 этаж из 19</div>
                  <div className={b('block-info')}>Проспект Королёва, 62</div>
                  <div className={b('block-info')}>ст. м. Комендантский проспект</div>
                </div>
                <div className={b('block-price')}>
                  <div className={b('price')}>31 000 ₽/мес.</div>
                </div>
              </div>
              <div className={b('block-description')}>
                Квартира сдаётся с сервисом Аренда, а значит всё для вас: - без залога; - без единоразовой комиссии; - с
                поддержкой от наших специалистов в процессе проживания.
              </div>
              <div className={b('block-buttons')}>
                <button className={b('button')} onClick={() => alert('Аренда прошла успешно.')}>
                  Аренда
                </button>
              </div>
            </div>
          </div>
        )}
      {type === 'rent' &&
        roomType === '3room' &&
        priceFrom! <= '24000' &&
        priceTo! >= '24000' &&
        subway === 'Площадь Восстания' && (
          <div className={b('block')}>
            <img src={require('../../shared/snyat_60.webp')} className={b('block-img')}></img>
            <div className={b('block-text')}>
              <div className={b('block-main')}>
                <div className={b('main')}>
                  <div className={b('block-title')}>60 м(кв.), 3-комнатная</div>
                  <div className={b('block-info')}>9 этаж из 9</div>
                  <div className={b('block-info')}>Северный проспект, 12</div>
                  <div className={b('block-info')}>ст. м. Площадь Восстания</div>
                </div>
                <div className={b('block-price')}>
                  <div className={b('price')}>24 000 ₽/месяц</div>
                </div>
              </div>
              <div className={b('block-description')}>
                ID 3724 - пожалуйста, сообщите этот номер менеджеру. Предлагается в аренду треххкомнатная квартира на
                Северном проспекте.Расположена на 9/9 этажного дома. Аккуратный подъезд. Общая
              </div>
              <div className={b('block-buttons')}>
                <button className={b('button')} onClick={() => alert('Аренда прошла успешно.')}>
                  Аренда
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Advertisement
