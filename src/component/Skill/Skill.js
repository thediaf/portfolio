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
import postgre from "../../images/postgres.png"
import git from "../../images/git.png"
import npm from "../../images/npm.png"
import composer from "../../images/composer.png"
import linux from "../../images/linux.png"
import yarn from "../../images/yarn.png"
import heroku from "../../images/heroku.png"

const Skill = () =>{
    return (
        <div className=" flex justify-center wow slideInLeft">
        <Element className="skill" id="skills" name="skills">
             <div className="title left-title pl-10 text-3xl">
                my skills
            </div>
            <div className="mb-3 md:ml-5 pb-5 px-7 text-justify gap-4">
            <Slide delay={200} duration={700} direction={"up"} triggerOnce>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Languages</span>
                    <div className="flex flex-wrap">
                        <SkillLogo logo={php} alt="php" />
                        <SkillLogo logo={javascript} alt="javascript" />
                        <SkillLogo logo={sql} alt="sql" />
                        <SkillLogo logo={css} alt="css" />
                        <SkillLogo logo={html} alt="html" />
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Frameworks and libraries</span>
                    <div className="flex flex-wrap my-3">
                        <SkillLogo logo={symfony} alt="symfony" />
                        <SkillLogo logo={react} alt="react" />
                        <SkillLogo logo={codeigniter} alt="codeigniter" />
                        <SkillLogo logo={jquery} alt="jquery" />
                        <SkillLogo logo={tailwind} alt="tailwind" />
                        <SkillLogo logo={bootstrap} alt="bootstrap" />
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Databases</span>
                    <div className="flex flex-wrap my-3">
                        <SkillLogo logo={mysql} alt="mysql" />
                        <SkillLogo logo={oracle} alt="oracle" />
                        <SkillLogo logo={postgre} alt="postgre" />
                    </div>
                </div>
                <div className="md:ml-5 mt-4">
                    <span className="text-xl font-bold">Tools</span>
                    <div className="flex flex-wrap my-3">
                        <SkillLogo logo={git} alt="git" />
                        <SkillLogo logo={composer} alt="composer" />
                        <SkillLogo logo={npm} alt="npm" />
                        <SkillLogo logo={yarn} alt="yarn" />
                        <SkillLogo logo={heroku} alt="heroku" />
                        <SkillLogo logo={linux} alt="linux" />
                    </div>
                </div>
            </Slide>
            </div>
        </Element>
        </div>
    )
}

export default Skill;