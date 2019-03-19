import React from "react"

export default ({open, ...props}) => (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="topBar"  />
        <div className="midBar"  />
        <div className="botBar"  />
    </div>
);