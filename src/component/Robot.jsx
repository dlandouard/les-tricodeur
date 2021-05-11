import React from 'react';
import './Robot.css';

function Robot(props) {
  const backPage = () => {
    window.history.back();
  };

  console.log(props);

  return (
    <div className="robotContainer">
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
