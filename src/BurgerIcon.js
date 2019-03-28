//import
import React from "react"

//exports a simple burger menu icon
//3 divs to manipulate with css to create 3 bars
export default ({open, ...props}) => (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="topBar"  />
        <div className="midBar"  />
        <div className="botBar"  />
    </div>
);