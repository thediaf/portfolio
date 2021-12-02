import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Works from './component/Works';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container mx-auto">
        <Home />
        <About />
        <Skill />
        <Works />  
        <Footer />
      </div>
    </div>
  );
}

export default App;
