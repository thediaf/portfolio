import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import About from './About';

const NavBar = () => {

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    return (
        <nav className="bg-white shadow-auto flex dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto h-24
                            flex md:justify-between md:items-center"
            >
                <div className="w-screen flex items-center justify-between">
                    <div>
                        <a href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 
                                            md:text-2xl dark:hover:text-gray-300"
                        >
                            Thediaf
                        </a>
                    </div>
                    <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200" aria-label="toggle menu" onClick={handleClick}>
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                        </button>
                    </div>
      
                </div>
            
                <div className={click ? 'items-center flex-none md:flex hidden' : 'items-center md:flex block transition ease-linear'}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link
                            className="my-1 text-gray-900 font-semibold cursor-pointer dark:text-gray-200 hover:border-gray-900 dark:hover:border-white md:mx-4 md:my-0 md:border-b-2 transition duration-300 delay-300 ease-linear"
                             
                            to="/"
                        >
                            home
                        </Link>
                        <Link
                                to="about"
                                spy={true}
                                smooth={true} 
                                duration={500}
                                className="my-1 text-gray-900 cursor-pointer dark:text-gray-200 hover:border-gray-900 dark:hover:border-white md:mx-4 md:my-0 md:border-b-2 transition duration-300 delay-300 ease-linear"    
                        >
                            about
                        </Link>
                        <Link
                                to="skills"
                                spy={true}
                                smooth={true} 
                                duration={500}  
                                className="my-1 text-gray-900 cursor-pointer dark:text-gray-200 hover:border-gray-900 dark:hover:border-white md:mx-4 md:my-0 md:border-b-2 transition duration-300 delay-300 ease-linear"  
                        >
                            skills
                        </Link>
                        <Link
                            to="works"
                            spy={true}
                            smooth={true} 
                            duration={500}
                            className="my-1 text-gray-900 cursor-pointer dark:text-gray-200 hover:border-gray-900 dark:hover:border-white md:mx-4 md:my-0 md:border-b-2 transition duration-300 delay-300 ease-linear"    
                        >
                            works
                        </Link>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true} 
                            duration={500}
                            className="my-1 text-gray-900 cursor-pointer dark:text-gray-200 hover:border-gray-900 dark:hover:border-white md:mx-4 md:my-0 md:border-b-2 transition duration-300 delay-300 ease-linear"
                        >
                                contact
                            
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;