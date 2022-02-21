import React, { useEffect, useState } from 'react';

import { ReactComponent as Clock } from '../assets/icons/Clock.svg';
import money from '../assets/images/money.png';

function Banner({ setCountdown }) {


  const inminutes = 25;

  const [timer, setTimer] = useState(inminutes * 60);
  const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
  const seconds = Math.floor(timer % 60).toString().padStart(2, '0');

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(timer => {
        if (timer > 0) {
          return timer - 1;
        } else {
          setCountdown(false)
        }

      })
    }, 1000)
    return () => {
      clearInterval(timerInterval);
    };
  })

  return (

    <button className="banner">
      <div className="banner_header">
        <h2 className="banner_header__title">
          Aproveite agora
        </h2>
        <p>Pacote de 10 jogos e DLC's</p>
      </div>
      <div className="banner_count">
        <p className="banner_count__title">Finaliza em:</p>
        <div className="banner_couter">
          <span className="banner_couter__icon">
            <Clock />
          </span>
          <p className="banner_couter__number">
            {/* {timer} */}
            {minutes}:{seconds}
          </p>

        </div>
      </div>
      <img src={money} className="banner__img" alt="banner" />

    </button>

  )
}

export default Banner;
