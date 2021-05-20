import React from 'react'
import { useState } from 'react';
<<<<<<< HEAD
=======

>>>>>>> 2fc649f9975072db29f716fa372786a93bc426c6
//Images
import { ReactComponent as Logo } from '../assets/images/clapperboard.svg';
import { ReactComponent as Search } from '../assets/icons/Search.svg';
import { ReactComponent as Star } from '../assets/icons/Star.svg';
import { ReactComponent as Discount } from '../assets/icons/Discount.svg';
import Avatar from '../assets/images/Avatar.jpg'

<<<<<<< HEAD
export default function Navbar() {

  const userName = useState('Alex Salgado')
=======
function Navbar() {

  const userName = 'Alex Salgado';
>>>>>>> 2fc649f9975072db29f716fa372786a93bc426c6
  return (
    <header className="navbar">
      <div className="wrapper">
        <Logo className="navbar__logo" />
        <div className="navbar_actionbar">
          <form className="navbar_search">
<<<<<<< HEAD
            <input type="text" name="search'" id="search" className="navbar_search__input" placeholder="Search movie..." />
=======
            <input type="text" name="search'" id="search" className="navbar_search__input" placeholder="Search game..." />
>>>>>>> 2fc649f9975072db29f716fa372786a93bc426c6
            <button className="navbar_search__btn"><Search /></button>
          </form>
          <nav className="navbar_menu">
            <a href="#" className="navbar_menu__link"><Star /> Favorites</a>
            <a href="#" className="navbar_menu__link"><Discount /> Discounts</a>
          </nav>
        </div>
        <div className="navbar_user">
<<<<<<< HEAD
          <p className="navbar_user__name">Bem Vindo {userName}</p>
=======
          <p className="navbar_user__name">Bem Vindo, <span>{userName}</span></p>
>>>>>>> 2fc649f9975072db29f716fa372786a93bc426c6
          <img src={Avatar} className="navbar_user__avatar" />
        </div>
      </div>
    </header>
  )
}
<<<<<<< HEAD
=======

export default Navbar;
>>>>>>> 2fc649f9975072db29f716fa372786a93bc426c6
