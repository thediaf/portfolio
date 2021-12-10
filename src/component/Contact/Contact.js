import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF,FaTwitter,FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Element } from "react-scroll";

const Contact = () => {
    return (
        <Element className="contact" id="contact" name="contact">
            <div className="title left-title pl-10 text-3xl">
                contact me
            </div>

            <div className="my-12 md:my-20 pb-5 px-7 gap-4">
                <p className="md:mx-40 text-center">
                    I am interested in working with any company that thinks my skill will be 
                    helpful for them. If you are looking for someone like me, please let me know. 
                    Or you can just 'say hi' to me.
                </p>
                <div className="md:flex">
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white shadow-md rounded-lg mx-3 my-7">
                        <FaEnvelope className="text-4xl mx-auto" />
                        <p className="mt-2 text-gray-600">
                            jaharacs98@gmail.com
                        </p>
                    </div>
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white shadow-md rounded-lg mx-3 my-7">
                        <FaPhone className="text-4xl mx-auto" />
                        <p className="mt-2 text-gray-600">
                            +222 48 29 17 06
                        </p>
                    </div>
                    <div className="max-w-md md:flex-1 py-4 px-8 bg-white shadow rounded-lg mx-3 my-7">
                        <FaMapMarkerAlt className="text-4xl mx-auto" />
                        <p className="mt-2 text-gray-600">
                            Sebkha, Nouakchott
                        </p>
                    </div>
                </div>

                <div className="flex justify-center text-3xl">
                    <span className="m-3">
                        <FaFacebookF />
                    </span>
                    <span className="m-3">
                        <FaGithub />
                    </span>
                    <span className="m-3">
                        <FaLinkedinIn />
                    </span>
                    <span className="m-3">
                        <FaTwitter />
                    </span>
                </div>
            </div>
        </Element>
    )
}

export default Contact;