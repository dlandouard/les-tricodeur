import React, { useState, useEffect } from 'react';
import Robot from './Robot';
import Journal from './journal';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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


  const history = useHistory();
  const [porte, setPorte] = useState(false);

  useEffect(() => {
    let interval;
    if (porte) {
      interval = setInterval(() => {
        history.goBack();
        props.setMaPorte(porte);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [porte]);

  const backPage = () => {
    setPorte(!porte);
  };

  const semaine = [
    ['Monday', '2021/05/03'],
    ['Tuesday', '2021/05/04'],
    ['Wednesday', '2021/05/05'],
    ['Thursday', '2021/05/06'],
    ['Friday', '2021/05/07'],
    ['Saturday', '2021/05/08'],
    ['Sunday', '2021/05/09'],
  ];
  const donnee = [props[0], props[1]];
  return (
    <div className="ALaUnebackgroung">
      <div className={detect ? 'porteActive3' : 'porteInacive'}></div>
      <div className={detect ? 'porteActive4' : 'porteInacive'}></div>
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
