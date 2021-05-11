import React from 'react';
import './Uranus.css';
import Header from './component/Header';
import Culture from './component/Culture.jsx';
import Meteo from './component/Meteo';
import ALaUne from './component/ALaUne';
import Nav from './component/Nav';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Mars.css';
import Robot from './component/Robot';

import './App.css';

function App() {
  const robotInfo = [
    {
      image: './src/perseverance-NASA-.jpg',
      description:
        "Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the Jezero crater on Mars as part of NASA's Mars 2020 mission.",
      robot: 'https://robohash.org/alien',
      avatar: 'Avatar de Perseverance',
      end: false,
    },
    {
      image: './src/ingenuity.jpg',
      description: "Ingenuity is a small robotic solar helicopter operating on Mars as part of NASA's Mars 2020 mission.",
      robot: 'https://robohash.org/robot',
      avatar: 'Avatar de ingenuity',
      end: true,
    },
  ];

  return (
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <ALaUne />
        </Route>
        <Route path="/Culture">
          <Culture />
        </Route>
        <Route path="/Meteo">
          <Meteo />
        </Route>
        <Route path="/Robot">
          {robotInfo.map((text) => (
            <Robot {...text} />
          ))}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
