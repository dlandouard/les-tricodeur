import React, { useState, useEffect } from 'react';
import './Robot.css';
import { useHistory } from 'react-router-dom';

function Robot(props) {
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
  console.log(props);
  console.log(props.setMaPorte);
  return (
    <div className="robotContainer">
      <div className={porte ? 'porteActive' : 'porteInacive'}></div>
      <div className={porte ? 'porteActive2' : 'porteInacive'}></div>
      <div className={props.detect ? 'porteActive3' : 'porteInacive'}></div>
      <div className={props.detect ? 'porteActive4' : 'porteInacive'}></div>
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
