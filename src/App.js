import './App.scss';
import './assets/sass/main.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div class="content">
          <Banner />
          Content
        </div>
        <sidebar className="sidebar">
          sidebar
        </sidebar>
      </main>
    </div>
  );
}

export default App;
