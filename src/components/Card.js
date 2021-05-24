import React, { useState } from 'react'


import { ReactComponent as Star } from '../assets/icons/Star.svg'


function Card({ item }) {
  const [favorite, SetFavorite] = useState(false)
  return (
    <div className="game">
      {/* While api doesn't have a favorite field */}
      <Star className={favorite || item.id === 1 ? 'game__favorite favorite' : 'game__favorite'} onClick={() => { SetFavorite(!favorite) }} />
      {/* <Star className={favorite ? 'game__favorite favorite' : 'game__favorite'} onClick={() => { SetFavorite(!favorite) }} /> */}
      <img src={item.thumbnail} alt="Game name" className="game__img" />
      <div className="game__overlay"></div>
      <p className="game__title">{item.title}</p>
      <p className="game__genre">{item.genre}</p>
      <a href={item.game_url} className="game__btn">Download</a>
    </div>
  )
}

export default Card
