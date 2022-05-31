import React from 'react'
import './Footer.scss'
import block from 'bem-cn'

const Footer: React.FC = () => {
  const b = block('footer')
  return (
    <footer className={b()}>
      <div className={b('text')}>2022 by Аренда</div>
    </footer>
  )
}

export default Footer
