import React from "react";
import { SiSymfony, SiBootstrap, SiMysql, SiPostgresql, SiJquery, SiCodeigniter } from "react-icons/si";


const Project = (props) => {
    return (
        <figure className={"md:flex lg:w-4/5 my-5 md:p-0" + (props.reverse ? " md:flex-row-reverse" : "")}>
            <img src={ props.img } alt={ props.title }  loading="lazy"
                className="-mb-5 md:mb-0 transition transform duration-500 delay-300 h-56 lg:h-64 self-center hover: hover:scale-125"
            />
            <div className={"pt-9 px-4 md:p-16 md:w-screen text-center shadow-lg rounded-xl md:text-left " + (props.reverse ? " md:-mr-12" : " md:-ml-12")}>
                <blockquote className="text-center">
                    <h1 className="text-2xl font-semibold">{props.title}</h1>
                    <p className="">
                        {props.description}
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-gray-500 flex justify-center m-auto">
                    {
                        props.technos.map((techno, index) => {
                            if (techno === 'symfony') {
                                return (
                                    <a key={index}>
                                        <SiSymfony className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                )
                            }
                            else if (techno === 'codeigniter') {
                                return (
                                    <a key={index}>
                                        <SiCodeigniter className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                )
                            }
                            else if (techno === 'bootstrap') {
                                return (
                                    <a key={index}>
                                        <SiBootstrap className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                )
                            }
                            else if (techno === 'jquery') {
                                return (
                                    <a key={index}>
                                        <SiJquery className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                )
                            }
                            else if (techno === 'mysql') {
                                return (
                                    <a key={index}>
                                        <SiMysql className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                )
                            }
                            else if (techno === 'postgresql') {
                                return (
                                    <a key={index}>
                                        <SiPostgresql className="shadow p-2 text-4xl m-3 hover:text-gray-900" />
                                    </a>
                                )
                            }
                        })
                    }                          
                    </div>
                </figcaption>
                {props.link ?
                    <div className="text-gray-500 flex justify-center m-auto   ">
                        <a href={ props.link } className="shadow p-2 text-xl hover:text-gray-900">
                            Live demo
                        </a>
                    </div>
                : "" }
            </div>
        </figure>
    )
}

export default Project;