import React from 'react';
import { Element } from "react-scroll";
import language1 from "../../images/php.png"
import language2 from "../../images/php.png"
import language3 from "../../images/php.png"
import language4 from "../../images/php.png"
import framework1 from "../../images/php.png"
import framework2 from "../../images/php.png"
import framework3 from "../../images/php.png"
import framework4 from "../../images/php.png"
import database1 from "../../images/oracle.png"
import database2 from "../../images/oracle.png"
import database3 from "../../images/oracle.png"
import database4 from "../../images/oracle.png"
import tool1 from "../../images/git.png"
import tool2 from "../../images/git.png"
import tool3 from "../../images/git.png"
import tool4 from "../../images/git.png"

const Skill = () =>{
    return (
        <div className=" flex justify-center">
        <Element className="skill" id="skills" name="skills">
            <div className="title left-title pl-10 text-3xl">
                skill
            </div>
            <div className="mb-3 md:ml-5 pb-5 px-7 text-justify gap-4">
                <p>Hello! I'm Diafra Soumare, a passionate software engineer. I develop web application and design database.</p>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Languages</span>
                    <div className="flex flex-wrap">
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ language1 } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ language2 } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ language3 } alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ language4 } alt="PHP" 
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
                            <img src={ framework1} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ framework2} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ framework3} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ framework4} alt="PHP" 
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
                            <img src={ database1} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ database2} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={ database3} alt="PHP" 
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
                            <img src={  tool1} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={  tool2} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={  tool3} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                        <div className="w-auto md:h-28 flex justify-center p-5 md:p-0 mx-3 my-5 animate-wiggle md:flex-1 bg-white shadow rounded-lg">
                            <img src={  tool4} alt="PHP" 
                                className=" w-20 md:w-24 m-auto transition duration-500 
                                ease-in transform " 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
        </div>
    )
}

export default Skill;