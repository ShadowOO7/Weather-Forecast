//https://api.weatherapi.com/v1/current.json?key=89e5a287ac164d32a6771105251307&q=Raipur&aqi=no

import React from "react";

const Button = (props) =>{
   return (
     <button className="btn" onClick={props.onClick}>
        {props.value}
    </button>
    );
};

export default Button;

