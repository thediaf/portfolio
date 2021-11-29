import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
      <Home />
      <About />
      </div>
    </div>
  );
}

export default App;
