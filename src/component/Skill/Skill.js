import React from 'react';
import { Element } from "react-scroll";
import { Slide } from "react-awesome-reveal"

import php from "../../images/php.png"
import javascript from "../../images/javascript.png"
import sql from "../../images/sql.png"
import html from "../../images/html.png"
import css from "../../images/css.png"
import symfony from "../../images/symfony.png"
import react from "../../images/react.png"
import codeigniter from "../../images/codeigniter.png"
import tailwind from "../../images/tailwind.png"
import bootstrap from "../../images/bootstrap.png"
import jquery from "../../images/jquery.png"
import mysql from "../../images/mysql.png"
import oracle from "../../images/oracle.png"
import postgre from "../../images/postgres.png"
import database4 from "../../images/oracle.png"
import git from "../../images/git.png"
import npm from "../../images/npm.png"
import composer from "../../images/composer.png"
import linux from "../../images/linux.png"

const Skill = () =>{
    return (
        <div className=" flex justify-center wow slideInLeft">
        <Element className="skill" id="skills" name="skills">
             <div className="title left-title pl-10 text-3xl">
                my skills
            </div>
            <div className="mb-3 md:ml-5 pb-5 px-7 text-justify gap-4">
            <Slide delay={100} duration={1000} direction={"left"} triggerOnce>
            <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Languages</span>
                    <div className="flex flex-wrap">
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ php } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ javascript } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ sql } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ css } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ html } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Frameworks and libraries</span>
                    <div className="flex flex-wrap my-3">
                    <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ symfony} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ react} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ codeigniter} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ tailwind} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ bootstrap } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ jquery } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Databases</span>
                    <div className="flex flex-wrap my-3">
                    <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ mysql} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ oracle} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ postgre} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ database4} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Tools</span>
                    <div className="flex flex-wrap my-3">
                    <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={  git} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={  npm} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ composer } alt="PHP" 
                                className=" w-20  m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={  linux } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                    </div>
                </div>
            </Slide>
            </div>
        </Element>
        </div>
    )
}

export default Skill;