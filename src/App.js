import React, { useState } from 'react';
import './App.css';

import Topo from './components/Topo';
import Banner from './components/Banner';
import Experiencia from './components/Experiencia';
import Rodape from './components/Rodape';

function App() {
  let dark = 'dark-theme';
  let light = 'light-theme';

  let sun = 'assets/sun.png';
  let moon = 'assets/moon.png';

  const[astroImg, setAstroImg] = useState(true);

  const[darkMode, setDarkMode] = useState(true);

  function trocaMode(){
    setDarkMode(!darkMode);
    setAstroImg(!astroImg);
  }

  return (
    <div className="App" id={darkMode ? light : dark}>
      
      <Topo
      button={trocaMode}
      astro={astroImg ? moon : sun}/>
      <Banner />
      <Experiencia tema={darkMode}/>
      <Rodape />
    </div>      
  );
}

export default App;
