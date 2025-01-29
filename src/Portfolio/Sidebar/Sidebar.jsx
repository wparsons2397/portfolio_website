import React, { useEffect, useState } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import './Sidebar.css';
import Spacer from "../../CommonComponents/Spacer/Spacer";

function Sidebar() {
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navBarHeight = 60; // Adjust this value to match the height of your NavBar
    const maxTopPosition = 225; // Maximum top position

    return(
        <div className="Sidebar" style={{ top: `${Math.min(navBarHeight + scrollY / 2, maxTopPosition)}px` }}>
            <Spacer spacer="50px" color="#a0a0a0"/>
            <a id="L1" href="https://www.linkedin.com/in/william-parsons-23ct/">LinkedIn</a>
            <Spacer spacer="50px" color="#a0a0a0"/>
            <a id="L2" href="https://www.linkedin.com/in/william-parsons-23ct/">Resume Link WIP </a>
            <Spacer spacer="50px" color="#a0a0a0"/>
            <a id="L3" href="https://github.com/wparsons2397/portfolio_website">GitHub</a>
            <Spacer spacer="50px" color="#a0a0a0"/>
            <button onClick={backToTop} id="backToTop">Back to the top</button>
            <Spacer spacer="50px" color="#a0a0a0"/>
        </div>
    );
}

export default Sidebar;