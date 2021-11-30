import React, { useState } from "react";

const Tabs = ({ buttonColor, tabColor }) => {
	
	const [openButton, setOpenButton] = useState(1);
  	const [openTab, setOpenTab] = useState(1);
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-screen">
        	<ul class="flex justify-center space-x-2">
                <li>
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openButton === 1
                        ? "text-white bg-" + buttonColor
                        : "text-" + buttonColor + " bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenButton(1);
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
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openButton === 2
                      ? "text-white bg-" + buttonColor
                      : "text-" + buttonColor + " bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenButton(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Formations
                </a>                
              </li>
                
            </ul>
			<div class="flex justify-center items-center">
				<div className={openButton === 1 ? "block" : "hidden"}>
					<ul class="flex justify-center items-center my-4">
						<li class={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 " +
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
						<li class={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 " +
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
						<li class={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 " +
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
					<ul class="flex justify-center items-center my-4">
						<li class={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 " +
								(openTab === 1
								? "border-" + tabColor
								: " border-gray-300")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(1);
								}}
						>
							License
						</li>
						<li class={"cursor-pointer py-2 px-4  border-b-8 text-gray-900 " +
								(openTab === 2
								? "border-" + tabColor
								: " border-white")
							}
							onClick={e => {
								e.preventDefault();
								setOpenTab(2);
								}}
						>
							Baccalaureate
						</li>
						
					</ul>
				</div>
			</div>
			<div className="relative flex flex-col min-w-0 break-words bg-white w-auto items-center mb-6 ">
				<div className="px-4 py-5 flex-auto">
					<div className="tab-content tab-space">
						<div className={openTab === 1 && openButton === 1 ? "block text-justify lg:ml-80" : "hidden"} id="link1">
							<h3>Internship @ <span className="text-gray-700">CCOS</span></h3>
							<span>November 2020 - April 2021</span>
							<p className="mt-2">Design and realization of opportunities platform  for Gaston Berger University students .</p>
							<ul className="detail">
								<li>Rewriting of the specifications</li>
								<li>Database modeling with UML</li>
								<li>Website creation with CodeIgniter</li>
							</ul>
						</div>
						<div className={openTab === 2 && openButton === 1 ? "block text-justify lg:ml-20" : "hidden"} id="link1">
							<h3>Hackathon DevFest @ <span className="text-gray-700">Google Developer Group</span></h3>
							<span>November 2020 - April 2021</span>
							<p className="mt-2">Creation of a web application for school management</p>
						</div>
						<div className={openTab === 3 && openButton === 1 ? "block text-justify lg:ml-64" : "hidden"} id="link1">
							<h3>72h d'hackathon @ <span className="text-gray-700">CI UGB</span></h3>
							<span>November 2020 - April 2021</span>
							<p className="mt-2">Prototyping and creation of an application of classroom schedule management</p>
						</div>
						<div className={openTab === 1 && openButton === 2 ? "block text-justify" : "hidden"} id="link1">
							<p>
								plug-and-play networks. Dynamically procrastinate B2C users
								Collaboratively administrate empowered markets via
								after installed base benefits.
								<br />
								<br /> Dramatically visualize customer directed convergence
								without revolutionary ROI.
							</p>
						</div>
						<div className={openTab === 2 && openButton === 2 ? "block" : "hidden"} id="link1">
							<p>
								Dramatically visualize customer directed convergence
								plug-and-play networks. Dynamically procrastinate B2C users
								after installed base benefits.
								Collaboratively administrate empowered markets via
								<br />
								without revolutionary ROI.
							</p>
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
       <Tabs buttonColor="black" tabColor="black" />;
    </>
  );
}
