import React, { useState, useEffect } from 'react';
import './Robot.css';
import { useHistory } from 'react-router-dom';

function Robot(props, changechange) {
  const history = useHistory();
  const [porte, setPorte] = useState(false);

  useEffect(() => {}, []);

  const backPage = () => {
    setPorte(!porte);
    setInterval(function () {
      setPorte(false);
      history.goBack();
    }, 3000);
  };
console.log(changechange)
  return (
    <div className="robotContainer">
      <div className={porte ? 'porteActive' : 'porteInacive'}></div>
      <section className="robotAlign">
        <img src={props.image} className="robotPerseverance" />
        <section className="robotFlex">
          <p className="robotDescription">{props.description}</p>
          <figure className="robotFigure">
            <img src={props.robot} className="robotAvatar" />
            <figcaption className="robotDamien">{props.avatar}</figcaption>
          </figure>
        </section>
      </section>
      <button className={props.end ? 'robotBackpage' : 'robotBackpageoff'} onClick={backPage}>
        retour
      </button>
    </div>
  );
}

export default Robot;
