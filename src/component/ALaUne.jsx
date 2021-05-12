import React from 'react';
import Robot from './Robot';
import Journal from './journal';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function aLaUne(props) {
  const semaine = [
    ['Monday', '2021/05/03'],
    ['Tuesday', '2021/05/04'],
    ['Wednesday', '2021/05/05'],
    ['Thursday', '2021/05/06'],
    ['Friday', '2021/05/07'],
    ['Saturday', '2021/05/08'],
    ['Sunday', '2021/05/09'],
  ];
  const donnee = [props];
  // console.log(donnee);
  return (
    <div className="ALaUnebackgroung">
      <Link id="ALaUneBouton" to="/Robot">
        Who are we ?
      </Link>
      <div className="aLaUneResponsive">
        {donnee.map((text) => (
          <Robot {...text} />
        ))}
      </div>
      {semaine.map((text) => (
        <Journal semaine={text} />
      ))}
    </div>
  );
}

export default aLaUne;
