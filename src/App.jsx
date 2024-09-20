// React
import { useState } from 'react';

// CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import MooDengFunc from './assets/components/mooDeng';
import MooDengFood from './assets/components/mooDengFood';

// Image
import watermelonImage from './assets/images/watermelon.jpg';
import pumpkinImage from './assets/images/pumpkin.jpg';
import grassImage from './assets/images/grass.jpg';

function App() {
  const [mooDengLevel, setMooDengLevel] = useState(0);
  const [size, setSize] = useState(100);

  const handleFeed = (levelValue) => {
    if (mooDengLevel < 100) {
      setMooDengLevel(currentLevel => currentLevel + levelValue);
      setSize(prevSize => prevSize + 30);
    }
    else{
      setMooDengLevel(105);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <h1>Level {mooDengLevel > 100 ? 'Max' : mooDengLevel} </h1>
        <MooDengFunc size={size} mooDengLevel={mooDengLevel} />
      </div>

      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-3 m-3">
            <MooDengFood title="watermelon" exp={5} imgURL={watermelonImage} onFeed={() => handleFeed(5)} />
          </div>
          <div className="col-3 m-3">
            <MooDengFood title="watermelon" exp={10} imgURL={pumpkinImage} onFeed={() => handleFeed(10)} />
          </div>
          <div className="col-3 m-3">
            <MooDengFood title="watermelon" exp={20} imgURL={grassImage} onFeed={() => handleFeed(20)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;