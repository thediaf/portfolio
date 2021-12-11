import React from "react";
import { Element } from "react-scroll";
import { FaFacebookF, FaGithub} from 'react-icons/fa';

const Works = () => {
    return (
        <Element className="works" id="works" name="works">
            <div className="title right-title pr-10 text-3xl">
               my works
            </div>
            <div className="mb-3 pb-5 px-7  gap-4">
                <div className="flex justify-center items-center flex-wrap md:mr-5">
                    <figure className="md:flex lg:w-4/5 my-5 md:p-0">
                        <img src="images/PO-UGB.png" alt="my picture" 
                            className="-mb-5 md:mb-0 transform h-56 lg:h-64 self-center hover:opacity-30"
                        />
                        <div className="pt-9 px-4 md:p-16 md:pl-16 md:-ml-12 text-center shadow-lg rounded-xl h-80 md:text-left space-y-4">
                            <blockquote className="text-center">
                                <h1 className="text-2xl font-semibold">Plateforme d'opportinute</h1>
                                <p className="">
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-gray-500 flex justify-center p-3 m-auto   ">
                                    <a href="">
                                        <FaFacebookF className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a> 
                                    <a href="">
                                        <FaGithub className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className="md:flex flex-row-reverse lg:w-4/5 my-5 md:p-0">
                        <img src="images/PO-UGB.png" alt="my picture" 
                            className="-mb-5 md:mb-0 transform h-56 lg:h-64 self-center hover:opacity-30"
                        />
                        <div className="pt-9 px-4 md:p-16 md:pl-16 md:-mr-12 text-center shadow-lg rounded-xl h-80 md:text-left space-y-4">
                            <blockquote className="text-center">
                                <h1 className="text-2xl font-semibold">Plateforme d'opportinute</h1>
                                <p className="">
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-gray-500 flex justify-center p-3 m-auto   ">
                                    <a href="">
                                        <FaFacebookF className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a> 
                                    <a href="">
                                        <FaGithub className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className="md:flex lg:w-4/5 my-5 md:p-0">
                        <img src="images/PO-UGB.png" alt="my picture" 
                            className="-mb-5 md:mb-0 transform h-56 lg:h-64 self-center hover:opacity-30"
                        />
                        <div className="pt-9 px-4 md:p-16 md:pl-16 md:-ml-12 text-center shadow-lg rounded-xl h-80 md:text-left space-y-4">
                            <blockquote className="text-center">
                                <h1 className="text-2xl font-semibold">Plateforme d'opportinute</h1>
                                <p className="">
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-gray-500 flex justify-center p-3 m-auto   ">
                                    <a href="">
                                        <FaFacebookF className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a> 
                                    <a href="">
                                        <FaGithub className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                    <figure className="md:flex flex-row-reverse lg:w-4/5 my-5 md:p-0">
                        <img src="images/PO-UGB.png" alt="my picture" 
                            className="-mb-5 md:mb-0 transform h-56 lg:h-64 self-center hover:opacity-30"
                        />
                        <div className="pt-9 px-4 md:p-16 md:pl-16 md:-mr-12 text-center shadow-lg rounded-xl h-80 md:text-left space-y-4">
                            <blockquote className="text-center">
                                <h1 className="text-2xl font-semibold">Plateforme d'opportinute</h1>
                                <p className="">
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-gray-500 flex justify-center p-3 m-auto   ">
                                    <a href="">
                                        <FaFacebookF className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
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