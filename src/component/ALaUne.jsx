import React, { useState, useEffect } from 'react';
import Robot from './Robot';
import Journal from './journal';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function aLaUne(props) {
  const [detect, setDetect] = useState(true);

  useEffect(() => {
    let interval;
    if (props.maPorte) {
      interval = setInterval(() => {
        setDetect(props.maPorte);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [props.maPorte]);

  const semaine = [
    ['lundi', '2021/05/03'],
    ['mardi', '2021/05/04'],
    ['mercredi', '2021/05/05'],
    ['jeudi', '2021/05/06'],
    ['vendredi', '2021/05/07'],
    ['samedi', '2021/05/08'],
    ['dimanche', '2021/05/09'],
  ];
  const donnee = [props[0], props[1]];
  console.log(props.maPorte);
  return (
    <div className="ALaUnebackgroung">
      <div className={detect ? 'porteActive3' : 'porteInacive'}></div>
      <div className={detect ? 'porteActive4' : 'porteInacive'}></div>
      <Link id="ALaUneBouton" to="/Robot">
        Nos robots
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
