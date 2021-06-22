import React from 'react'

function Card({ item }) {

  return (
    <div className="game">
      <img src={item.thumbnail} alt="Game name" className="game__img" />
      <div className="game__overlay"></div>
      <p className="game__title">{item.title}</p>
      <p className="game__genre">{item.genre}</p>
      <a href={item.game_url} className="game__btn">Download</a>
    </div>
  )
}

export default Card
