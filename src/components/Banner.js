import { React, useEffect, useState } from 'react';
import Countdown from "react-countdown";

import { ReactComponent as Clock } from '../assets/icons/Clock.svg';
import money from '../assets/images/money.png';

function Banner() {

  const timeSet = 2000;
  // const [timeToChance, setTimeToChance] = useState(timeSet);
  // const [bannerVisible, setBannerVisible] = useState(true);
  const Completionist = () => <span>Uhhh too late!</span>;
  const [counter, setCounter] = useState(60);

  const timeUp = document.querySelector('.banner_couter__number span');

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      return <span>{hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</span>;
    }
  };


  useEffect(() => {
    const timer = () =>
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);

  }, [counter]);

  return (
    <>

      <div className="banner">
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
            {timeUp ?? console.log('deu')}
            <p className="banner_couter__number">
              {/* <Countdown date={Date.now() + timeSet} renderer={renderer} /> */}
              {counter}</p>

          </div>
        </div>
        <img src={money} className="banner__img" />

      </div>

    </>
  )
}

export default Banner;