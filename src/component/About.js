import React from "react";
import TabsRender from "./Tabs";

const About = () => {
    return (
        <section className="">
            <div className="title mr-4 text-3xl">
                about
            </div>
            <div className="py-5 md:py-12 px-10 grid grid-flow-row grid-cols-3 gap-4">
                <div className="picture">
                    <img src="images/avatar.png" alt="my picture" className="shadow-xl w-56" />
                </div>
                <div className="col-span-2">
                    <p className="text-2xl  rotate-180 before:bg-blue-500"
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