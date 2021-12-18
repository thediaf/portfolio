import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF,FaTwitter,FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Element } from "react-scroll";
import { Slide } from "react-awesome-reveal"

const Contact = () => {
    return (
        <Element className="contact" id="contact" name="contact">
            <div className="title left-title pl-10 text-3xl">
                contact me
            </div>

            <Slide delay={200} duration={700} direction={"up"} triggerOnce cascade>
            <div className="my-12 md:my-20 pb-5 px-7 gap-4">
                <p className="md:mx-40 text-center">
                    I am interested in working with any company that thinks my skills will be 
                    helpful for them. Let me know if you are looking for someone like me. 
                </p>
                <div className="md:flex">
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white shadow-md rounded-lg mx-3 my-7">
                        <FaEnvelope className="text-4xl mx-auto" />
                        <p className="mt-2 text-gray-600 text-center">
                            jaharacs98@gmail.com
                        </p>
                    </div>
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white shadow-md rounded-lg mx-3 my-7">
                        <FaPhone className="text-4xl mx-auto" />
                        <p className="mt-2 text-gray-600 text-center">
                            +221 77 856 17 10
                        </p>
                    </div>
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white shadow rounded-lg mx-3 my-7">
                        <FaMapMarkerAlt className="text-4xl mx-auto" />
                        <p className="mt-2 text-gray-600 text-center">
                            Grand Yoff, Dakar
                        </p>
                    </div>
                </div>

                <div className="flex justify-center text-3xl">
                    <a href="https://web.facebook.com/diafara.soumare.7" className="m-3">
                        <FaFacebookF />
                    </a>
                    <a href="https://github.com/thediaf" className="m-3">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/diafra-soumar%C3%A9-a53b8518a/" className="m-3">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://twitter.com/Diafra98" className="m-3">
                        <FaTwitter />
                    </a>
                </div>
            </div>
            </Slide>
        </Element>
    )
}

export default Contact;