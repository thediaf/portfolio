import './App.css';
import NavBar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Works from './component/Works';
import Footer from './component/Footer';
import Contact from './component/Contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <div className="container mx-auto">
        <BrowserRouter>
          <NavBar />
          <main>
            <Home />
            <About />
            <Skill />
            <Works />
            <Contact />
            <Footer />
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
