import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF,FaTwitter,FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Element } from "react-scroll";
import { Slide } from "react-awesome-reveal"

const Contact = () => {
    return (
        <Element className="contact" id="contact" name="contact">
            <div className="title left-title text-blue-900 dark:text-blue-400 pl-10 text-3xl">
                contact me
            </div>

            <Slide delay={200} duration={700} direction={"up"} triggerOnce cascade>
            <div className="my-12 md:my-20 pb-5 px-7 gap-4 dark:text-gray-300">
                <p className="md:mx-40 text-center">
                    I am interested in working with any company that thinks my skills will be 
                    helpful for them. Let me know if you are looking for someone like me. 
                </p>
                <div className="md:flex">
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white dark:bg-blue-900 shadow rounded-lg mx-3 my-7">
                        <FaEnvelope className="text-4xl text-blue-900 dark:text-gray-200 mx-auto" />
                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
                            jaharacs98@gmail.com
                        </p>
                    </div>
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white dark:bg-blue-900 shadow rounded-lg mx-3 my-7">
                        <FaPhone className="text-4xl text-blue-900 dark:text-gray-200 mx-auto" />
                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
                            +221 77 856 17 10
                        </p>
                    </div>
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white dark:bg-blue-900 shadow rounded-lg mx-3 my-7">
                        <FaMapMarkerAlt className="text-4xl text-blue-900 dark:text-gray-200 mx-auto" />
                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
                            Gueule Tapée, Dakar
                        </p>
                    </div>
                </div>

                <div className="flex justify-center text-3xl">
                    <a href="https://www.facebook.com/diafra.soumare.98" className="m-3 text-blue-900 dark:text-blue-400">
                        <FaFacebookF />
                    </a>
                    <a href="https://github.com/thediaf" className="m-3 text-blue-900 dark:text-blue-400">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/diafra-soumar%C3%A9-a53b8518a/" className="m-3 text-blue-900 dark:text-blue-400">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://twitter.com/diafra_soumare" className="m-3 text-blue-900 dark:text-blue-400">
                        <FaTwitter />
                    </a>
                </div>
            </div>
            </Slide>
        </Element>
    )
}

export default Contact;