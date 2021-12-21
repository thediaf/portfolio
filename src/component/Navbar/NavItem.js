import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({link, title, closeMobileMenu}) => {

    return (
        <NavLink
                to={link}
                spy={"true"}
                smooth={"true"} 
                duration={500}
                onClick={closeMobileMenu}
                className="my-3 text-gray-900 cursor-pointer dark:text-gray-200 hover:border-gray-900 dark:border-gray-800  dark:hover:border-white md:mx-4 md:my-0 md:border-b-2 transition duration-300 delay-200 ease-linear" 
        >
            {title}
        </NavLink>
                        
    );
}

export default NavItem;