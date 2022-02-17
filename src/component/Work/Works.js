import React from "react";
import { Element } from "react-scroll";
import { Slide } from "react-awesome-reveal"


import epcm from "../../images/epcm.png"
import daaddo from "../../images/daaddo.png"
import courat from "../../images/courat.png"
import po from "../../images/PO-UGB.png"
import cridem from "../../images/cridem.png"
import mdiforum from "../../images/mdiforum.png"
import lupin from "../../images/lupin.png"

import Project from "./Project";

const Works = () => {
    return (
        <Element className="works" id="works" name="works">
            <div className="title dark:text-gray-50 right-title pr-10 text-3xl">
               my works
            </div>
            <div className="mb-3 pb-5 px-7  gap-4">
                <Slide className="flex justify-center items-center flex-wrap md:mr-5" delay={200} duration={700} direction={"up"} triggerOnce>
                    <Project 
                        img={mdiforum} 
                        title='Mauritania Digital Innovation Forum' 
                        technos={['wordpress']} 
                        description="Realization of Mauritania Digital Innovation Forum, landing page.
                                    Wich show the event agenda, speakers and parterners" 
                        link="https://mdiforum.com/" 
                        reverse={false}
                    />
                    <Project 
                        img={courat} 
                        title='Courat' 
                        technos={['symfony', 'bootstrap', 'mysql']} 
                        description="Contribution to the creation of Courat. An educational platform that 
                            allows students prepare for their exams by offering them resources such as archives and course videos online, 
                            during the Covid-19 crisis." 
                        link="https://courat.net" 
                        reverse={true}
                    />
                    <Project 
                        img={epcm} 
                        title='Cheikh Moussa Private Schools' 
                        technos={['symfony', 'bootstrap', 'mysql']} 
                        description="Contribution to the creation of Cheikh Moussa Private Schools showcase website" 
                        link="https://ecolescheikhmoussa.com/" 
                        reverse={false}
                    />
                    <Project 
                        img={po} 
                        title='Opportinuties Platform' 
                        technos={['codeigniter', 'jquery', 'bootstrap', 'mysql']} 
                        description="Design and realization of opportunities platform. 
                            A platform for internships, jobs and also activities such as company 
                            visits, employability training and seminars for Gaston Berger University students." 
                        reverse={true} 
                    />
                    <Project 
                        img={cridem} 
                        title='Cridem' 
                        technos={['symfony', 'postgresql']} 
                        description="Creation of a website like cridem.org with better design and responsivity" 
                        link="https://cridem.heroku.com"
                        reverse={false}
                    />
                    <Project 
                        img={daaddo} 
                        title='Daaddo Vdp' 
                        technos={['symfony', 'bootstrap', 'postgresql']} 
                        description="Showcase website for plastics wastes recycling startup in Mauritania" 
                        link="https://daaddo.heroku.com" 
                        reverse={true}
                    />
                    <Project 
                        img={lupin} 
                        title='Arsene Lupin' 
                        technos={['wordpress']} 
                        description="Presentation of the french movie Lupin" 
                        link="https://filmlupin.000webhostapp.com/" 
                        reverse={false}
                    />
                </Slide>
            </div>
        </Element>
    )
}

export default Works;