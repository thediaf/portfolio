import React from "react";
import './Home.css'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {
    return (
        <div className="py-5 md:py-12 px-10 grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <h1 className="text-4xl">Hi! I'm Diafra Soumare</h1>
                <p className="text-2xl animate-pulse rotate-180 before:bg-blue-500"
                >
                    I'm a Full-stack web developer,<br/>
                    a freelancer and a problem solver
                </p>
            </div>
            <div className="picture">
                <img src="images/avatar.png" alt="my picture" className="shadow-xl w-56" />
            </div>
        </div>

        
    );
}

export default Home;