import React, { useState } from "react";
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
                        ? "text-white bg-" + buttonColor
                        : "text-" + buttonColor + " bg-white")
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
                      ? "text-white bg-" + buttonColor
                      : "text-" + buttonColor + " bg-white")
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
			<div className="flex justify-center items-center">
				<div className={openButton === 1 ? "block" : "hidden"}>
					<ul className="flex justify-center items-center my-4">
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 dark:text-gray-400 " +
								(openTab === 1
								? "border-" + tabColor
								: " border-gray-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(1);
								}}
						>
							Stage
						</li>
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 dark:text-gray-400 " +
								(openTab === 2
								? "border-" + tabColor
								: " border-gray-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(2);
								}}
						>
							Hackathon
						</li>
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 dark:text-gray-400 " +
								(openTab === 3
								? "border-" + tabColor
								: " border-gray-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(3);
								}}
						>
							Hackathon
						</li>
					</ul>
				</div>
				<div className={openButton === 2 ? "block" : "hidden"}>
					<ul className="flex justify-center items-center my-4">
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 dark:text-gray-400 " +
								(openTab === 1
								? "border-" + tabColor
								: " border-gray-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(1);
								}}
						>
							Bachelor 
						</li>
						<li className={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 dark:text-gray-400 " +
								(openTab === 2
								? "border-" + tabColor
								: " border-gray-300")
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
			</div>
			<div className="relative flex flex-col min-w-0 break-words  w-auto items-center">
				<div className="px-10 flex-auto">
					<div className="tab-content tab-space dark:text-gray-300">
						<div className={openTab === 1 && openButton === 1 ? "block text-justify lg:ml-80" : "hidden"} id="link1">
							<h3 className="text-xl">Internship @ 
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
						<div className={openTab === 2 && openButton === 1 ? "block text-justify lg:ml-28" : "hidden"} id="link1">
							<h3 className="text-xl">Hackathon DevFest @ <span className="text-gray-700">Google Developer Group</span></h3>
							<span>Janvier 2020 </span>
							<p className="mt-2">Creation of a web application for school management</p>
						</div>
						<div className={openTab === 3 && openButton === 1 ? "block text-justify lg:ml-64" : "hidden"} id="link1">
							<h3 className="text-xl">72h d'hackathon @ 
								<Tooltip accronyme=' CC UGB' description="Computer Club of Gaston Berger University" />
							</h3>
							<span>Mars 2018</span>
							<p className="mt-2">Prototyping and creation of an application of classroom schedule management</p>
						</div>
						<div className={openTab === 1 && openButton === 2 ? "block text-justify lg:ml-32" : "hidden"} id="link1">
							<h3 className="text-xl">Gaston Berger University @ <span className="text-gray-700">Saint-Louis</span></h3>
							<span>2017 - 2020</span>
							<p className="mt-2">Professional license in Computer Engineering</p>
						</div>
						<div className={openTab === 2 && openButton === 2 ? "block text-justify lg:ml-36" : "hidden"} id="link1">
							<h3 className="text-xl">Dioukhamadya High School @ <span className="text-gray-700">Nouakchott</span></h3>
							<span>2016 - 2017</span>
							<p className="mt-2">Baccalaureate Mathematics Serie</p>
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
