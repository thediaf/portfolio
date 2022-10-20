import React, {useState} from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import NavItem from './NavItem';
import { Rotate } from "react-awesome-reveal"
import useDarkMode from '../../hook/useDarkMode';

const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [colorTheme, setTheme] = useDarkMode();

    return (
        <nav className="bg-white shadow-auto flex dark:bg-gray-900">
            <div className="container px-6 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex md:justify-between md:items-center h-24">
                    <div className="w-screen md:w-auto flex items-center justify-between">
                        <div>
                            <a href="/" className="text-xl font-bold text-blue-900 dark:text-white hover:text-gray-700 
                                                md:text-2xl dark:hover:text-gray-300"
                            >
                                Thediaf
                            </a>
                        </div>

                        <div className='flex md:hidden'>
                            <span onClick={() => setTheme(colorTheme)} className="w-10 h-10 md:-mt-2 mx-auto my-3 md:-my-1 rounded-full text-center text-blue-900 dark:bg-gray-900 shadow-bl shadow-lg cursor-pointer dark:text-gray-50 flex justify-center items-center">
                                { colorTheme === 'light' ?
                                    <FaSun onClick={closeMobileMenu} />
                                :
                                    <FaMoon onClick={closeMobileMenu} />
                                }
                            </span>
                            <div className="flex">
                                <button type="button" 
                                    className="text-gray-500 dark:text-gray-200 transition delay-150 duration-500 transform scale-110" 
                                    aria-label="toggle menu" onClick={handleClick}
                                >
                                    {
                                        click ? 
                                            <Rotate delay={click ? 50 : 0} duration={click ? 700 : 0}>
                                                <FaTimes className="text-2xl text-gray-900 dark:text-gray-200" />
                                            </Rotate>
                                        : 
                                            <FaBars className="text-2xl text-gray-900 dark:text-gray-200" />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className={click ? 'items-center md:flex transition-all block' : 'items-center flex-none md:flex hidden'}>
                    <Rotate delay={click ? 50 : 0} duration={click ? 700 : 0}  triggerOnce>
                    <div className="flex flex-col text-center md:flex-row">
                        <NavItem link="/" title="home" closeMobileMenu={closeMobileMenu} />
                        <NavItem link="works" title="works" closeMobileMenu={closeMobileMenu} />
                        <NavItem link="skills" title="skills" closeMobileMenu={closeMobileMenu} />
                        <NavItem link="about" title="about" closeMobileMenu={closeMobileMenu} />
                        <NavItem link="contact" title="contact" closeMobileMenu={closeMobileMenu} />
                    </div>
                    <span onClick={() => setTheme(colorTheme)} className="hidden md:flex w-10 h-10 md:-mt-2 mx-auto my-3 md:-my-1 rounded-full text-center text-blue-900 dark:bg-gray-900 shadow-bl shadow-lg cursor-pointer dark:text-gray-50 justify-center items-center">
                            { colorTheme === 'light' ?
                                <FaSun onClick={closeMobileMenu} />
                            :
                                <FaMoon onClick={closeMobileMenu} />
                            }
                        </span>
                        
                    </Rotate>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;