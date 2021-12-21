import React from 'react';

const SkillLogo = ({logo, alt}) =>{
    return (
        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white dark:bg-gray-900 shadow rounded-lg">
            <img src={ logo } alt={ alt }  loading="lazy"
                className=" w-20 md:w-24 m-auto transition duration-500 
                ease-in transform " 
            />
        </div>
                
    )
}

export default SkillLogo;