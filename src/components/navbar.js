import React from 'react';

// Assets
import msg_icon from '../img/icon_messenger.png';
import user_icon from '../img/icon_user.png';
import logo from '../img/bluedot_logo.png';


const Navbar = () => {
  return(
    <nav className="navbar">
      <a className="navbar__logo" href="/">
        <img src={logo} alt="logo" />
      </a>
    </nav>
  );
}

export default Navbar