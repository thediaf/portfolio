import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({link, title, closeMobileMenu}) => {

    return (
        <Link
                to={link}
                spy={true}
                smooth={true} 
                duration={500}
                onClick={closeMobileMenu}
                className="my-3 text-gray-900 cursor-pointer dark:text-gray-200 hover:border-gray-900 dark:hover:border-white md:mx-4 md:my-0 md:border-b-2 transition duration-300 delay-300 ease-linear"    
        >
            {title}
        </Link>
                        
    );
}

export default NavLink;