import React, { useState, useEffect } from 'react';

function Journal(props) {
  const [info, setInfo] = useState({});
  const [active, setActive] = useState(false);
  const message = [
    'Today, visit of the dunes, we saw some sand.',
    'Today, visit the dunes, we saw some sand and rocks.',
    'Today, visit the dunes, we saw some rocks.',
    'Today, visit a crater, we saw some sand.',
    'Today, visit a crater, we saw some rocks.',
    'Today, visit a crater, we saw some sand and rocks.',
  ];
  let random = Math.floor(Math.random() * message.length);
  let random2 = Math.floor(Math.random() * info.length);

  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=TE7SOqpiTQuZWMnEiL4P98Xl1buD5EFL8Rg3KcG7')
      .then((resp) => resp.json())
      .then((data) => {
        let toutImage = [];
        const image = data.photos.map((contenue) => toutImage.push(contenue.img_src));
        setInfo(toutImage);
        setActive(!active);
      });
  }, []);
  console.log(random2);
  return (
    <div>
      {active && (
        <div className="journalContenair">
          <h1 className="journalTitre">{props.semaine[0]}</h1>
          <img className="journalImage" src={info[random2]} alt={info.length} />
          <p className="journalMessage">
            <strong>Daily message :</strong>
            {message[random]}{' '}
          </p>
          <h2 className="journalDate">{props.semaine[1]}</h2>
        </div>
      )}

      {!active && (
        <div className="journalContenairLoad">
          <img className="journalDance" src="https://media1.giphy.com/media/dt54M1Cz0XkWtGJ13m/giphy.gif" alt="planette" />
          <div className="journalChargement"> loading... </div>
        </div>
      )}
    </div>
  );
}

export default Journal;
