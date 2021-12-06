import React from "react";
import './Works.css';
import { Element } from "react-scroll";
import Reveal from 'react-reveal/Reveal';

const Works = () => {
    return (
        <Reveal effect="fadeInUp">
        <Element className="works md:min-h-screen" id="works" name="works">
            <div className="title right-title pr-10 text-3xl">
               my works
            </div>
            <div className="mb-3 pb-5 px-10 gap-4">
                <div className="md:flex md:mr-5">
                    <div className="flex-1 projecte h-64 m-2">
                        <img src="images/PO-UGB.png" alt="my picture" className="flex-1 transform h-64 z-auto hover:opacity-30" />
                        <div className="projecte-overlay"></div>
                        <div className="projecte-content px-7">
                            <div>
                                <h1 className="text-2xl">Plateforme d'opportinute</h1>
                            </div>
                            <div>
                                <p>
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                                <span>CodeIgniter | Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 projecte h-64 m-2">
                        <img src="images/PO-UGB.png" alt="my picture" className="flex-1 transform h-64 z-auto hover:opacity-30" />
                        <div className="projecte-overlay"></div>
                        <div className="projecte-content px-7">
                            <div>
                                <h1 className="text-2xl">Plateforme d'opportinute</h1>
                            </div>
                            <div>
                                <p>
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                                <span>CodeIgniter | Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 projecte h-64 m-2">
                        <img src="images/PO-UGB.png" alt="my picture" className="flex-1 transform h-64 z-auto hover:opacity-30" />
                        <div className="projecte-overlay"></div>
                        <div className="projecte-content px-7">
                            <div>
                                <h1 className="text-2xl">Plateforme d'opportinute</h1>
                            </div>
                            <div>
                                <p>
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                                <span>CodeIgniter | Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:mr-5">
                    <div className="flex-1 projecte h-64 m-2">
                        <img src="images/PO-UGB.png" alt="my picture" className="flex-1 transform h-64 z-auto hover:opacity-30" />
                        <div className="projecte-overlay"></div>
                        <div className="projecte-content px-7">
                            <div>
                                <h1 className="text-2xl">Plateforme d'opportinute</h1>
                            </div>
                            <div>
                                <p>
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                                <span>CodeIgniter | Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 projecte h-64 m-2">
                        <img src="images/PO-UGB.png" alt="my picture" className="flex-1 transform h-64 z-auto hover:opacity-30" />
                        <div className="projecte-overlay"></div>
                        <div className="projecte-content px-7">
                            <div>
                                <h1 className="text-2xl">Plateforme d'opportinute</h1>
                            </div>
                            <div>
                                <p>
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                                <span>CodeIgniter | Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 projecte h-64 m-2">
                        <img src="images/PO-UGB.png" alt="my picture" className="flex-1 transform h-64 z-auto hover:opacity-30" />
                        <div className="projecte-overlay"></div>
                        <div className="projecte-content px-7">
                            <div>
                                <h1 className="text-2xl">Plateforme d'opportinute</h1>
                            </div>
                            <div>
                                <p>
                                    Plateforme d'offres de stages et d'emplois pour les 
                                    étudiants de l’université Gaston Berger
                                </p>
                                <span>CodeIgniter | Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
        </Reveal>
    )
}

export default Works;