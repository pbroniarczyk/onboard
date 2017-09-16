import React from 'react';

// Assets
import '../img/icon_messenger.png';
import '../img/icon_user.png';
import '../img/logo.png';

const Navbar = () => {
  return(
    <nav className="navbar">
      <a className="navbar__logo" href="#">
        <img src="../img/logo.png" alt="logo" />
      </a>

      <ul className="nav-links">
        <li className="nav-links__item"><a className="nav-links__link" href="#">Dashboard</a></li>
        <li className="nav-links__item"><a className="nav-links__link" href="#">Zaproszenia</a></li>
        <li className="nav-links__item"><a className="nav-links__link" href="#">Wiadomości</a></li>
        <li className="nav-links__item"><a className="nav-links__link nav-links__icon" href="#"><img src="../img/icon_messenger.png" alt="messenger" /></a></li>
        <li className="nav-links__item"><a className="nav-links__link nav-links__icon" href="#"><img src="../img/icon_user.png" alt="user" /></a></li>
      </ul>
    </nav>
  );
}

export default Navbar