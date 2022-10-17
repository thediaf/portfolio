import React from "react";
import { createPopper } from "@popperjs/core";

const Tooltip = ({accronyme, description}) => {
  const [tooltipShow, setTooltipShow] = React.useState(false);

  const btnRef = React.createRef();

  const tooltipRef = React.createRef();
  
  const openLeftTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "right"
    });
    setTooltipShow(true);
  };
  
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  
  return (
    <>
      <a className="text-blue-700" 
            onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
            ref={btnRef}
        >
            {accronyme}
        </a>
    
        <div
            className={
            (tooltipShow ? "" : "hidden ") +
            "bg-gray-800 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={tooltipRef}
        >
            <div className="text-white p-3">
                {description}
            </div>
        </div>   
    </>
  );
};

export default Tooltip;
