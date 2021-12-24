import React from "react";
import './Home.css'
import TypeWriterEffect from 'react-typewriter-effect';
import picture from "../../images/profile.jpg"

const Home = () => {
    return (
        <div className="py-5 md:py-10 md:my-24 px-7 grid grid-cols-3 gap-4">
            <div className="col-span-2 text-center">
                <h1 className="text-5xl md:text-7xl dark:text-gray-50">Hi! I'm Diafra Soumare</h1>
                <div className="text-xl md:text-4xl mt-5 dark:text-gray-400"
                >
                    I'm a
                <TypeWriterEffect
                    textStyle={{
                    textAlign: 'center'
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={[
                        ' freelancer',
                        ' problems solver',
                        ' full-stack web developer',
                    ]}
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={30}
                />
                </div>
            </div>
            <div className="picture">
                <img src={picture} alt="my picture" loading="lazy" className="shadow-xl w-60" />
            </div>
        </div>

        
    );
}

export default Home;