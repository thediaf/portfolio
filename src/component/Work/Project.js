import React from "react";
import { SiSymfony, SiBootstrap, SiMysql, SiPostgresql, SiJquery, SiCodeigniter, SiWordpress } from "react-icons/si";


const Project = (props) => {
    return (
        <figure className={"my-5 md:flex lg:w-4/5 md:p-0  " + (props.reverse ? " md:flex-row-reverse" : "")}>
            <img src={ props.img } alt={ props.title } loading="lazy"
                className="md:mb-0 w-screen transition transform duration-500 delay-300 h-64 self-center hover: hover:scale-125"
            />
            <div className={"dark:bg-blue-900 py-9 px-4 md:p-16 md:w-screen text-center shadow-blue-900 dark:shadow-gray-900 shadow-md rounded-xl md:text-left " + (props.reverse ? " md:-mr-12" : " md:-ml-12")}>
                <blockquote className="text-center dark:text-gray-300">
                    <h1 className="text-2xl dark:text-gray-300 text-blue-900 font-semibold my-3">{props.title}</h1>
                    <p className="">
                        {props.description}
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-gray-900 flex justify-center m-auto">
                    {
                        props.technos.map((techno, index) => {
                            switch (techno) {
                                case 'symfony':
                                    return (
                                        <SiSymfony key={ index } className="shadow p-2 text-4xl m-3 text-blue-900 dark:text-gray-100  hover:text-blue-400 dark:hover:text-blue-400" />
                                    
                                    )
                                case 'codeigniter':
                                    return(
                                        <SiCodeigniter key={ index } className="shadow p-2 text-4xl m-3 text-blue-900 dark:text-gray-100  hover:text-blue-400 dark:hover:text-blue-400" />
                                    )
                                case 'bootstrap':
                                    return (
                                        <SiBootstrap key={ index } className="shadow p-2 text-4xl m-3 text-blue-900 dark:text-gray-100  hover:text-blue-400 dark:hover:text-blue-400" />
                                    )
                                case 'tailwind':
                                    return (
                                        <SiJquery key={ index } className="shadow p-2 text-4xl m-3 text-blue-900 dark:text-gray-100  hover:text-blue-400 dark:hover:text-blue-400" />
                                    )
                                case 'mysql':
                                    return (
                                        <SiMysql key={ index } className="shadow p-2 text-4xl m-3 text-blue-900 dark:text-gray-100  hover:text-blue-400 dark:hover:text-blue-400" />
                                    )
                                case 'postgresql':
                                    return (
                                        <SiPostgresql key={ index } className="shadow p-2 text-4xl m-3 text-blue-900 dark:text-gray-100  hover:text-blue-400 dark:hover:text-blue-400" />
                                    )
                                case 'wordpress':
                                    return (
                                        <SiWordpress key={ index } className="shadow p-2 text-4xl m-3 text-blue-900 dark:text-gray-100  hover:text-blue-400 dark:hover:text-blue-400" />
                                    )
                                default:
                                    break;
                            }
                        })
                    }                          
                    </div>
                </figcaption>
                {props.link ?
                    <div className="text-gray-500 dark:text-gray-300 flex justify-center m-auto   ">
                        <a href={ props.link } className="shadow p-2 text-xl text-blue-900 dark:text-gray-100  hover:text-blue-400 dark:hover:text-blue-400">
                            Live demo
                        </a>
                    </div>
                : "" }
            </div>
        </figure>
    )
}

export default Project;