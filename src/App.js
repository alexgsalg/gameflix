import { useState } from 'react';
import './App.scss';
import './assets/sass/main.scss';

import gamelist from './api/freegame.json'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

function App() {
  const games = gamelist.games;

  const [countdown, setCountdown] = useState(true);
  // const [gameArray, setGameArray] = useState(games);

  const filteredGames = games.filter(item => item.id <= 10);
  console.log(filteredGames)


  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className="wrapper">
          <Sidebar games={games} />
          <div className="content">
            {countdown ? <Banner setCountdown={setCountdown} /> : null}
            <div className="gamegrid">
              {filteredGames.map(item => {
                return (
                  <Card item={item} />
                )
              })}
            </div>

            Content
                </div>
        </div>
      </main>
    </div >
  );
}

export default App;
