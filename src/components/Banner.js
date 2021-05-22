import React, { useEffect, useState } from 'react';

import { ReactComponent as Clock } from '../assets/icons/Clock.svg';
import money from '../assets/images/money.png';

function Banner({ setCountdown }) {

  const [timer, setTimer] = useState("");

  useEffect(() => {
    const today = new Date();
    const dueDate = new Date();
    const countdownDate = dueDate.setDate(today.getDate() + 1);
    //Determined Date
    // let countdownDate = new Date("Dec 01, 2021 00:00:00").getTime();

    //Update every second
    let x = setInterval(function () {
      //Get today date and time
      let now = new Date().getTime();

      //Difference os times
      let difference = countdownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimer(
        // (days + (days > 1 ? " days " : " day ")) +
        (hours > 9 ? hours : "0" + hours) + ":" +
        (minutes > 9 ? minutes : "0" + minutes) + ":" +
        (seconds > 9 ? seconds : "0" + seconds)
      )

      if (difference < 0) {
        clearInterval(x);
        setTimer("UHH TOO LATE");
        setCountdown(false);
      }

    }, 1000)
  }, [])


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
            {timer}
          </p>

        </div>
      </div>
      <img src={money} className="banner__img" />

    </button>

  )
}

export default Banner;
