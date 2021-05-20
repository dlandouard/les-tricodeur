import React, { useState, useEffect } from 'react';
import './Uranus.css';
import Header from './component/Header';
import Culture from './component/Culture.jsx';
import Journal from './component/journal';
import Meteo from './component/Meteo';
import ALaUne from './component/ALaUne';
import Nav from './component/Nav';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Mars.css';
import Robot from './component/Robot';
import Footer from './component/Footer';

import './App.css';

function App() {
  const [maPorte, setMaPorte] = useState(false);

  const robotInfo = [
    {
      image: './image/perseverance-NASA-.jpg',
      description:
        "Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the Jezero crater on Mars as part of NASA's Mars 2020 mission.",
      robot: 'https://robohash.org/alien',
      avatar: 'Avatar of Perseverance',
      end: false,
    },
    {
      image: './image/ingenuity.jpg',
      description: "Ingenuity is a small robotic solar helicopter operating on Mars as part of NASA's Mars 2020 mission.",
      robot: 'https://robohash.org/robot',
      avatar: 'Avatar of Ingenuity',
      end: true,
    },
  ];

  return (
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <ALaUne {...robotInfo} maPorte={maPorte} />
        </Route>
        <Route path="/Culture">
          <Culture />
        </Route>
        <Route path="/Meteo">
          <Meteo />
        </Route>
        <Route path="/Robot">
          {robotInfo.map((text) => (
            <Robot {...text} setMaPorte={setMaPorte} />
          ))}
        </Route>
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
