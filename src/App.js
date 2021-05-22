import { useState } from 'react';
import './App.scss';
import './assets/sass/main.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  const [countdown, setCountdown] = useState(true);

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className="wrapper">
          <div className="content">
            {countdown ? <Banner setCountdown={setCountdown} /> : null}

            Content
          </div>
          {/* <sidebar className="sidebar">
            sidebar
          </sidebar> */}
        </div>
      </main>
    </div>
  );
}

export default App;
