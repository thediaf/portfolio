import React, {useState, useEffect} from "react";

import NavBar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Skill from './component/Skill/Skill';
import Works from './component/Work/Works';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";
import useDarkMode from "./hook/useDarkMode";

function App() {

  const [colorTheme, setTheme] = useDarkMode();
  const TwinSpinColor = colorTheme === 'light' ? 'white' : 'black'

  const [loading, setLoading] = useState(true)
	const handleLoading = () => {
		setLoading(false);
	}

  	useEffect(()=>{
		window.addEventListener("load",handleLoading);
		return () => window.removeEventListener("load",handleLoading);
	},[]);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000)

  // }, []);

  return (
    <>
        <div className="App">
    {loading === false ? (
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
     ) : (
    	<div className="flex h-screen bg-white dark:bg-gray-900">
    		<TwinSpin color={TwinSpinColor} className="m-auto" width="100px" height="100px"  />
    	</div>
    )}
          </div>

    </>
  );
}

export default App;
