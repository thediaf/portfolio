import React, { useState } from "react";

const TabsButton = ({ buttonIndex, title, openButton }) => {
	console.log(openButton, buttonIndex);
  return (
    <>
        <li>
            <a
            className={
                "transition delay-150 duration-500 transform hover:shadow-md hover:scale-125 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                ( openButton  ==  buttonIndex 
                ? "text-white bg-black"
                : "text-black bg-white")
            }
            onClick={e => {
                e.preventDefault();
                openButton  = buttonIndex
                
              }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
            >
            { title }
            </a>
        </li>
    </>
  );
};

export default TabsButton;
