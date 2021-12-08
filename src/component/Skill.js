import React from 'react';
import { Element } from "react-scroll";

const Skill = () =>{
    return (
        <div className=" flex justify-center">
        <Element className="skill lg:min-h-screen" id="skills" name="skills">
            <div className="title left-title pl-10 text-3xl">
                skill
            </div>
            <div className="mb-3 md:ml-5 pb-5 px-10 text-justify gap-4">
                <p>Hello! I'm Diafra Soumare, a passionate software engineer. I develop web application and design database.</p>
                <div className="ml-5 mt-4">
                    <span className="text-xl font-bold">Languages</span>
                    <div className="flex flex-wrap my-3">
                        <img src="images/php.png" alt="PHP" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                            ease-in transform hover:-translate-y-4 hover:scale-110" 
                        />
                        <img src="images/php.png" alt="PHP" 
                            className="shadow-lg m-3 md:m-7 w-24 transition duration-500 
                            ease-in transform hover:-translate-y-4 hover:scale-110" 
                        />
                        <img src="images/php.png" alt="PHP" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                            ease-in transform hover:-translate-y-4 hover:scale-110" 
                        />
                        <img src="images/php.png" alt="PHP" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                            ease-in transform hover:-translate-y-4 hover:scale-110" 
                        />
                        
                    </div>
                </div>
                <div className="ml-5 mt-4">
                    <span className="text-xl font-bold">Frameworks and libraries</span>
                    <div className="flex flex-wrap my-3">
                        <img src="images/php.png" alt="PHP" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                            ease-in transform hover:-translate-y-4 hover:scale-110" 
                        />
                        <img src="images/php.png" alt="PHP" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                            ease-in transform hover:-translate-y-4 hover:scale-110" 
                        />
                        <img src="images/php.png" alt="PHP" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                            ease-in transform hover:-translate-y-4 hover:scale-110" 
                        />
                        <img src="images/php.png" alt="PHP" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                            ease-in transform hover:-translate-y-4 hover:scale-110" 
                        />
                    </div>
                </div>
                <div className="ml-5 mt-4">
                    <span className="text-xl font-bold">Databases</span>
                    <div className="flex flex-wrap my-3">
                        <img src="images/oracle.png" alt="oracle" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                                ease-in transform hover:-translate-y-3 hover:scale-110" 
                        />
                        <img src="images/oracle.png" alt="oracle" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                                ease-in transform hover:-translate-y-3 hover:scale-110" 
                        />
                        <img src="images/oracle.png" alt="oracle" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                                ease-in transform hover:-translate-y-3 hover:scale-110" 
                        />
                        <img src="images/oracle.png" alt="oracle" 
                            className="m-3 md:m-7 w-24 transition duration-500 
                                ease-in transform hover:-translate-y-3 hover:scale-110" 
                        />
                    </div>
                </div>
                <div className="ml-5 mt-4">
                    <span className="text-xl font-bold">Tools</span>
                    <div className="flex flex-wrap my-3">
                        <img src="images/git.png" alt="git"
                            className="m-3 md:m-7 w-24 transition duration-500 
                                ease-in transform hover:-translate-y-3 hover:scale-110" 
                        />
                        <img src="images/git.png" alt="git"
                            className="m-3 md:m-7 w-24 transition duration-500 
                                ease-in transform hover:-translate-y-3 hover:scale-110" 
                        />
                        <img src="images/git.png" alt="git"
                            className="m-3 md:m-7 w-24 transition duration-500 
                                ease-in transform hover:-translate-y-3 hover:scale-110" 
                        />
                        <img src="images/git.png" alt="git"
                            className="m-3 md:m-7 w-24 transition duration-500 
                                ease-in transform hover:-translate-y-3 hover:scale-110" 
                        />
                    </div>
                </div>
            </div>
        </Element>
        </div>
    )
}

export default Skill;