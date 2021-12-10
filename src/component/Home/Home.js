import React from "react";
import './Home.css'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
    return (
        <div className="py-5 md:py-10 md:my-24 px-7 grid grid-cols-3 gap-4">
            <div className="col-span-2 text-center">
                <h1 className="text-5xl md:text-7xl">Hi! I'm Diafra Soumare</h1>
                <div className="text-xl md:text-4xl mt-5"
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
                        ' problem solver',
                        ' full-stack web developer',
                    ]}
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={30}
                />
                </div>
            </div>
            <div className="picture">
                <img src="images/avatar.png" alt="my picture" className="shadow-xl w-64 animate-wiggle" />
            </div>
        </div>

        
    );
}

export default Home;