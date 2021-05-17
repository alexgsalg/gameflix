import React from 'react'

import { ReactComponent as Clock } from '../assets/icons/Clock.svg';

function Banner() {
  return (
    <div className="banner">
      <div className="banner_header">
        <h2 className="banner_header__title">
          Aproveite agora
        </h2>
        <p>Pacote de 10 jogos e DLC's</p>
      </div>
      <div className="banner_count">
        <p className="banner_count__title">Finaliza em:</p>
        <div className="banner__couter">
          <span>
            <Clock />
          </span>
          <p>00:10:00</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;