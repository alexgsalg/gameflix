import { useState, useEffect } from 'react';
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
  const [filteredGames, setFilteredGames] = useState(games.filter(item => item.id <= 10));
  const [gameGenre, setGameGenre] = useState("All");
  const [loadMore, setLoadMore] = useState(12);


  const handleLoadMore = () => {
    setLoadMore(loadMore + 12)
  }


  useEffect(() => {
    if (gameGenre === "All") {
      setFilteredGames(games.filter(item => item.id <= loadMore))
    } else {
      setFilteredGames(games.filter(item => item.genre === gameGenre).slice(0, loadMore))
    }

  }, [gameGenre, loadMore])

  let genreArray = [];
  games.map(item => {
    if (!genreArray.includes(item.genre)) {
      genreArray.push(item.genre)
    }
    return genreArray
  })

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className="wrapper">
          <Sidebar games={games}
            genreArray={genreArray}
            setGameGenre={setGameGenre}
            gameGenre={gameGenre}
            setLoadMore={setLoadMore}
          />
          <div className="content">
            {countdown ? <Banner setCountdown={setCountdown} /> : null}
            <div className="gamegrid">
              {filteredGames.map((item) => {
                return (
                  <Card item={item} key={item.id} />
                )
              })}
            </div>
            <div className={`button-container ${filteredGames.length < 12 ? 'disabled' : ''}`}>
              <button className="button" onClick={() => { handleLoadMore() }}>Load More</button>
            </div>


          </div>
        </div>
      </main>
    </div >
  );
}

export default App;
