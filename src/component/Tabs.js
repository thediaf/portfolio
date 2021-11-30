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
								: " border-white")
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
								: " border-white")
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
								: " border-white")
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
								: " border-white")
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
						<div className={openTab === 1 && openButton === 1 ? "block" : "hidden"} id="link1">
							<p>
								Collaboratively administrate empowered markets via
								plug-and-play networks. Dynamically procrastinate B2C users
								after installed base benefits.
								<br />
								<br /> Dramatically visualize customer directed convergence
								without revolutionary ROI.
							</p>
						</div>
						<div className={openTab === 2 && openButton === 1 ? "block" : "hidden"} id="link2">
							<p>
								Completely synergize resource taxing relationships via
								premier niche markets. Professionally cultivate one-to-one
								customer service with robust ideas.
								<br />
								<br />
								Dynamically innovate resource-leveling customer service for
								state of the art customer service.
							</p>
						</div>
						<div className={openTab === 3 && openButton === 1 ? "block" : "hidden"} id="link1">
							<p>
								after installed base benefits.
								Collaboratively administrate empowered markets via
								plug-and-play networks. Dynamically procrastinate B2C users
								<br />
								<br /> Dramatically visualize customer directed convergence
								without revolutionary ROI.
							</p>
						</div>
						<div className={openTab === 1 && openButton === 2 ? "block" : "hidden"} id="link1">
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
