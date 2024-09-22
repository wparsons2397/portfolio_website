import React from "react";
import './Sidebar.css';
import Spacer from "../Common/Spacer";

function Sidebar() {
    return(
        <div className="Sidebar">
            <Spacer spacer="100px"/>
            <div>Graphic or something here</div>
            <Spacer spacer="100px"/>
            <div id="L1">Link 1</div>
            <Spacer spacer="100px"/>
            <div id="L2">Link 2</div>
        </div>
    )
}

export default Sidebar;