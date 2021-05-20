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
