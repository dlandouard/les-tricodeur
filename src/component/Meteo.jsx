import React from 'react';
import './Meteo.css';


function Meteo() {
  return (
    <div className="meteoAll">
      <div className="meteoEncadre">
        <img
          alt="Mars Helicopter to Begin New Demo Phase"
          src="https://mars.nasa.gov/system/resources/detail_files/25790_First_selfie-1200.gif"
          className="meteoRover"
        />
      </div>

      <section className="meteoContainerOne">
        <h2 className="meteoTest">Monday, 2021/05/03</h2>
        <h3 className="meteoTest">SOL 3117</h3>
        <div className="meteoFlex">
          <p className="meteoTemp">Max: -12°C</p>
          <p className="meteoTemp">Min: -73°C</p>
        </div>
      </section>

      <section className="meteoContainer">
        <h2 className="meteoTest">Tuesday, 2021/05/04</h2>
        <h3 className="meteoTest">SOL 3118</h3>
        <div className="meteoFlex">
          <p className="meteoTemp">Max: -12°C</p>
          <p className="meteoTemp">Min: -74°C</p>
        </div>
      </section>

      <section className="meteoContainer">
        <h2 className="meteoTest">Wednesday, 2021/05/05</h2>
        <h3 className="meteoTest">SOL 3119</h3>
        <div className="meteoFlex">
          <p className="meteoTemp">Max: -11°C</p>
          <p className="meteoTemp">Min: -73°C</p>
        </div>
      </section>

      <section className="meteoContainer">
        <h2 className="meteoTest">Thursday , 2021/05/06</h2>
        <h3 className="meteoTest">SOL 3120</h3>
        <div className="meteoFlex">
          <p className="meteoTemp">Max: -12°C</p>
          <p className="meteoTemp">Min: -74°C</p>
        </div>
      </section>

      <section className="meteoContainer">
        <h2 className="meteoTest">Friday, 2021/05/07</h2>
        <h3 className="meteoTest">SOL 31121</h3>
        <div className="meteoFlex">
          <p className="meteoTemp">Max: -19°C</p>
          <p className="meteoTemp">Min: -76°C</p>
        </div>
      </section>

      <section className="meteoContainer">
        <h2 className="meteoTest">Saturday, 2021/05/08</h2>
        <h3 className="meteoTest">SOL 31122</h3>
        <div className="meteoFlex">
          <p className="meteoTemp">Max: -16°C</p>
          <p className="meteoTemp">Min: -76°C</p>
        </div>
      </section>

      <section className="meteoContainer">
        <h2 className="meteoTest">Sunday, 2021/05/09</h2>
        <h3 className="meteoTest">SOL 31123</h3>
        <div className="meteoFlex">
          <p className="meteoTemp">Max: -13°C</p>
          <p className="meteoTemp">Min: -76°C</p>
        </div>
      </section>

      <div className="meteoEncadre">
        <img alt="Ingenuity fourth flight" src="./src/ingenuity_fourth_flight.gif" className="meteoRover ingenuityMeteo" />
      </div>
    </div>
  );
}

export default Meteo;
