import React, { useState } from "react";
import './Tabs.css'
import Tooltip from "./Tooltips";

const Tabs = ({ buttonColor, tabColor }) => {
	
	const [openButton, setOpenButton] = useState(1);
  	const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-screen">
        	<ul className="flex justify-center space-x-2">
                
				<li>
                  <a
                    className={
                      "transition delay-150 duration-500 transform hover:shadow-md hover:scale-125 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openButton === 1
                        ? "text-gray-50 bg-blue-900"
                        : "text-blue-900 bg-gray-50")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenButton(1);
					  setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Experiences
                  </a>
                </li>
                <li> 
                  <a
                  className={
                    "transition delay-150 duration-500 transform hover:shadow-md hover:scale-125 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openButton === 2
                        ? "text-gray-50 bg-blue-900"
                        : "text-blue-900 bg-gray-50")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenButton(2);
					setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Formations
                </a>                
              </li>
                
            </ul>
			<div className="md:flex lg:w-1/2 md:w-3/4 mx-auto">
				<div className={"overflow-x-auto md:overflow-x-hidden " + (openButton === 1 ? "block" : "hidden")}>
					<ul className="flex md:flex-col  items-center my-4">
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-blue-900 dark:text-blue-500 " +
								(openTab === 1
								? "border-blue-900 dark:border-blue-500"
								: " border-blue-300 dark:border-blue-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(1);
								}}
						>
							Developer
						</li>
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-blue-900 dark:text-blue-500 " +
								(openTab === 2
								? "border-blue-900 dark:border-blue-500"
								: " border-blue-300 dark:border-blue-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(2);
								}}
						>
							Freelancer
						</li>
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-blue-900 dark:text-blue-500 " +
								(openTab === 3
								? "border-blue-900 dark:border-blue-500"
								: " border-blue-300 dark:border-blue-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(3);
								}}
						>
							Internship
						</li>
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-blue-900 dark:text-blue-500 " +
								(openTab === 4
								? "border-blue-900 dark:border-blue-500"
								: " border-blue-300 dark:border-blue-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(4);
								}}
						>
							Hackathon
						</li>
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-blue-900 dark:text-blue-500 " +
								(openTab === 5
								? "border-blue-900 dark:border-blue-500"
								: " border-blue-300 dark:border-blue-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(5);
								}}
						>
							Hackathon
						</li>
					</ul>
				</div>
				<div className={openButton === 2 ? "block" : "hidden"}>
					<ul className="flex md:flex-col justify-center items-center my-4">
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-blue-900 dark:text-blue-500 " +
								(openTab === 1
								? "border-blue-900 dark:border-blue-500"
								: " border-blue-300 dark:border-blue-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(1);
								}}
						>
							Bachelor 
						</li>
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-blue-900 dark:text-blue-500 " +
								(openTab === 2
								? "border-blue-900 dark:border-blue-500"
								: " border-blue-300 dark:border-blue-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(2);
								}}
						>
							High School Diploma
						</li>
						
					</ul>
				</div>
			
				<div className="relative flex flex-col mx-3 break-words my-4 md:my-8 md:w-3/4 items-center">
					<div className="px-10 flex-auto">
						<div className="tab-content tab-space dark:text-gray-300">
							<div className={openTab === 1 && openButton === 1 ? "block text-justify" : "hidden"} id="link1">
								<h3 className="text-xl text-blue-900 dark:text-blue-500">Web Developer @ 
									<span className="text-blue-700">NEOTIC</span>
								</h3>
								<span>January 2022 - Present</span>
								<ul className="detail">
									<li>Analysis of needs expressed on specifications</li>
									<li>Applications development</li>
									<li>Proposal for improvements (functionalities, ergonomics, ect.)</li>
								</ul>
								<p className="mt-2"> 
									<span className="font-bold">Skills: </span> 
									Symfony - Tailwind - Wordpress - Figma
								</p>
							</div>
							<div className={openTab === 2 && openButton === 1 ? "block text-justify" : "hidden"} id="link1">
								<h3 className="text-xl text-blue-900 dark:text-blue-500">Internship @ 
									<Tooltip accronyme=' CCOS' description="Computing Center Ousmane Seck of Gaston Berger University" />
								</h3>
								<span>July 2021 - Present</span>
								<ul className="detail">
									<li>Design and build web applications</li>
									<li>Design of application prototypes</li>
									<li>Mailing campaign management</li>
								</ul>
								<p className="mt-2"> 
									<span className="font-bold">Skills: </span> 
									Symfony - Tailwind - Wordpress - Figma
								</p>
							</div>
							<div className={openTab === 3 && openButton === 1 ? "block text-justify" : "hidden"} id="link1">
								<h3 className="text-xl text-blue-900 dark:text-blue-500">Internship @ 
									<Tooltip accronyme=' CCOS' description="Computing Center Ousmane Seck of Gaston Berger University" />
								</h3>
								<span>November 2020 - April 2021</span>
								<p className="mt-2">Design and realization of opportunities platform  for Gaston Berger University students .</p>
								<ul className="detail">
									<li>Rewriting of the specifications</li>
									<li>Database modeling with UML</li>
									<li>Website creation with CodeIgniter</li>
								</ul>
							</div>
							<div className={openTab === 4 && openButton === 1 ? "block text-justify" : "hidden"} id="link1">
								<h3 className="text-xl text-blue-900 dark:text-blue-500">DevFest Hackathon @ 
									<Tooltip accronyme=' GDG Nktt' description="Google Developer Group Nouakchott" />
								</h3>
								<span>January 2020</span>
								<p className="mt-2">
									Creation of a web application for the management of Mauritanian schools
								</p>
							</div>
							<div className={openTab === 5 && openButton === 1 ? "block text-justify" : "hidden"} id="link1">
								<h3 className="text-xl text-blue-900 dark:text-blue-500">72h Hackathon @ 
									<Tooltip accronyme=' CC UGB' description="Computer Club of Gaston Berger University" />
								</h3>
								<span>March 2018</span>
								<p className="mt-2">Prototyping and creation of an application of classroom schedule management</p>
							</div>
							<div className={openTab === 1 && openButton === 2 ? "block text-justify" : "hidden"} id="link1">
								<h3 className="text-xl text-blue-900 dark:text-blue-500">Gaston Berger University @ <span className="text-gray-700">Saint-Louis</span></h3>
								<span>2017 - 2020</span>
								<p className="mt-2">Professional license in Computer Engineering</p>
							</div>
							<div className={openTab === 2 && openButton === 2 ? "block text-justify" : "hidden"} id="link1">
								<h3 className="text-xl text-blue-900 dark:text-blue-500">Dioukhamadya High School @ <span className="text-gray-700">Nouakchott</span></h3>
								<span>2016 - 2017</span>
								<p className="mt-2">Baccalaureate Mathematics Serie</p>
							</div>						
						</div>
					</div>
				</div>
			</div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs buttonColor="black" tabColor="black" />
    </>
  );
}
