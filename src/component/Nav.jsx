import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  function pageHaut() {
    window.scroll(0, 0);
  }

  return (
    <nav id="NavMenu">
      <Link className="navBackground" onClick={pageHaut} to="/">
        In the News
      </Link>
      <Link className="navBackground" onClick={pageHaut} to="/Culture">
        Culture
      </Link>
      <Link className="navBackground" onClick={pageHaut} to="/Meteo">
        Weather
      </Link>
    </nav>
  );
}

export default Nav;
