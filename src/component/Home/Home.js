import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF,FaTwitter,FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Home.css'
import TypeWriterEffect from 'react-typewriter-effect';
import picture from "../../images/profil.jpg"

const Home = () => {
    return (
        <div className="py-5 md:py-10 md:my-24 px-7 grid grid-cols-3 gap-4">
            <div className="col-span-2 text-center intro">
                <h1 className="text-5xl md:text-7xl">Hi! I'm 
                    <div className="text-blue-900 dark:text-gray-50"> Diafra Soumare </div>
                </h1>
                <div className="text-xl md:text-4xl mt-5 dark:text-gray-400"
                >
                    I'm a
                    <div className="text-blue-900 dark:text-gray-50">
                <TypeWriterEffect
                    textStyle={{
                    textAlign: 'center'
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={[
                        ' freelancer',
                        ' problems solver',
                        ' web developer',
                    ]}
                    loop={true}
                    nextTextDelay={1000}
                    typeSpeed={30}
                /></div>
                </div>
                <div className="flex justify-center text-3xl text-blue-800 dark:text-blue-400">
                    <a href="mailto:jaharacs98@gmail.com" className="m-3">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.facebook.com/diafra.soumare.98" className="m-3">
                        <FaFacebookF />
                    </a>
                    <a href="https://github.com/thediaf" className="m-3">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/diafra-soumar%C3%A9-a53b8518a/" className="m-3">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://twitter.com/diafra_soumare" className="m-3">
                        <FaTwitter />
                    </a>
                </div>
            </div>
            
            <div className="picture">
                <img src={picture} alt="my picture" loading="lazy" className="shadow-xl w-60" />
            </div>
        </div>


        
    );
}

export default Home;