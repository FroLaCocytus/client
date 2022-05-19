import React from "react";

const Circle = ({truck}) => {
    const isEnabled = truck.enabled
    return (  
    <div> 
        <div style={isEnabled ? {
            width: "10px",
            height: "10px",
            background: "green",
            borderRadius: "50%"
        } : {
            width: "10px",
            height: "10px",
            background: "red",
            borderRadius: "50%"
        }}></div>
    </div>
  );
};

export default Circle;
