import React from 'react';

// Assets
import msg_icon from '../img/icon_messenger.png';
import user_icon from '../img/icon_user.png';
import logo from '../img/bluedot_logo.png';

const Navbar = () => {
  return(
    <nav className="navbar">
      <a className="navbar__logo" href="#">
        <img src={logo} alt="logo" />
      </a>

      <ul className="nav-links">
        <li className="nav-links__item"><a className="nav-links__link" href="#">Dashboard</a></li>
        <li className="nav-links__item"><a className="nav-links__link" href="#">Zaproszenia</a></li>
        <li className="nav-links__item"><a className="nav-links__link" href="#">Wiadomości</a></li>
        <li className="nav-links__item"><a className="nav-links__link nav-links__icon" href="#"><img src={msg_icon} alt="messenger" /></a></li>
        <li className="nav-links__item"><a className="nav-links__link nav-links__icon" href="#"><img src={user_icon} alt="user" /></a></li>
      </ul>
    </nav>
  );
}

export default Navbar