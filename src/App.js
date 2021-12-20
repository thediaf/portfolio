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

function App() {

  const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 3000)

//   }, []);

	const handleLoading = () => {
		setLoading(false);
	}

  	useEffect(()=>{
		window.addEventListener("load",handleLoading);
		return () => window.removeEventListener("load",handleLoading);
	},[]);

  return (
    <>
    {loading === false ? (
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
     ) : (
    	<div className="flex h-screen">
    		<TwinSpin color="rgba(0, 0, 0)" className="m-auto text-gray-900" width="100px" height="100px"  />
    	</div>
    )}
    </>
  );
}

export default App;
