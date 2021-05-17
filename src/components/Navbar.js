import React from 'react'
import { useState } from 'react';
//Images
import { ReactComponent as Logo } from '../assets/images/clapperboard.svg';
import { ReactComponent as Search } from '../assets/icons/Search.svg';
import { ReactComponent as Star } from '../assets/icons/Star.svg';
import { ReactComponent as Discount } from '../assets/icons/Discount.svg';
import Avatar from '../assets/images/Avatar.jpg'

export default function Navbar() {

  const userName = useState('Alex Salgado')
  return (
    <header className="navbar">
      <div className="wrapper">
        <Logo className="navbar__logo" />
        <div className="navbar_actionbar">
          <form className="navbar_search">
            <input type="text" name="search'" id="search" className="navbar_search__input" placeholder="Search movie..." />
            <button className="navbar_search__btn"><Search /></button>
          </form>
          <nav className="navbar_menu">
            <a href="#" className="navbar_menu__link"><Star /> Favorites</a>
            <a href="#" className="navbar_menu__link"><Discount /> Discounts</a>
          </nav>
        </div>
        <div className="navbar_user">
          <p className="navbar_user__name">Bem Vindo {userName}</p>
          <img src={Avatar} className="navbar_user__avatar" />
        </div>
      </div>
    </header>
  )
}
