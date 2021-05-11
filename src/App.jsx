import React from 'react';
import './Uranus.css';
import Culture from './component/Culture.jsx';
import Journal from './component/journal';
import './Mars.css';
import Robot from './component/Robot';

import './App.css';

function App() {
  return (
    <div>
      <Culture />
      {/* <Journal semaine={['lundi', '2021/05/03']} />
      <Journal semaine={['mardi', '2021/05/04']} />
      <Journal semaine={['mercredi', '2021/05/05']} />
      <Journal semaine={['jeudi', '2021/05/06']} />
      <Journal semaine={['vendredi', '2021/05/07']} />
      <Journal semaine={['samedi', '2021/05/08']} />
      <Journal semaine={['dimanche', '2021/05/09']} />
      <Robot /> */}
    </div>
  );
}

export default App;
