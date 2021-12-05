import React from "react";
import TabsRender from "./Tabs";

const About = () => {
    return (
        <section className="about md:min-h-screen" id="about">
            <div className="title right-title pr-10 text-3xl">
                about
            </div>
            <div className="mb-3 md:mr-5 pb-5 px-10 text-justify md:flex gap-4">
                <div className="flex-none md:mr-7">
                    <img src="images/avatar.png" alt="my picture" className="shadow-lg w-56 mx-auto" />
                </div>
                <div className="flex-none md:flex-1">
                    <p className="text-xl mt-8 md:mt-0  rotate-180 before:bg-blue-500"
                    > 
                        Hello! I'm Diafra Soumare, a passionate software engineer. 
                        I develop web application and design database. 
                        My core skill is based on PHP and JavaScript and I love to do most of the things using 
                        Symfony, a PHP framework. I love to make the web more open to the world. I have graduated with 
                        a bachelor's degree in Computer Science Engineering from Gaston Berger University at 
                        Saint-Louis, Senegal in 2020. I am available for any kind of job opportunity that suits my interests.
                    </p>
                </div>
            </div>
            <TabsRender />
            
        </section>
    )
}

export default About;