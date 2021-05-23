import React from 'react'


function Card({ item }) {
  return (
    <div className="game">
      <img src={item.thumbnail} alt="Game name" className="game__img" />
      <p className="game__title">{item.title}</p>
      <p className="game__genre">{item.genre}</p>
    </div>
  )
}

export default Card
