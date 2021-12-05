import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Works from './component/Works';
import Footer from './component/Footer';
import Contact from './component/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <div className="container mx-auto">
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="#about" element={<About />}/>
                <Route path="#skill" element={<Skill />} />
                <Route path="#works" element={<Works />} />
                <Route path="#contact" element={<Contact />} />
              </Route>
            </Routes>
          <Footer />
          
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
