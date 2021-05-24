import React, {useState} from 'react'


import { ReactComponent as Star } from '../assets/icons/Star.svg'


function Card({ item }) {
  return (
    <div className="game">
      <Star className="game__favorite" />
      <img src={item.thumbnail} alt="Game name" className="game__img" />
      <div className="game__overlay"></div>
      <p className="game__title">{item.title}</p>
      <p className="game__genre">{item.genre}</p>
      <a href={item.game_url} className="game__btn">Download</a>
    </div>
  )
}

export default Card
