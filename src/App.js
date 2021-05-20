<<<<<<< HEAD
import './App.scss';
import './assets/sass/main.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}

export default App;
=======
import './App.scss';
import './assets/sass/main.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Banner />

      </main>
    </div>
  );
}

export default App;
>>>>>>> 2fc649f9975072db29f716fa372786a93bc426c6
