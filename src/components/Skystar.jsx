import { useEffect, useState } from 'react';

import { Style, Size, Opacity } from '../assets/constants';
import Butterfly from './Butterfly';
import imgCity from '../assets/img/pole.png';

const Skystar = () => {
  const countStars = 400;
  const [widthWindow, setWidthWindow] = useState(window.innerWidth - 20);
  const [heightWindow, setHeightWindow] = useState(window.innerHeight - 20);
  const handleResize = () => {
    setWidthWindow(window.innerWidth);
    setHeightWindow(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    init();
  });
  const init = () => {
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let sky = document.querySelector('.constellation');
    // stars
    let star = '';
    for (let i = 0; i < countStars; i++) {
      star +=
        "<span class='star " +
        Style[getRandomArbitrary(0, 4)] +
        ' ' +
        Opacity[getRandomArbitrary(0, 6)] +
        ' ' +
        Size[getRandomArbitrary(0, 5)] +
        "' style='animation-delay: ." +
        getRandomArbitrary(0, 9) +
        's; left: ' +
        getRandomArbitrary(0, widthWindow) +
        'px; top: ' +
        getRandomArbitrary(0, heightWindow) +
        "px;'></span>";
    }

    sky.innerHTML = star;
    //meteors
    let number = 5000;

    setTimeout(function () {
      getMeteor();
    }, number);

    function getMeteor() {
      setTimeout(getMeteor, number);
      number = getRandomArbitrary(5000, 10000);
      var meteor = "<div class='meteor " + Style[getRandomArbitrary(0, 4)] + "'></div>";
      document.getElementsByClassName('meteorRain')[0].innerHTML = meteor;
      setTimeout(function () {
        document.getElementsByClassName('meteorRain')[0].innerHTML = '';
      }, 1000);
    }
  };
  return (
    <div id="skystar">
      <div className="sky"></div>
      <div className="constellation"></div>
      <div className="luna">
        <div className="textura"></div>
      </div>
      <div className="meteorRain"></div>
      <div className="glade">
        <img src={imgCity} alt="img-city-black"></img>
      </div>
      <div className="arrow"></div>
      <Butterfly />
    </div>
  );
};
export default Skystar;
