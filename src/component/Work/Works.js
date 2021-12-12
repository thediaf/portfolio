import React from "react";
import { Element } from "react-scroll";
import { FaLink, FaGithub} from 'react-icons/fa';
import projecte1 from "../../images/PO-UGB.png"
import projecte2 from "../../images/PO-UGB.png"
import projecte3 from "../../images/PO-UGB.png"
import projecte4 from "../../images/PO-UGB.png"
import projecte5 from "../../images/PO-UGB.png"
import projecte6 from "../../images/PO-UGB.png"

const Works = () => {
    return (
        <Element className="works" id="works" name="works">
            <div className="title right-title pr-10 text-3xl">
               my works
            </div>
            <div className="mb-3 pb-5 px-7  gap-4">
                <div className="flex justify-center items-center flex-wrap md:mr-5">
                    <figure className="md:flex lg:w-4/5 my-5 md:p-0">
                        <img src={ projecte1} alt="my picture" 
                            className="-mb-5 md:mb-0 transform h-56 lg:h-64 self-center hover:opacity-30"
                        />
                        <div className="pt-9 px-4 md:p-16 md:pl-16 md:-ml-12 text-center shadow-lg rounded-xl h-80 md:text-left space-y-4">
                            <blockquote className="text-center">
                                <h1 className="text-2xl font-semibold">Daaddo Vdp</h1>
                                <p className="">
                                    Showcase website for plastics wastes recycling startup in Mauritania
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-gray-500 flex justify-center p-3 m-auto   ">
                                    <a href="">
                                        <FaLink className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a> 
                                    <a href="">
                                        <FaGithub className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className="md:flex flex-row-reverse lg:w-4/5 my-5 md:p-0">
                        <img src={ projecte2 } alt="my picture" 
                            className="-mb-5 md:mb-0 transform h-56 lg:h-64 self-center hover:opacity-30"
                        />
                        <div className="pt-9 px-4 md:p-16 md:pl-16 md:-mr-12 text-center shadow-lg rounded-xl h-80 md:text-left space-y-4">
                            <blockquote className="text-center">
                                <h1 className="text-2xl font-semibold">Courat</h1>
                                <p className="">
                                    Contribution to the creation of the courat.net site. 
                                    An educational platform that allows students prepare for their exams 
                                    by offering them resources such as archives and course videos online,
                                    during the Covid-19 crisis
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-gray-500 flex justify-center p-3 m-auto   ">
                                    <a href="">
                                        <FaLink className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a> 
                                    <a href="">
                                        <FaGithub className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className="md:flex lg:w-4/5 my-5 md:p-0">
                        <img src={ projecte3 } alt="my picture" 
                            className="-mb-5 md:mb-0 transform h-56 lg:h-64 self-center hover:opacity-30"
                        />
                        <div className="pt-9 px-4 md:p-16 md:pl-16 md:-ml-12 text-center shadow-lg rounded-xl h-80 md:text-left space-y-4">
                            <blockquote className="text-center">
                                <h1 className="text-2xl font-semibold">Opportinuties platform</h1>
                                <p className="">
                                    Design and realization of opportunities platform. 
                                    A platform for internships, jobs and also activities such as company 
                                    visits, employability training and seminars for Gaston Berger University students.
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-gray-500 flex justify-center p-3 m-auto   ">
                                    <a href="">
                                        <FaLink className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a> 
                                    <a href="">
                                        <FaGithub className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className="md:flex flex-row-reverse lg:w-4/5 my-5 md:p-0">
                        <img src={ projecte4 } alt="my picture" 
                            className="-mb-5 md:mb-0 transform h-56 lg:h-64 self-center hover:opacity-30"
                        />
                        <div className="pt-9 px-4 md:p-16 md:pl-16 md:-mr-12 text-center shadow-lg rounded-xl h-80 md:text-left space-y-4">
                            <blockquote className="text-center">
                                <h1 className="text-2xl font-semibold">Cridem</h1>
                                <p className="">
                                    Creation of a website like cridem.org with better design and responsivity
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-gray-500 flex justify-center p-3 m-auto   ">
                                    <a href="">
                                        <FaLink className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a> 
                                    <a href="">
                                        <FaGithub className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    
                </div>
             </div>
        </Element>
    )
}

export default Works;