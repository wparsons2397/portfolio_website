import React from "react";
import './ContentContainer.css';
import logo from './../../logo.svg';

function ContentContainer({color}) {

    return(
        <div className="ContantContainer" style={{background: color}}>
            <p>TEST TEST TEST</p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
          <p style={{zIndex:10}}> This is my portfolio website, it is currently under construction. Please come back at a later date.</p>
        </div>
    )

}

export default ContentContainer;