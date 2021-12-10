import './App.css';
import NavBar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Skill from './component/Skill/Skill';
import Works from './component/Work/Works';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
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
