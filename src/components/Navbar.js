import React from 'react'

//Images
import { ReactComponent as Search } from '../assets/icons/Search.svg';
import { ReactComponent as Discount } from '../assets/icons/Discount.svg';
import Avatar from '../assets/images/Avatar.jpg'
import Logo from '../assets/images/joystick.png'

function Navbar() {

  const userName = 'Alex Salgado';
  return (
    <header className="navbar">
      <div className="wrapper">
        <img src={Logo} className="navbar__logo" alt="Logo" />
        <div className="navbar_actionbar">
          <form className="navbar_search">

            <input type="text" name="search'" id="search" className="navbar_search__input" placeholder="Search game..." />
            <button className="navbar_search__btn"><Search /></button>
          </form>
          <nav className="navbar_menu">
            <a href="#" className="navbar_menu__link"><Discount /> Discounts</a>
          </nav>
        </div>
        <div className="navbar_user">
          <p className="navbar_user__name">Bem Vindo, <span>{userName}</span></p>
          <img src={Avatar} className="navbar_user__avatar" alt="Avatar" />
        </div>
      </div>
    </header>
  )
}
export default Navbar;
