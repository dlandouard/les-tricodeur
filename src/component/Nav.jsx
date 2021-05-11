import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  function pageHaut() {
    window.scroll(0, 0);
  }

  return (
    <nav id="NavMenu">
      <ul id="menuContent">
        <li>
          <Link onClick={pageHaut} to="/">
            A la une
          </Link>
        </li>
        <li>
          <Link onClick={pageHaut} to="/Culture">
            Culture
          </Link>
        </li>
        <li>
          <Link onClick={pageHaut} to="/Meteo">
            Meteo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
