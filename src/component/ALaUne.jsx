import React from 'react';
import Robot from './Robot';
import Journal from './journal';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function aLaUne() {
  const semaine = [
    ['lundi', '2021/05/03'],
    ['mardi', '2021/05/04'],
    ['mercredi', '2021/05/05'],
    ['jeudi', '2021/05/06'],
    ['vendredi', '2021/05/07'],
    ['samedi', '2021/05/08'],
    ['dimanche', '2021/05/09'],
  ];

  return (
    <div className="ALaUnebackgroung">
      <Link to="/Robot"> Nos robots </Link>
      {semaine.map((text) => (
        <Journal semaine={text} />
      ))}
    </div>
  );
}

export default aLaUne;
