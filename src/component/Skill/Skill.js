import React from 'react';
import { Element } from "react-scroll";
import { Slide } from "react-awesome-reveal"
import SkillLogo from './SkillLogo';

import php from "../../images/php.png"
import javascript from "../../images/javascript.png"
import sql from "../../images/sql.png"
import html from "../../images/html.png"
import css from "../../images/css.png"
import symfony from "../../images/symfony.png"
import react from "../../images/react.png"
import codeigniter from "../../images/codeigniter.png"
import tailwind from "../../images/tailwind.png"
import bootstrap from "../../images/bootstrap.png"
import jquery from "../../images/jquery.png"
import mysql from "../../images/mysql.png"
import oracle from "../../images/oracle.png"
import postgresql from "../../images/postgresql.png"
import git from "../../images/git.png"
import github from "../../images/github.png"
import npm from "../../images/npm.png"
import composer from "../../images/composer.png"
import linux from "../../images/linux.png"
import yarn from "../../images/yarn.png"
import heroku from "../../images/heroku.png"
import wordpress from "../../images/wordpress.png"

const Skill = () =>{
    const languages     =   [php, javascript, sql, css, html];
    const frameworks    =   [symfony, codeigniter, react, jquery, tailwind, bootstrap]
    const databases     =   [mysql, oracle, postgresql]
    const tools         =   [git, github, composer, npm, yarn, heroku, linux, wordpress]

    return (
        <div className=" flex justify-center wow slideInLeft">
        <Element className="skill" id="skills" name="skills">
             <div className="title dark:text-gray-50 left-title pl-10 text-3xl">
                my skills
            </div>
            <div className="mb-3 md:ml-5 pb-5 px-7 text-justify gap-4 dark:text-gray-300">
            <Slide delay={200} duration={700} direction={"up"} triggerOnce>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Languages</span>
                    <div className="flex flex-wrap">
                        { languages.map((language, index) =>
                            {return (
                                <SkillLogo logo={language} alt="language" key={index} />
                            )}
                        )}
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Frameworks and libraries</span>
                    <div className="flex flex-wrap my-3">
                        { frameworks.map((framework, index) =>
                            {return (
                                <SkillLogo logo={framework} alt="framework" key={index} />
                            )}
                        )}
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Databases</span>
                    <div className="flex flex-wrap my-3">
                        { databases.map((database, index) =>
                            {return (
                                <SkillLogo logo={database} alt="database" key={index} />
                            )}
                        )}
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Tools</span>
                    <div className="flex flex-wrap my-3">
                        { tools.map((tool, index) =>
                            {return (
                                <SkillLogo logo={tool} alt="tool" key={index} />
                            )}
                        )}
                    </div>
                </div>
            </Slide>
            </div>
        </Element>
        </div>
    )
}

export default Skill;